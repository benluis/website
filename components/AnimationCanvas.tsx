// components/AnimationCanvas.tsx

"use client";

import React, {Suspense, useCallback, useMemo, useRef} from 'react';
import {Canvas, useFrame, useLoader} from '@react-three/fiber';
import * as THREE from 'three';
import circleImg from '../public/assets/circle.png';

function Points() {
    const imgTex = useLoader(THREE.TextureLoader, circleImg.src);
    const bufferRef = useRef<THREE.BufferAttribute>(null!);
    const tRef = useRef(0);

    const f = 0.002;
    const a = 3;
    const graph = useCallback((x: number, z: number) => {
        return Math.sin(f * (x ** 2 + z ** 2 + tRef.current)) * a;
    }, [f, a]);

    const count = 100;
    const sep = 3;
    const positions = useMemo(() => {
        const positions: number[] = [];
        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                const x = sep * (xi - count / 2);
                const z = sep * (zi - count / 2);
                const y = graph(x, z);
                positions.push(x, y, z);
            }
        }
        return new Float32Array(positions);
    }, [count, sep, graph]);

    useFrame(() => {
        tRef.current += 15; // Update tRef.current
        const posArray = bufferRef.current.array as Float32Array;
        let i = 0;
        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                const x = sep * (xi - count / 2);
                const z = sep * (zi - count / 2);
                posArray[i + 1] = graph(x, z);
                i += 3;
            }
        }
        bufferRef.current.needsUpdate = true;
    });

    return (
        <points>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    ref={bufferRef}
                    attach="attributes-position"
                    args={[positions, 3]}
                    count={positions.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                attach="material"
                map={imgTex}
                color={0xFFFFFF}
                size={0.5}
                sizeAttenuation={true}
                transparent={false}
                alphaTest={0.5}
                opacity={1.0}
            />
        </points>
    );
}

export default function AnimationCanvas() {
    return (
        <Canvas
            camera={{position: [100, 10, 0], fov: 75}}
        >
            <Suspense fallback={null}>
                <Points/>
            </Suspense>
        </Canvas>
    );
}
// app/page.tsx
import Head from 'next/head';
import Link from 'next/link';
import React from "react";
import Image from 'next/image';
import AnimationCanvas from '../components/AnimationCanvas';
import DisableScroll from '../components/DisableScroll';

export default function HomePage() {
    return (
        <>
            <DisableScroll/>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="description" content="Hi, I am Ben Luis"/>
                <meta name="keywords" content="UNC, Computer Science, Statistics"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Hi, I am Ben Luis</title>
            </Head>

            {/* Header */}
            <div className="fixed-header">
                <div className="container">
                    <Image
                        alt="logo"
                        loading="lazy"
                        width={60}
                        height={60}
                        decoding="async"
                        className="logo"
                        src="/assets/logo.svg"
                        style={{color: 'transparent'}}
                    />
                    <div className="nav-links">
                        <Link href="/">home</Link>
                        <Link href="/about">about</Link>
                        <Link href="/project">projects</Link>
                    </div>
                </div>
            </div>

            {/* Full-page container with the wave behind */}
            <div className="relative w-full h-screen pt-16">
                {/* Particle Wave Background */}
                <div
                    id="animationCanvas"
                    className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden"
                    style={{top: '250px'}} // Adjust to move the wave up or down
                >
                    <AnimationCanvas/>
                </div>

                {/* Overlay Content */}
                <div className="relative z-10 flex items-center justify-center h-full p-4 text-left overlay-content">
                    <div className="w-1/2 flex flex-col items-start">
                        <h1 className="text-5xl font-bold mb-4">Hi, I am Ben Luis</h1>
                        <p className="text-2xl mb-6">UNC, Computer Science, Statistics</p>
                        <p className="text-lg">
                            Read more{' '}
                            <Link href="/about" className="bg-gray-200 text-black px-1 py-0.5 rounded">about</Link>
                            {' '}
                            or{' '}
                            <a href="mailto:benluis@ad.unc.edu" className="bg-amber-200 text-black px-1 py-0.5 rounded">
                                contact me
                            </a>
                            {' '}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
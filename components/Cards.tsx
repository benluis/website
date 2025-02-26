// components/Cards.tsx
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

// Define a type for the props
interface CardProps {
    title: string;
    description: string;
    href?: string;
    imgSrc?: string;
}

const Card: React.FC<CardProps> = ({ title, description, href, imgSrc }) => {
    return (
        <div className="m-4 w-full sm:w-1/2 lg:w-1/3">
            <Link href={href || '#'}>
                <a>
                    {imgSrc && (
                        <Image
                            src={imgSrc}
                            alt={title}
                            width={400}
                            height={250}
                            className="object-cover"
                        />
                    )}
                    <h3 className="mt-2 text-xl font-semibold">{title}</h3>
                    <p className="mt-1 text-gray-500">{description}</p>
                </a>
            </Link>
        </div>
    );
};

export default Card;

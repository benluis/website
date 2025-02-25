// app/project/page.tsx
import projectsData from '../../data/projectsData'
import Card from '../../components/Cards'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects | Ben Luis</title>
                <meta name="description" content="Projects by Ben Luis" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                        style={{ color: 'transparent' }}
                    />
                    <div className="nav-links">
                        <Link href="/">home</Link>
                        <Link href="/about">about</Link>
                        <Link href="/project">projects</Link>
                    </div>
                </div>
            </div>

            {/* Main Content Container with top padding to avoid header overlap */}
            <main className="mx-auto max-w-3xl px-4 pt-24 sm:px-6 xl:max-w-5xl xl:px-0">
                {/* Header for Projects Section */}
                <div className="space-y-2 pt-6 pb-4 md:space-y-5">
                    <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
                        Projects
                    </h1>
                    <hr style={{borderBottomColor: 'black', borderBottomWidth: '1px'}}/>
                </div>

                {/* Projects List */}
                <div className="container py-12">
                    <div className="-m-4 flex flex-wrap">
                        {projectsData.map((d) => (
                            <Card
                                key={d.title}
                                title={d.title}
                                description={d.description}
                                imgSrc={d.imgSrc}
                                href={d.href}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

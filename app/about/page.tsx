// app/about/page.tsx
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>About | Ben Luis</title>
                <meta name="description" content="About Ben Luis"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
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

            {/* Main content */}
            <main className="mx-auto max-w-3xl px-4 pt-24 sm:px-6 xl:max-w-5xl xl:px-0 overlay-content">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
                        About
                    </h1>
                    <hr style={{borderBottomColor: 'black', borderBottomWidth: '1px'}}/>
                </div>
                <section className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">

                    {/* Left Column: Avatar */}
                    <div className="flex flex-col items-center space-x-2 pt-8">
                        <Image
                            alt="Ben Luis"
                            src="/assets/headshot.png"
                            width={192}
                            height={192}
                            className="h-48 w-48 rounded-full"
                        />
                        <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
                            Ben Luis
                        </h3>
                        <div className="font-medium text-gray-500 dark:text-gray-400">
                            Undergraduate Student
                        </div>
                        <div className="text-gray-500 dark:text-gray-400">
                            University of North Carolina, Chapel Hill
                        </div>
                    </div>

                    {/* Right Column: About */}
                    <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2 space-y-6">
                        <p>
                            I am a software engineer who strives to evolve, innovate, and inspire through technology.
                            Currently, I am working as an <strong>Undergraduate Research Assistant</strong> at
                            <strong> UNC Kenan-Flagler Business School</strong> in Chapel Hill, NC.
                        </p>
                        <p>
                            Previously, I founded <strong>Aeris Studio</strong> in Singapore, launching a custom
                            keyboard
                            business that generated $100,000 in revenue within 6 months. I also automated 3D rendering
                            processes
                            using Blender scripts, reducing rendering time by 90% and optimized business operations to
                            cut expenses by 20%.
                        </p>
                        <p>
                            Prior to that, I served in <strong>Military Security</strong> with the Singapore Armed
                            Forces (Oct. 2021 – July 2023),
                            where I specialized in high-pressure operations and applied analytical skills to assess and
                            mitigate security risks.
                        </p>
                        <p>
                            Outside of work, I am an active member of the Community Engagement Committee for the Asian
                            American Student Association.
                            In this role, I help plan and organize events that educate and engage the Asian American
                            community on important cultural
                            and social issues. I’m passionate about creating spaces for meaningful conversations and
                            building connections within the community.
                            When I’m not working or volunteering, I enjoy going to the gym to stay active and prioritize
                            my physical and mental well-being.
                        </p>

                        {/* Resume Button */}
                        <p className="mt-8">
                            <a
                                href="/static/resume.pdf" // your resume PDF path
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block rounded bg-blue-600 px-4 py-2 font-medium text-white shadow hover:bg-blue-700"
                            >
                                View Resume
                            </a>
                        </p>

                        {/* Skills Section */}
                        <h2 className="mt-8 mb-4 text-2xl font-semibold dark:text-white">Skills</h2>
                        <div className="mb-2 flex flex-wrap gap-2">
                            <span className="rounded-sm bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                                TypeScript
                            </span>
                            <span className="rounded-sm bg-yellow-500 px-2 py-1 text-xs font-medium text-white">
                                Go
                            </span>
                            <span className="rounded-sm bg-green-500 px-2 py-1 text-xs font-medium text-white">
                                Python
                            </span>
                            <span className="rounded-sm bg-purple-600 px-2 py-1 text-xs font-medium text-white">
                                Docker
                            </span>
                            <span className="rounded-sm bg-red-500 px-2 py-1 text-xs font-medium text-white">
                                Redis
                            </span>
                            <span className="rounded-sm bg-gray-800 px-2 py-1 text-xs font-medium text-white">
                                AWS
                            </span>
                            <span className="rounded-sm bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                                Java
                            </span>
                            <span className="rounded-sm bg-gray-500 px-2 py-1 text-xs font-medium text-white">
                                C
                            </span>
                            <span className="rounded-sm bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                                SQL
                            </span>
                            <span className="rounded-sm bg-gray-500 px-2 py-1 text-xs font-medium text-white">
                                Shell/Bash
                            </span>
                            <span className="rounded-sm bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                                HTML/CSS
                            </span>
                            <span className="rounded-sm bg-green-500 px-2 py-1 text-xs font-medium text-white">
                                Flask
                            </span>
                            <span className="rounded-sm bg-gray-800 px-2 py-1 text-xs font-medium text-white">
                                Git
                            </span>
                            <span className="rounded-sm bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                                Blender
                            </span>
                            <span className="rounded-sm bg-purple-600 px-2 py-1 text-xs font-medium text-white">
                                VS Code
                            </span>
                            <span className="rounded-sm bg-red-500 px-2 py-1 text-xs font-medium text-white">
                                Visual Studio
                            </span>
                            <span className="rounded-sm bg-green-500 px-2 py-1 text-xs font-medium text-white">
                                PyCharm
                            </span>
                            <span className="rounded-sm bg-gray-800 px-2 py-1 text-xs font-medium text-white">
                                IntelliJ
                            </span>
                            <span className="rounded-sm bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                                Pandas
                            </span>
                            <span className="rounded-sm bg-yellow-500 px-2 py-1 text-xs font-medium text-white">
                                Selenium
                            </span>
                            <span className="rounded-sm bg-green-500 px-2 py-1 text-xs font-medium text-white">
                                Beautiful Soup
                            </span>
                            <span className="rounded-sm bg-purple-600 px-2 py-1 text-xs font-medium text-white">
                                NumPy
                            </span>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
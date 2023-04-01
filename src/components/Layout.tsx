import React from 'react';
import Head from 'next/head'

const Layout = ({children}: ChildrenProps) => {
    return (
        <>
            <Head>
                <title>Next ChatGPT</title>
                <meta name="description" content="ChatGPT application built with OpenAI API, Next.js, TypeScript, and TailwindCSS." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;

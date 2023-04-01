import React from 'react';
import Head from 'next/head'
import Sidebar from "@/components/Sidebar";

type LayoutProps = {
    children: React.ReactNode;
    title: string;
}

const Layout = ({children, title}: LayoutProps) => {
    return (
        <>
            <Head>
                <title>Next ChatGPT - {title}</title>
                <meta name="description" content="ChatGPT application built with OpenAI API, Next.js, TypeScript, and TailwindCSS." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Sidebar />

            <main className="pt-12 md:pt-0 md:pl-64 flex flex-col flex-1 h-screen">
                <div className="flex-1">
                    <div className="flex flex-col h-full">
                        {children}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Layout;

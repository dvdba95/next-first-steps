import type { Metadata } from "next";

//Para crear un metadata mr
export const metadata: Metadata = {
 title: 'About Title',
 description: 'SEO Title',
keywords:  ['about Page', 'David', '...']
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    );    
}
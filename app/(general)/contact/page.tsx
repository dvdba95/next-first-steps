import type { Metadata } from "next";

//Para crear un metadata mr
export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'Precio de servicio ',
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    );    
}
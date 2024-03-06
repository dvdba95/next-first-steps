import type { Metadata } from "next";

//Para crear un metadata mr
export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'Precio de servicio ',
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    );    
}
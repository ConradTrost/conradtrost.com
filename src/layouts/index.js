import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "@fontsource/playfair-display";
import "@fontsource/lato";


export default function ({ children }) {
    return (
        <div className="min-h-screen relative overflow-hidden">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

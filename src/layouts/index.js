import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

export default function ({ children }) {
    return (
        <div className="min-h-screen relative">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

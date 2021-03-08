import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MetaHeadshot from '../images/meta-headshot.jpg';


export default function ({ children }) {
    return (
        <div className="min-h-screen relative">
            <Helmet>
                <meta property="og:title" content="Freelance Web Development by Conrad Trost" />
                <meta property="og:url" content="https://conradtrost.com/" />
                <meta property="og:image" content={MetaHeadshot} />
            </Helmet>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

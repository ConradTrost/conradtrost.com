import React from 'react'
import { Helmet } from'react-helmet';

// Import components
import InquiryForm from '../components/InquiryForm';
import Navbar from '../components/Navbar';


export default function inquiry() {
    return (
        <div>
            <Helmet>
                <title>
                    Inquiries
                </title>
            </Helmet>
            <Navbar />

            <InquiryForm />
        </div>
    )
}

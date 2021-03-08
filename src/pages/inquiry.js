import React from 'react'
import { Helmet } from'react-helmet';

// Import components
import Layout from '../layouts';
import InquiryForm from '../components/InquiryForm';

export default function inquiry() {
    return (
        <Layout>
            <Helmet>
                <title>
                    Inquiries
                </title>
            </Helmet>

            <InquiryForm />
        </Layout>
    )
}

import React from 'react';
import { Helmet } from 'react-helmet';

export default function Success() {
    return (
        <div className="h-full flex content-center justify-center mt-40 p-4">
            <div className="sm:w-6/12 m-auto text-center">
                <Helmet>
                    <title>Thanks for your submission!</title>
                </Helmet>

                <h1>Thanks!</h1>
                <h3>Your Submission Has Been Received.</h3>
                <a href="/"><button className="button w-full sm:w-auto">Go Home</button></a>
            </div>
        </div>
    )
}
 
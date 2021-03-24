import * as React from "react"
import { Helmet } from 'react-helmet';

// Components
import Hero from '../components/Hero';
import Home from '../components/Home';

// To do:
// Add FontAwesome support -> Add LinkedIn, GitHub, etc.
// Decide if worth it to add backend functionality past Netlify
// Gatsby V3 Capabilities? Utilize new image features 
// Page for past projects (need more)
//

const IndexPage = () => {
  return (
      <div>
        <main className="bg-primary min-h-screen">
        <Helmet>
            <title>Freelance Web Development by Conrad Trost</title>
            <meta name="description" content="Fast, Secure, and Reliable Web Development by Conrad Trost" />
            <meta property="og:title" content="Web Development" />
            <meta property="og:description" content="Fast, Secure, and Reliable Web Development by Conrad Trost" />
            <meta property="og:image" content="https://conradtrost.com/static/2eed7ef61f56063cfb30340bb980f77b/47498/meta-headshot.jpg" />
            <meta property="og:url" content="https://conradtrost.com/" />
        </Helmet>

        <Hero />

        <Home />

        </main>
    </div>
  )
}

export default IndexPage;

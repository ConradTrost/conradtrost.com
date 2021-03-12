import * as React from "react"
import { Helmet } from 'react-helmet';

// Components
import Hero from '../components/Hero';
import Home from '../components/Home';
import ArchivePage from './blog';


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
        </Helmet>

        <Hero />

        <Home />

        </main>
    </div>
  )
}

export default IndexPage;

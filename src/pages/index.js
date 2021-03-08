import * as React from "react"
import { Helmet } from 'react-helmet';

// Components
import Hero from '../components/Hero';
import Home from '../components/Home';

// markup
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

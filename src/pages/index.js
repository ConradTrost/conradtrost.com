import * as React from "react"
import { Helmet } from 'react-helmet';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Home from '../components/Home';

// markup
const IndexPage = () => {
  return (
    <main className="bg-primary min-h-screen">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Navbar />

      <Hero />

      <Home />

      <Footer />

    </main>
  )
}

export default IndexPage

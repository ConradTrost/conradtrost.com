import * as React from "react"
import { Helmet } from 'react-helmet';

// Components
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import Home from '../components/Home';

// markup
const IndexPage = () => {
  return (
      <Layout>
    <main className="bg-primary min-h-screen">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Hero />

      <Home />

    </main>
    </Layout>
  )
}

export default IndexPage;

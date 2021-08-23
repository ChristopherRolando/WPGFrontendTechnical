import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Benefits from "../components/Benefits"
import Trips from "../components/Trips"
import Footer from "../components/Footer"
import TopPlaces from "../components/TopPlaces"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Benefits />
    <Trips />
    <TopPlaces />
    <Footer />
  </Layout>
)

export default IndexPage

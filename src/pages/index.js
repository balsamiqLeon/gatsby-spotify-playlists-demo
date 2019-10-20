import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  /*
    action="/contact-success"
  */
  <Layout>
    <SEO title="Home" />
    <h1>Contact us</h1>
    <p>This form should theoretically submit data to Netlify</p>
    <form data-netlify="true" name="contact" id="contact" method="post">
      <input name="name" placeholder="Name" />
      <input name="email" placeholder="Email" />
      <input name="phone" placeholder="Phone" />
      <input type="submit" value="Submit" />
    </form>
  </Layout>
)

export default IndexPage

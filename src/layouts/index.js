import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import 'modern-normalize/modern-normalize.css'

import './globalStyles.css'
import Meta from '../components/Meta'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import GithubCorner from '../components/GithubCorner'

export default ({ children, data }) => {
  const { siteTitle, siteUrl, socialMediaCard, headerScripts } =
    data.settingsYaml || {}
  return (
    <Fragment>
      <Helmet defaultTitle={siteTitle} titleTemplate={`%s | ${siteTitle}`}>
        {/* Add font link tags here */}
      </Helmet>

      <Meta
        headerScripts={headerScripts}
        absoluteImageUrl={
          socialMediaCard &&
          socialMediaCard.image &&
          siteUrl + socialMediaCard.image
        }
      />

      <GithubCorner url="https://github.com/Jinksi/gatsbro" />

      <Nav />

      <Fragment>{children()}</Fragment>

      <Footer />
    </Fragment>
  )
}

export const query = graphql`
  query IndexLayoutQuery {
    settingsYaml {
      siteTitle
      siteDescription
      headerScripts
      socialMediaCard {
        image
      }
    }
  }
`

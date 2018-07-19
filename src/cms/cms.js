import React from 'react'
import CMS from 'netlify-cms'

import { HomePageTemplate } from '../templates/HomePage'
import { AboutPageTemplate } from '../templates/AboutPage'
import { ContactPageTemplate } from '../templates/ContactPage'
import { DefaultPageTemplate } from '../templates/DefaultPage'
import { BlogIndexTemplate } from '../templates/BlogIndex'
import { SinglePostTemplate } from '../templates/SinglePost'

CMS.registerPreviewStyle('/styles.css')

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('about-page', ({ entry }) => (
  <AboutPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <ContactPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('infoPages', ({ entry }) => (
  <DefaultPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('blog-page', ({ entry }) => (
  <BlogIndexTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('posts', ({ entry }) => (
  <SinglePostTemplate {...entry.toJS().data} />
))

if (typeof window !== 'undefined') {
  // add admin.css
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = '/admin/admin.css'
  document.head.appendChild(link)

  if (process.env.NETLIFY_SITE_URL) {
    window.localStorage.setItem('netlifySiteURL', process.env.NETLIFY_SITE_URL)
  }
  // Log netlifySiteURL if editing on localhost
  if (
    window.location.hostname === 'localhost' &&
    window.localStorage.getItem('netlifySiteURL')
  ) {
    console.log(
      `%cnetlifySiteURL: ${window.localStorage.getItem('netlifySiteURL')}`,
      'color: hotpink; font-size: 15px'
    )
  }

  // check for netlifyIdentity, redirect to admin if user is logging in
  if (window.localStorage && window.netlifyIdentity) {
    netlifyIdentity.on('login', function() {
      document.location.reload()
    })
  }
}

import React from 'react'
import Subscribe from '../components/subscribe'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'

const ContactSuccessPage = () => {
  return (
    <Layout template='contact'>
      <SEO
        title='Message successfully sent'
        description='Contact form success page'
      />

      <Container containerClass='hero__module hero__module--contact'>
        <h1 className='heroTitle'>Success!</h1>
      </Container>

      <Container containerClass='contact__section'>
        <h2>Thank you for contacting me.</h2>
        <p>Your message was successfully sent.</p>
      </Container>

      <Subscribe isFeed='true' />
    </Layout>
  )
}

export default ContactSuccessPage

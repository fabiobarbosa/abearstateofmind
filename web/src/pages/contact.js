import React from 'react'
import Subscribe from '../components/subscribe'
import Hero from '../components/hero'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import styles from './contact.module.scss'

const ContactPage = () => {
  return (
    <Layout className={styles.root}>
      <SEO title='Say hello!' description="Here's how you can contact me" />

      <header>
        <Hero
          title='Say hello!'
          headingLevel='h1'
          plainDescription="Here's how you can contact me."
        />
      </header>

      <Container containerClass={styles.body}>
        <h2>Write me a letter.</h2>
        <p className={styles.email}>
          <a href='mailto:hello@fabiobarbosa.net'>
            hello[at]fabio&#8203;barbosa[dot]net
          </a>
        </p>

        <h2>Or just use this contact form.</h2>
        <p>
          I promise to reply within 24 hours. Your time is precious. I get that.
          Required fields are highlighted with an asterisk.
        </p>

        <form
          name='contact'
          method='POST'
          netlify-honeypot='bot-field'
          data-netlify='true'
        >
          <input type='hidden' name='form-name' value='contact' />
          <input type='hidden' name='bot-field' />

          <label htmlFor='name'>Your name</label>
          <input
            id='name'
            name='name'
            type='text'
            required
            placeholder='You may use your superhero name, but should you?'
          />

          <label htmlFor='replyto'>Your e-mail address</label>
          <input
            id='replyto'
            name='_replyto'
            type='email'
            required
            placeholder={"Yes, I'm fine even with Hotmail and AOL."}
          />

          <label htmlFor='phone'>Your phone number</label>
          <input
            id='phone'
            name='telephone'
            placeholder={"Don't forget your country's international prefix!"}
            type='tel'
          />

          <label htmlFor='message'>Your message</label>
          <textarea
            id='message'
            required
            placeholder={'Type your message here…'}
            name='message'
            rows='6'
          />

          <button type='submit' id='contact-submit' data-submit='…Sending'>
            Submit
          </button>
        </form>
      </Container>

      <Subscribe isFeed='true' />
    </Layout>
  )
}

export default ContactPage

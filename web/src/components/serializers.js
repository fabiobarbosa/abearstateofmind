import {Link} from 'gatsby'
import React from 'react'
import Figure from './blocks/block-figure'
import Embed from './blocks/block-embed'
import Features from './blocks/block-features'

const serializers = {
  types: {
    mainImage: Figure,
    bodyImage: Figure,
    mediaEmbed: Embed,
    featureBlock: Features
  },
  marks: {
    link: ({mark, children}) => {
      /*
       * I prefer to check whether a link is absolute here
       * instead of having to implement different buttons
       * on the content editor, which would hurt the
       * editorial flow.
       */
      const {href} = mark
      const isUrlAbsolute = url =>
        url.indexOf('//') === 0
          ? true
          : url.indexOf('://') === -1
            ? false
            : url.indexOf('.') === -1
              ? false
              : url.indexOf('/') === -1
                ? false
                : url.indexOf(':') > url.indexOf('/')
                  ? false
                  : url.indexOf('://') < url.indexOf('.')

      if (!isUrlAbsolute(href)) {
        return <Link to={href}>{children}</Link>
      } else {
        return (
          <a href={href} target='_blank' rel='noopener'>
            {children}
          </a>
        )
      }
    }
  }
}

export default serializers

import React from 'react'

const SmallStyle = props => (
  <small>{props.children}</small>
)

export default {
  name: 'leadPortableText',
  type: 'array',
  title: 'Lead',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'}
      ],
      lists: [],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'}
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: Rule => Rule.uri({
                  allowRelative: 'true'
                })
              }
            ]
          }
        ]
      }
    }
  ]
}

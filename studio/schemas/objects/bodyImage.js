import imageIcon from 'react-icons/lib/md/image'

export default {
  name: 'bodyImage',
  title: 'Image',
  type: 'object',
  icon: imageIcon,
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true
          }
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
          options: {
            isHighlighted: true
          }
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
          options: {
            isHighlighted: true
          }
        }
      ]
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'layout'
    }
  ],
  preview: {
    select: {
      imageUrl: 'image.asset.url',
      title: 'image.caption'
    }
  }
}

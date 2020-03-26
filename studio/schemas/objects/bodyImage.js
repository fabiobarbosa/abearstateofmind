import imageIcon from 'react-icons/lib/md/image'

export default {
  name: 'bodyImage',
  title: 'Image',
  type: 'object',
  icon: imageIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'imageField',
      options: {
        hotspot: true
      }
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'layout'
    },
    {
      name: 'cssClass',
      title: 'CSS Class',
      type: 'string',
      description: 'Insert custom CSS class here, minus the initial dot'
    }
  ],
  preview: {
    select: {
      imageUrl: 'image.asset.url',
      title: 'image.caption'
    }
  }
}

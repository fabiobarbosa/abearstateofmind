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
      type: 'imageField',
      options: {
        hotspot: true
      }
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

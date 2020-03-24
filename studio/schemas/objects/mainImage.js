export default {
  name: 'mainImage',
  type: 'object',
  title: 'Banner',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'imageField',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'image.asset.url',
      title: 'image.caption'
    }
  }
}

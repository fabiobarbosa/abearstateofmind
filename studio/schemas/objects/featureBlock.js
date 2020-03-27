import featuresIcon from 'react-icons/lib/md/work'

export default {
  name: 'featureBlock',
  title: 'Features',
  type: 'object',
  icon: featuresIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'featureList',
      title: 'Feature List',
      type: 'array',
      of: [
        {
          name: 'featureField',
          title: 'Feature Item',
          type: 'featureField'
        }
      ]
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'layout'
    },
    {
      name: 'iconSize',
      title: 'Icon Size',
      type: 'string',
      options: {
        list: [
          {title: 'Normal', value: 'icon-size-normal'},
          {title: 'Full', value: 'icon-size-full'}
        ],
        layout: 'dropdown'
      }
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
      title: 'title'
    }
  }
}

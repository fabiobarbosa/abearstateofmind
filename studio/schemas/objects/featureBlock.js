import React from 'react'
import featuresIcon from 'react-icons/lib/md/work'
import client from 'part:@sanity/base/client'
import urlBuilder from '@sanity/image-url'
const urlFor = source => urlBuilder(client).image(source)

const Preview = ({value}) => {
  const {featureList} = value
  return (
    <>
      {featureList && (
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
          {featureList.map(feature => (
            <div key={feature._key}>
              <figure style={{margin: '1rem 0 1rem 1rem'}}>
                <img
                  src={urlFor(feature.icon)
                    .width(50)
                    .url()}
                  style={{ marginRight: '0.5em' }}
                />
              </figure>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

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
    }
  ],
  preview: {
    select: {
      featureList: 'featureList'
    },
    component: Preview
  }
}

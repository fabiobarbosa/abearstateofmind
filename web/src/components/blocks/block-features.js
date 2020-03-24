import React from 'react'
import {imageUrlFor} from '../../lib/image-url'
import {buildImageObj} from '../../lib/helpers'

export default ({node}) => {
  console.log({node})
  return (
    <div className={node.layout}>
      {node.featureList && node.featureList.map((feature) => (
        <div key={feature._key}>
          <img
            loading='lazy'
            src={imageUrlFor(buildImageObj(feature.icon))
              .width(100)
              .url()}
          />
          <h3>{feature.title}</h3>
          <div>{feature.content}</div>
        </div>
      ))}
    </div>
  )
}

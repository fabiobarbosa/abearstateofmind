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
  }
}

export default serializers

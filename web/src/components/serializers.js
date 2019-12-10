import React from 'react'
import Figure from './blocks/block-figure'
import Embed from './blocks/block-embed'

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    mediaEmbed: Embed
  }
}

export default serializers

import React from 'react'
import clientConfig from '../../client-config'
import serializers from './serializers'
import BasePortableText from '@sanity/block-content-to-react'

const PortableText = ({blocks, className}) => (
  <BasePortableText
    blocks={blocks}
    serializers={serializers}
    renderContainerOnSingleChild
    className={className}
    {...clientConfig.sanity} />
)

export default PortableText

import React from 'react'
import ReactPlayer from 'react-player'

const Preview = ({value}) => {
  const { url } = value
  return <ReactPlayer url={url} />
}
export default {
  name: 'mediaEmbed',
  type: 'object',
  title: 'Media Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'The media embed\'s URL'
    }
  ],
  preview: {
  	select: {
  		url: 'url'
  	},
  	component: Preview
  }
}

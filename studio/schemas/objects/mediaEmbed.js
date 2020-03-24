import React from 'react'
import ReactPlayer from 'react-player'
import embedIcon from 'react-icons/lib/md/play-circle-filled'

const Preview = ({value}) => {
  const {url} = value
  return <ReactPlayer url={url} />
}
export default {
  name: 'mediaEmbed',
  type: 'object',
  title: 'Media Embed',
  icon: embedIcon,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'The media embed\'s URL'
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'layout'
    }
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: Preview
  }
}

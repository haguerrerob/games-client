import React from 'react'

import ImageGallery from 'react-image-gallery'
import './image-gallery.css'

const ImgCarousel = (props) => {
  const images = props.images

  return (
    <ImageGallery
      items={images}
      showThumbnails={false}
      showPlayButton={false}
      showFullscreenButton={false}
      showNav={false}
      infinite={true}
      autoPlay={true}
      slideInterval={6000}
    />
  )
}

export default ImgCarousel

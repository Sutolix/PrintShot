import React, { useState } from 'react'

import Base64Downloader from 'react-base64-downloader';

import api from '../../services/api'

export default function PrintShot() {

  const [imageData, setImageData] = useState('')
  const [loadImage, setLoadImage] = useState(true)
  
  async function printGenerator() {
    const response = await api.get('/print')

    const imageBase64 = response.data.ImageBase64

    setImageData(`data:image/png;base64, ${imageBase64}`)
    setLoadImage(false)
  }

  printGenerator()

  return (
    <div className="container">
      {loadImage
      ? <div>Carregando Image</div>
      : <Base64Downloader base64={imageData} downloadName="screenshot">
          Click para baixar
        </Base64Downloader>}

    </div>
  )
}
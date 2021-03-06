import React, { useState } from 'react'

import Base64Downloader from 'react-base64-downloader';

import api from '../../services/api'

export default function PrintShot() {

  const [imageData, setImageData] = useState('')
  const [awaitingQuery, setAwaitingQuery] = useState(true)
  const [loadImage, setLoadImage] = useState(true)
  const [siteUrl, setSiteUrl] = useState('')
  
  async function printGenerator(url) {
    const response = await api.post('/print', url)

    const imageBase64 = response.data.ImageBase64

    setImageData(`data:image/png;base64, ${imageBase64}`)
    setLoadImage(false)
  }

  function handleQuery(e){
		e.preventDefault();

    printGenerator({
      url: siteUrl
    })
    setAwaitingQuery(false)
	}

  return (
    <div className="container">
      <form onSubmit={handleQuery}>
      	<label>Link do site</label>
      	<input
      		type="text"
      		value={siteUrl}
      		onChange={e => setSiteUrl(e.target.value)}
      	/>
        <button type="submit">Gerar</button>
      </form>
      {awaitingQuery ? <></> : 
        loadImage
        ? <div>Carregando Image</div>
        : <Base64Downloader base64={imageData} downloadName="screenshot">
            Click para baixar
          </Base64Downloader>
      }

    </div>
  )
}
import axios from 'axios'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
      data: null,
      message: 'failed',
    })
  }

  try {
    if (!req.body.q) {
      return res.status(400).json({
        error: 'Missing "q" parameter',
        data: null,
        message: 'failed',
      })
    }

    const response = await axios.post(
      'https://meilisearch.1mwa-strapi.tech/indexes/property/search',
      {
        q: req.body.q,
        limit: 10,
      }
    )
    res.status(200).json({
      error: null,
      data: response.data,
      message: 'success',
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      error: err.message,
      data: null,
      message: 'failed',
    })
  }
}

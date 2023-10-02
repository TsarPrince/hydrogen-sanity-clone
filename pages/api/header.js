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
    const response = await axios.post(
      `${process.env.MEILISEARCH_HOST}/indexes/property/search`,
      {
        filter: [
          [
            "StreetName = 'Hennepin'",
            "StreetName = 'Dakota'",
            "StreetName = 'Scott'",
            "StreetName = 'Carver'",
          ],
          'ListPrice > 700000',
        ],
        limit: 6,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.MEILISEARCH_DEFAULT_SEARCH_API_KEY}`,
        },
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

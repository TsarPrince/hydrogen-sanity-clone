import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'ww4zhm6z',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

import type { VercelRequest, VercelResponse } from '@vercel/node'
import fetch from 'node-fetch'
import { ApiResponse } from '../src/types'

const API_URL = 'https://opendata.resas-portal.go.jp/api/v1/'

const API_KEY = process.env.API_KEY ?? ''

async function fetchPrefectures(): Promise<ApiResponse> {
  const response = await fetch(`${API_URL}prefectures`, {
    headers: {
      'X-API-KEY': API_KEY,
    },
  })
  const data = await response.json()
  return data
}

export default async function (req: VercelRequest, res: VercelResponse) {
  const result = await fetchPrefectures()
  // cache for 1 days
  res.setHeader('Cache-Control', 's-maxage=86400 immutable')
  res.json(result)
}

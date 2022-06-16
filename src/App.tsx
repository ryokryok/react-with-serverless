import { useState, useEffect } from 'react'
import { ApiResponse, Prefectures } from './types'

async function fetchApi(): Promise<ApiResponse> {
  const res = await fetch('/api/prefectures')
  const data = await res.json()
  return data
}

function usePrefectures() {
  const [prefectures, setPrefectures] = useState<Prefectures[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchApi()
      .then((data) => {
        if (data.result) {
          setPrefectures(data.result)
          setLoading(false)
        }
        throw new Error('error')
      })
      .catch((err) => {
        setLoading(false)
      })
  }, [])

  return {
    prefectures,
    isLoading: loading,
    isError: !loading && prefectures.length === 0,
  }
}

function App() {
  const { prefectures, isLoading, isError } = usePrefectures()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <ul>
      {prefectures.map(({ prefCode, prefName }) => (
        <li key={prefCode}>{prefName}</li>
      ))}
    </ul>
  )
}

export default App

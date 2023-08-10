import { useEffect, useState } from 'react'
import { GetCategories } from '../services/GetCategories'
export function useCategories () {
  const [categories, setCategories] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    GetCategories().then(data => {
      setCategories(data)
      setLoading(false)
    })
  }, [])
  return { categories, loading }
}

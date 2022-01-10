import { useState, useEffect } from 'react'

import api, { HealthScoreEnum, HealthScoreParams } from './Api'

type UseHealthScoreData = {
  data?: HealthScoreEnum
  loading: boolean
  error?: Error
}

export const useHealthScore = (params: HealthScoreParams) => {
  const [state, setState] = useState<UseHealthScoreData>({ loading: true })
  const { loading, data, error } = state

  useEffect(() => {
    api
      .getHealthScore(params)
      .then((data) => {
        setState((state) => ({ ...state, data, loading: false }))
      })
      .catch((error) => setState((state) => ({ ...state, error })))
  }, [])

  return { loading, data, error }
}

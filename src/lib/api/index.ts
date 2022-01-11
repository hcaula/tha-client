import { useState, useEffect } from 'react'

import api, { HealthScoreEnum, HealthScoreParams } from './Api'

type UseHealthScoreData = {
  healthScore?: HealthScoreEnum
  loading: boolean
  error?: Error
}

export const useHealthScore = (params: HealthScoreParams) => {
  const [state, setState] = useState<UseHealthScoreData>({ loading: true })
  const { loading, healthScore, error } = state

  useEffect(() => {
    api
      .getHealthScore(params)
      .then((healthScore) => {
        setState((state) => ({ ...state, healthScore, loading: false }))
      })
      .catch((error) =>
        setState((state) => ({ ...state, error, loading: false }))
      )
  }, [])

  return { loading, healthScore, error }
}

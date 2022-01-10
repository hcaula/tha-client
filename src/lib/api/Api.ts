import axios, { AxiosInstance, AxiosResponse } from 'axios'

import HealthScoreEnum from './entities/HealthScoreEnum'
import HealthScoreParamsType from './entities/HealthScoreParams'

class Api {
  axios: AxiosInstance

  constructor() {
    console.log(process.env)
    this.axios = axios.create({ baseURL: process.env.REACT_APP_API_URL })
  }

  async getHealthScore(params: HealthScoreParams): Promise<HealthScoreEnum> {
    return this.axios
      .get('/financial/health', { params })
      .then((response: AxiosResponse) => response.data as HealthScoreEnum)
  }
}

export { HealthScoreEnum }
export type HealthScoreParams = HealthScoreParamsType
export default new Api()

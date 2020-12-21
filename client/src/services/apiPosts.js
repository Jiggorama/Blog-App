import api from './apiConfig'

export const createPost = async post => {
  try {
      const response = await api.post('/api/posts', post)
      return response.data
  } catch (error) {
      throw error
  }
}
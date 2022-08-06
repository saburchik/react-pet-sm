import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': 'cff33efd-b3f0-4ec6-8238-ab77863c3dad' },
})

export const usersAPI = {
  getUsers(currentPage = 1, userSize = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${userSize}`)
      .then((response) => response.data)
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
}

export const profileAPI = {
  getProfileUser(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
  },
  savePhoto(photo) {
    const formData = new FormData()
    formData.append('image', photo)
    return instance.put(`profile/photo`, formData)
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile)
  },
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha })
  },
  logout() {
    return instance.delete(`auth/login`)
  },
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get('security/get-captcha-url')
  },
}

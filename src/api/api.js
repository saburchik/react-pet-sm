// == Base:
import * as axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": '1a15871c-0915-4db7-8ee5-b2a4fab67dbc' },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    setUnfollow(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then(response => response.data)
    },
    setFollow(userId) {
        return instance
            .post(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfileUsers(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
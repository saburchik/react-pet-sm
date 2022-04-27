// == Base:
import * as axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": '6669a6e0-7513-4c04-81be-8a078d35a573' },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    getProfileUsers(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(response => response.data)
    },

    setAuth() {
        return instance
            .get(`auth/me`)
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
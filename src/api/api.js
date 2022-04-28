// == Base:
import * as axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": 'b2c633cf-582f-498a-a375-f4909e2aba45' },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    getProfileUsers(userId) {
        return instance.get(`profile/${userId}`)
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

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
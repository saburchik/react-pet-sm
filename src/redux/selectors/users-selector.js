import { createSelector } from "reselect"

const getUsersSelector = (state) => {
    return state.UsersPage.users
}

export const getUsers = createSelector(
    getUsersSelector, (users) => {
        debugger
        return users.filter(u => true)
    })

export const getPageSize = (state) => state.UsersPage.pageSize
export const getTotalUsersCount = (state) => state.UsersPage.totalUsersCount
export const getCurrentPage = (state) => state.UsersPage.currentPage
export const getFollowingInProgress = (state) => state.UsersPage.followingInProgress


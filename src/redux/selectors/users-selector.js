import { createSelector } from "reselect"

const getUsersSelector = (state) => state.UsersPage.users

export const getUsers = createSelector(
    getUsersSelector, (users) => {
        return users.filter(u => true)
    })

export const getPageSize = (state) => state.UsersPage.pageSize
export const getTotalUsersCount = (state) => state.UsersPage.totalUsersCount
export const getCurrentPage = (state) => state.UsersPage.currentPage
export const getFollowingInProgress = (state) => state.UsersPage.followingInProgress
export const getIsFetching = (state) => {
    return state.UsersPage.isFetching;
}

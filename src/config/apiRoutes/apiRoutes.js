const ApiRoutes = {
    SIGNUP: {
        path: "/auth/register",
        authentication:false,
    },
    LOGIN: {
        path: "/auth/login",
        authentication:false,
    },
    LOGOUT: {
        path: "/auth/logout",
        authentication:false,
    },
    GETDEALS: {
        path: "/deal/get",
        authentication: true
    },
    CREATEDEAL: {
        path: "/deal/create",
        authentication: true
    },
    GETMYDEALS: {
        path: "/deal/getMyDeals",
        authentication: true
    },
}
export default ApiRoutes
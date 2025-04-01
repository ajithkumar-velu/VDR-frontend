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
    GETNEGOTIATE: {
        path: "/deal/getNegotiate",
        authentication: true
    },
    SENDMESSAGE: {
        path: "/message",
        authentication: true
    },
    GETALLMESSAGE: {
        path: "/message/getAll",
        authentication: true
    },
    ADDNEGOTIATE: {
        path: "/deal/addNegotiate",
        authentication: true
    },
    MYDEALNEGOTIATES: {
        path: "/message/myDealNegotiates",
        authentication: true
    },
    MYDEALMESSAGES: {
        path: "/message/myDealMessages",
        authentication: true
    },
}
export default ApiRoutes
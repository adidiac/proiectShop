export const userController = (state={loggedIn:false,user:null}, action) => {
    switch (action.type) {
        case 'LOGIN':
        return {
            ...state,
            loggedIn: true,
            user: action.payload
        }
        case 'LOGOUT':
        return {
            ...state,
            loggedIn: false,
            user: null
        }
        case 'ADD_ORDER':
        return {
            ...state,
            user: {
                ...state.user,
                orders: [...state.user.orders, action.payload]
            }
        }
        default:
        return state;
    }
}
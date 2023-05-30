
// const [state, dispatch] = useReducer (first, second, third)

export const authInitialState = {
    isLoggedIn: false,
    user: null
}

export const AUTH_TYPES = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
}

export const AUTH_KEY_LOCAL_STORAGE = "auth";
export const authInitializer = (initialValue = authInitialState) => {
    return JSON.parse(localStorage.getItem(AUTH_KEY_LOCAL_STORAGE)) || initialValue;
}


export const authReducer = (
    state = authInitialState,
    { type: authType, payload }
) => {

    switch (authType) {
        case AUTH_TYPES.LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                user: payload
            };
        case AUTH_TYPES.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};


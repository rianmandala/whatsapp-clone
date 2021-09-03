const initialState = {
    user:null
}

const actionTypes = {
    SET_USER:'SET_USER'
}

const setUser = user => ({
    type: actionTypes.SET_USER,
    user: user
})

const authReducer = (state, action)=>{
    switch(action.type){
        case actionTypes.SET_USER:
            return ({
                ...state,
                user:action.user
            })
        default:
            return state
    }
}

export {initialState, setUser, authReducer}
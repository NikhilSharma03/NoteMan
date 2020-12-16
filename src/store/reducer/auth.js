import * as actionTypes from './../action/actionType'

const initialState = {
    name:null,
    email:null,
    token:null,
    userId:null,
    error:null,
    loading:null
}

const reducer = (state = initialState,action) => {

    switch(action.type){

        case actionTypes.AUTH_UP_START:
            return {
                ...state,
                loading:true,
                error:null
            }

        case actionTypes.AUTH_UP_SUCCESSFUL:
            let name = ''
            for(let i=0 ;action.email[i] !== '@' ;i++){
                name += action.email[i]
            }

            return {
                ...state,
                token:action.token,
                userId:action.userId,
                email:action.email,
                name:name,
                error:null,
                loading:false    
            }

        case actionTypes.AUTH_UP_FAILED: 
            return {
                ...state,
                error:action.error,
                loading:false
            }
        
        case actionTypes.LOG_OUT:
            return {
                ...state,
                token:null,
                userId:null,
                email:null,
                name:null,
                error:null
            }

        case actionTypes.CLEAR_ERROR : 
            return {
                ...state,
                error:null
            }

        default:return state
    }
}

export default reducer
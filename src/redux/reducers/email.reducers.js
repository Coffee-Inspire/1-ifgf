import { REQUEST, FAILED, SUCCESS } from '../actions/email.actions';

const initialState = {
    isLoading : false,
    success : false,
    error: false,
    successText : "",
    errorText : "",
};

const email = (state = initialState, action) => {
    switch (action.type){
        case REQUEST: 
            return {
                ...state,
                isLoading: true,
                success : false,
                error : false,
                successText : "",
                errorText : "",
            };

        case FAILED:
            return {
                ...state,
                error: true,
                isLoading: false,
                success : false,
                errorText : action.err,
            };

        case SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                error: false,
                successText : action.msg,
            }

        default:
            return  state;
    }
}

export default email;
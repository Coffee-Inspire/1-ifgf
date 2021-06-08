import { REQUEST, FAILED, SUCCESS } from '../actions/email.actions';

const initialState = {
    isLoading : false,
    success : false,
    error: false,
};

const email = (state = initialState, action) => {
    switch (action.type){
        case REQUEST: 
            return {
                ...state,
                isLoading: true,
                success : false,
            };

        case FAILED:
            return {
                ...state,
                error: true,
                isLoading: false,
                success : false,
            };

        case SUCCESS:
            return {
                ...state,
                isLoading: false,
                sucess: true,
                error: false,
            }

        default:
            return  state;
    }
}

export default email;
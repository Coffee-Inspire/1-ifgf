import { REQUEST, FAILED, SUCCESS } from '../actions/icare.actions'

const initialState = {
    data : [],
    isLoading : false,
    error: false,
};

const icare = (state = initialState, action) => {
    switch (action.type){
        case REQUEST: 
            return {
                ...state,
                isLoading: true,
            };

        case FAILED:
            return {
                ...state,
                error: true,
                isLoading: false,
            };

        case SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoading: false,
                error: false,
            }

        default:
            return  state;
    }
}

export default icare;
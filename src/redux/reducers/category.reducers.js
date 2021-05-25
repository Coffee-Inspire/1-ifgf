import { REQUEST, FAILED, SUCCESS } from '../actions/category.actions'

const initialState = {
    data : [],
    isLoading : false,
    error: false,
};

const category = (state = initialState, action) => {
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

export default category;
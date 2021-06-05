import { INIT, REQUEST, FAILED, SUCCESS, EDIT_SUCCESS } from '../actions/category.actions'

const initialState = {
    data : [],
    isInit : false,
    isLoading : false,
    editSuccess : false,
    error: false,
};

const category = (state = initialState, action) => {
    switch (action.type){
        case INIT: 
            return {
                ...state,
                isInit: true,
            };

        case REQUEST: 
            return {
                ...state,
                isLoading: true,
                editSuccess : false,
            };

        case FAILED:
            return {
                ...state,
                error: true,
                isLoading: false,
                editSuccess : false,
                isInit: false,
            };

        case SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoading: false,
                isInit: false,
                error: false,
            }
        
            
        case EDIT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                editSuccess : true,
                error: false,
            }

        default:
            return  state;
    }
}

export default category;
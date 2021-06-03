import { INIT, REQUEST, FAILED, SUCCESS } from '../actions/icare.actions'

const initialState = {
    data : [],
    isInit : false,
    isLoading : false,
    error: false,
};

const icare = (state = initialState, action) => {
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
            };

        case FAILED:
            return {
                ...state,
                error: true,
                isLoading: false,
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

        default:
            return  state;
    }
}

export default icare;
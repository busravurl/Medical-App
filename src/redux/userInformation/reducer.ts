import { UPDATE_USER_CARDS, UPDATE_USER_INFO, UPDATE_FCM_TOKEN, UPDATE_USER_DATA,CLEAR_DATA, LOGIN_SUCCESS, LOGOUT} from '../actionTypes'


const userState = {
    user: null,
    isLoggedIn: false,
    userInformation:{},
    fcmToken:'',
    userInfo: {
        name: '',
        surname: '',
        email: '',
        phoneNumber: ''
    },
}

const userInformationReducer = (state = userState, action) => {
    switch(action.type){
        // case UPDATE_FCM_TOKEN : return {...state, fcmToken: action.payload}; break;
        // case UPDATE_USER_DATA : return {...state, userInformation: action.payload}; break;
        // case UPDATE_USER_INFO : return {...state, userInfo: {...state.userInfo, [action.field]:action.payload}}; break;
        // case UPDATE_USER_CARDS : return {...state, cardsList: action.payload}; break;

        case LOGIN_SUCCESS : return {...state, isLoggedIn: true, user: action.payload};
        case LOGOUT : return {...state,isLoggedIn: false,user: null};

       // case CLEAR_DATA : return userState; break;      
     
        default : return state
    }
}

export default userInformationReducer
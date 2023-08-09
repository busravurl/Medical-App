import { SET_MOVIEGENRE, SET_MOVIE,SET_RANDOM_MOVIE } from './../actionTypes';


const tempState = {
    movie: {},
    movieGenre: {},
    randomMovie:{}
   
}
 
const tempReducer = (state=tempState, action) => {
    switch (action.type) {
        case SET_MOVIEGENRE : return {...state, movieGenre:action.payload}; break;
        case SET_MOVIE : return {...state, movie:action.payload}; break;  
        case SET_RANDOM_MOVIE : return {...state, randomMovie:action.payload}; break; 
        default: return state; break;
    }
}

export default tempReducer
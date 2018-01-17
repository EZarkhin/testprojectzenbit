export const reducer = (state=[], action) =>{
    switch(action.type){
        case 'RECIEVE_MOVIES':
        return {
            ...state,
            movies: action.payload,
            filter: ''
        }
        case 'CHANGE_FILTER':
        return{
            ...state,
            filter: action.payload
        }
        default: 
        return state
        
    }
}
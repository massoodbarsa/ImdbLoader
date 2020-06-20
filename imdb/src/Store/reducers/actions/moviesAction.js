export const deleteMovie=(id)=>{
    return{
        type:'DELETE_MOVIE',
        id
    }
}

export const loadMovieFromApi=(searchedItem)=>{
    
    return(dispatch,getState)=>{
        //call api here
        dispatch({type:'LOAD_SEARCHED_MOVIE',searchedItem:searchedItem})
      
    }
}
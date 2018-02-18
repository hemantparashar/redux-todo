const visibilityFilterReduer = (state="SHOW_ALL",action) => {
    switch(action.type){
        case "SET_VISIBILITY_FILTER":
            return action.filter;
            break;
        default:
            return state;
    }
}

export default visibilityFilterReduer;

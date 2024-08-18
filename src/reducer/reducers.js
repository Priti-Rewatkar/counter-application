
const initialCounter = 40;


export const ChangeTheCounter =( state = initialCounter,action)=>{
    switch (action.type) {
        case "Inc":
            
            return state = state + 1;

        case "Dec":
            
            return state = state - 1;
    
        default:
            return state;
    }

}
import { BUY_MOBILE, ADD_MOBILE } from "./constants"

let initialMobileState = {
    numberOfMobiles: 100,
    details: [{name:"micromax", price:"1000", status:"Available", stock:50}]
}

const mobileReducer = (state = initialMobileState, action) => {
    switch(action.type){
        case BUY_MOBILE:
            return {...state, 
                numberOfMobiles: state.numberOfMobiles-1,
                details: []
            }
        case ADD_MOBILE:
            console.log(action.payload)

            return {...state,
                     numberOfMobiles: state.numberOfMobiles+1,
                     details: [...state.details, action.payload]
                   }
        default:
            return state

    }
}


export default mobileReducer
import { BUY_MOBILE, ADD_MOBILE } from "./constants";

export const addMobile = (payload) => {
    return {
        type:ADD_MOBILE,
        payload:payload
    }
}

export const buyMobile= () => {
    return {
        type:BUY_MOBILE
    }
}


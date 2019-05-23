import {ADD_OFFER_CMD} from "./offersConstants";

export const addOfferAction = offer => ({
         type: ADD_OFFER_CMD,
         payload: {
           offer
         }
       });

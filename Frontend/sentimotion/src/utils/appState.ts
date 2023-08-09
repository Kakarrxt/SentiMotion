
import { AppState, appStateAction } from "./types";


const storageKeys = {
    model:"model",
}

export const initialAppState: AppState = {
    snackBarInfo: null,
    openSnackBar: false,
    selectedPage: "model",
    activityTypes: [],


    
};


export function appReducer(state: AppState, action: appStateAction): AppState {
    switch (action.type) {
        case "setSnackBarInfo": {
            const newState: AppState = { ...state, snackBarInfo: action.value };
            return newState;
        }
        case "setOpenSnackBar": {
            const newState: AppState = { ...state, openSnackBar: action.value };
            return newState;
        }
        case "setSelectedPage": {
            const newState: AppState = { ...state, selectedPage: action.value };
            return newState
        }
        case "setActivityTypes": {
            const newState: AppState = { ...state, activityTypes: action.value };
          
            return newState
        }
        default:
            return state;
    }
}

import { AppState, appStateAction } from "./types";


const storageKeys = {
    token: "token",
    currentUser: "currentUser",
    projects: "projects",
    components: "components",
    subComponent: "subComponent",
    document: "document",
    activities: "activities",
    subActivities: "subActivities",
    activityTypes: "activityTypes",
    users: "users",
    roles: "roles",
    statuses: "statuses",
    subCategories: "subCategories",
    categories: "categories",
    selectedProject: "selectedProject",
    selectedComponent: "selectedComponent",
    selectedSubComponent: "selectedSubComponent",
    selectedDocument: "selectedDocument",
    selectedActivity: "selectedActivity",
    selectedUser: "selectedUser",
    projectDetails: "projectDetails",
    progresses: "progresses",

}



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
        case "setProjects": {
            const newState: AppState = { ...state, projects: action.value };
   
            return newState
        }
        case "setComponents": {
            const newState: AppState = { ...state, components: action.value };
         
            return newState
        }
        case "setSubComponents": {
            const newState: AppState = { ...state, subComponents: action.value };
        
            return newState
        }
        case "setDocuments": {
            const newState: AppState = { ...state, documents: action.value };
    

            return newState
        }
        case "setActivities": {
            const newState: AppState = { ...state, activities: action.value };
        
            return newState
        }
        case "setSubActivities": {
            const newState: AppState = { ...state, subActivities: action.value };
          
            return newState
        }
        case "setProgresses":{
            const newState: AppState = { ...state, progresses: action.value };
         
            return newState
        }
        case "setActivityTypes": {
            const newState: AppState = { ...state, activityTypes: action.value };
          
            return newState
        }
        case "setDefaultPassword": {
            const newState: AppState = { ...state, defaultPassword: action.value };
            return newState
        }
        case "setSelectedProject": {
            const newState: AppState = { ...state, selectedProject: action.value };
            return newState
        }
        case "setSelectedComponent": {
            const newState: AppState = { ...state, selectedComponent: action.value };
      
            return newState
        }
        case "setSelectedSubComponent": {
            const newState: AppState = { ...state, selectedSubComponent: action.value };
        
            return newState
        }
        case "setSelectedDocument": {
            const newState: AppState = { ...state, selectedDocument: action.value };
          
            return newState
        }
        case "setSelectedActivity": {
            const newState: AppState = { ...state, selectedActivity: action.value };
          
            return newState
        }
        case "setSelectedUser": {
            const newState: AppState = { ...state, selectedUser: action.value };
            return newState
        }
        default:
            return state;
    }
}
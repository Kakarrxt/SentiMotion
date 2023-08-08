let backendUrl = process.env.REACT_APP_BACKENDURI || `http://localhost:3002/`;
export const loginUrl = `${backendUrl}auth/login`;
export const getUserDetailsUrl = `${backendUrl}user/logged-in`;
export const getUserUrl = `${backendUrl}self-service`;
export const getStatusLookUpUrl = `${backendUrl}status`;
export const updateUserProfileUrl = `${backendUrl}self-service`;

export const changePasswordUrl = `${backendUrl}self-service/change-password`;

export const getUsersUrl = `${backendUrl}user-roles`;
export const createUserUrl = `${backendUrl}user`;
export const registerUserUrl = `${backendUrl}user/register`;
export const updateUserUrl = (userId: string) => {
  return `${backendUrl}user/${userId}`;
};
export const resetPasswordUrl = (userId: string) => {
  return `${backendUrl}user/change-password/${userId}`;
};
export const defaultPasswordUrl = `${backendUrl}user-management/default-password`;
export const deleteUserUrl = (userId: string) => {
  return `${backendUrl}user/${userId}`;
};
export const updateStatusUrl = (userId: string) => {
  return `${backendUrl}user/change-status/${userId}`;
};


export const getUserRoleUrl = `${backendUrl}user-roles`;
export const deleteUserRoleUrl = (userRoleId: string) => {
  return `${backendUrl}user-roles/${userRoleId}`;
};
export const updateUserRoleUrl = (userRoleId: string) => {
  return `${backendUrl}user-roles/${userRoleId}`;
}
export const createUserRoleUrl = `${backendUrl}user-roles`;

export const getLookupRolesUrl = `${backendUrl}role`;
export const getLookupStatusUrl = `${backendUrl}status`;
//project
export const createProjectUrl = `${backendUrl}project`;
export const getProjects = `${backendUrl}project`;
export const getComponentTreeUrl = (projectDetailId: string) => {
  return `${backendUrl}project/components/${projectDetailId}`;
}
//project details 
export const createProjectDetailUrl = `${backendUrl}project-details`;
export const updateProjectDetailUrl = (projectDetailId: string) => {
    return `${backendUrl}project-details/${projectDetailId}`;
}
//component
export const createComponentUrl = `${backendUrl}component`;
export const getComponentsUrl = (projectId: string) => {
  return `${backendUrl}component/project/${projectId}`;
};
export const updateComponentUrl = (componentId: string) => {
  return `${backendUrl}component/${componentId}`;
};
//sub-component
export const createSubComponentUrl = `${backendUrl}sub-component`;

export const getSubComponentsUrl = (componentId: string) => {
  return `${backendUrl}sub-component/component/${componentId}`;
};
export const updateSubComponentUrl = (subComponentId: string) => {
  return `${backendUrl}sub-component/${subComponentId}`;
};
//document
export const createDocumentUrl = `${backendUrl}document`;
export const getDocumentsUrl = (subComponentId: string) => {
    return `${backendUrl}document/${subComponentId}`;
}
export const updateDocumentUrl = (documentId: string) => {
  return `${backendUrl}document/${documentId}`;
};

export const getDocumentStatisticUrl = (subComponentId: string) => {  
  return `${backendUrl}document-statistics/${subComponentId}`;
};
//activity
export const createActivityUrl = `${backendUrl}activity`;
export const getActivityUrl = (subComponentId: string) => {
  return `${backendUrl}activity/sub-component/${subComponentId}`;
};
export const updateActivityUrl = (activityId: string) => {
  return `${backendUrl}activity/${activityId}`;
};
// activity_type
export const getActivityTypesUrl = `${backendUrl}activitytype`;
//subactivity
export const createSubActivityUrl = `${backendUrl}sub-activity`;
export const getSubActivityUrl = (activityId: string) => {
  return `${backendUrl}sub-activity/activity/${activityId}`;
};

export const updateSubActivityUrl = (subActivityId: string) => {
  return `${backendUrl}sub-activity/${subActivityId}`;
};

export const getLookupUnitUrl = `${backendUrl}unit`;

//Categories
export const getCategoryUrl = `${backendUrl}document-category`;
export const getSubCategoryUrl = `${backendUrl}document-sub-category`;

export const createCategoryUrl = `${backendUrl}document-category`;
export const createSubCategoryUrl = (categoryId:string) => {
  return `${backendUrl}document-sub-category/${categoryId}`;
} 

export const updateCategoryUrl = (categoryId: string) => {
  return `${backendUrl}document-category/${categoryId}`;
};
export const updateSubCategoryUrl = (subCategoryId: string) => {
  return `${backendUrl}document-sub-category/${subCategoryId}`;
};

//progress
export const createProgressUrl = `${backendUrl}progress`;
export const getProgressUrl = (subComponentId: string) => {
  return `${backendUrl}progress/sub-activity/${subComponentId}`;
}
export const updateProgressUrl = (progressId: string) => {
  return `${backendUrl}progress/${progressId}`;
}
export const deleteProgressUrl = (progressId: string) => {
  return `${backendUrl}progress/${progressId}`;
}


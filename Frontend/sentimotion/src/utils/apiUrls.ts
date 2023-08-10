let backendUrl = process.env.REACT_APP_BACKENDURI || `http://127.0.0.1:5000/`;




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


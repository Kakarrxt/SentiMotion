export interface AppState {
  snackBarInfo: SnackBarInfo | null;
  openSnackBar: boolean;
  selectedPage: AppTab | null;
  activityTypes: ActivityType[];
  Predictions: Prediction[];
}
export type appStateAction =
  | {
      type: "setSnackBarInfo";
      value: SnackBarInfo | null;
    }
  | {
      type: "setOpenSnackBar";
      value: boolean;
    }
  | {
      type: "setSelectedPage";
      value: AppTab | null;
    }
  | {
    type: "setPredictions";
    value: Prediction[];
  };


 export type AppContextType = {
  state: AppState;
  dispatch: React.Dispatch<appStateAction>;
};

export type Order = "asc" | "desc";

export type AppTab =
  | "model"



export type StorageDataType = 'string' | 'array' | 'object';



export interface SnackBarInfo {
  message: string;
  severity?: "error" | "warning" | "info" | "success";
  duration?: number;
}

export interface Prediction {
  label: string;
  percentage: number;
}

export interface ActivityType {
  id: string;
  key: string;
  description: string;
  remarks: string;
}

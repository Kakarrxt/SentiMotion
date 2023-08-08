export interface AppState {
  snackBarInfo: SnackBarInfo | null;
  openSnackBar: boolean;
  token: string;
  currentUser: User | null;
  selectedPage: AppTab | null;
  users: User[];
  roles: Role[];
  units: Unit[];
  statuses: Status[];
  subCategories: SubCategory[];
  categories: Category[];
  projects: Project[];
  projectDetails: ProjectDetails[];
  components: Component[];
  subComponents: SubComponent[];
  documents: Document[];
  documentStatistics: DocumentStatistic[];
  activities: Activity[];
  subActivities: SubActivity[];
  progresses: Progress[];
  activityTypes: ActivityType[];
  selectedProject: Project | null;
  selecetedProjectDetails: ProjectDetails | null;
  selectedComponent: Component | null;
  selectedSubComponent: SubComponent | null;
  selectedDocument: Document | null;
  selectedActivity: Activity | null;
  selectedSubActivity: SubActivity | null;
  selectedUser: User | null;
  defaultPassword: string;
  selectedUnit: Unit | null;
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
      type: "setToken";
      value: string;
    }
  | {
      type: "setCurrentUser";
      value: User | null;
    }
  | {
    type: "setSelectedUser";
    value: User | null;
  }  
  | {
      type: "setSelectedPage";
      value: AppTab | null;
    }
  | {
      type: "setSelectedProject";
      value: Project | null;
    }
  | {
      type: "setSelectedComponent";
      value: Component | null;
    }
  | {
      type: "setSelectedSubComponent";
      value: SubComponent | null;
    }
  | {
      type: "setSelectedActivity";
      value: Activity | null;
    }
  | {
      type: "setSelectedSubActivity";
      value: SubActivity | null;
    }
  | {
      type: "setSelectedDocument";
      value: Document | null;
    }
  | {
      type: "setProjects";
      value: Project[];
    }
  | {
      type: "setProjectDetails";
      value: ProjectDetails[];
    }
  | {
      type: "setComponents";
      value: Component[];
    }
  | {
      type: "setSubComponents";
      value: SubComponent[];
    }
  | {
      type: "setActivities";
      value: Activity[];
    }
  | {
      type: "setSubActivities";
      value: SubActivity[];
    }
  | {
      type: "setDocuments";
      value: Document[];
    }
  | {
    type: "setDocumentStatistic";
    value: DocumentStatistic[];
    }
  | {
      type: "setUsers";
      value: User[];
    }
  | {
      type: "setRoles";
      value: Role[];
    }
  | {
    type: "setActivityTypes";
    value: ActivityType[];
  }
  | {
      type: "setStatuses";
      value: Status[];
    }
  | {
    type: "setSubCategories";
    value: SubCategory[];
  }  
  | {
    type: "setCategories";
    value: Category[];
  }
  |{
    type: "setUnits";
    value: Unit[];
  }
  |{
    type:"setProgresses";
    value:Progress[];
  }
  | {
      type: "setDefaultPassword";
      value: string;
    };

 export type AppContextType = {
  state: AppState;
  dispatch: React.Dispatch<appStateAction>;
};

export type Order = "asc" | "desc";

export type AppTab =
  | "user-management"
  | "dashboard"
  | "component"
  | "subComponent"
  | "document"
  | "activity"
  | "project"
  | "subactivity";

export type UserSettting = "Profile" | "Account" | "Dashboard" | "Logout";

export type UserRoleType = "Editor" | "administrator" | "Viewer";

export type StatusType = 'Active' | 'Pending' | 'Deleted' | 'Rejected';

export type StorageDataType = 'string' | 'array' | 'object';

export interface Credentials {
  username: string;
  password: string;
}

//export interface Credentials {
//    username: UserName;
//    password: Password;
//}

//export interface UserName {
//    label: string;
//    type: string;
//    placeholder: string;
//}

//export interface Password {
//    label: string;
//    type: string;
//}

export interface SnackBarInfo {
  message: string;
  severity?: "error" | "warning" | "info" | "success";
  duration?: number;
}

export type AuthToken = {
  status: number;
  token: string | undefined;
};

export interface Status {
  id: string;
  key: string;
  description: string;
}

export interface Role {
  id: string;
  key: string;
  description: string;
}

export interface UserRole {
  id: string;
  role: Role;
  projectId:string;
}
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  companyName: string;
  createdOn: Date;
  modifiedOn: Date;
  status: Status;
  userRoles: UserRole[];
}

export interface Project {
  id: string;
  name: string;
  createdOn: Date;
  updatedOn: Date;
  createdBy: string;
  updatedBy: string;
  projectDetails: ProjectDetails;
  progress: ProgressQuantity[];
}

export interface ProjectDetails {
  id: string;
  description: string;
  clientName: string;
  clientContactDetails: string;
  clientContactPerson: string;
  contactDetails: string;
  contactPerson: string;
  scope: string;
  remark: string;
  contractValue: number;
  startDate: Date;
  endDate: Date;
  createdOn: Date;
  updatedOn: Date;
  createdBy: string;
  updatedBy: string;
}

export interface Component {
  id: string;
  name: string;
  weightage: number;
  remarks: string;
  createdOn: Date;
  updatedOn: Date;
  createdBy: string;
  updatedBy: string;
  project: string;
  progress: ProgressQuantity[];
  dailyProgress: DailyProgress[];
  subComponents: SubComponent[];
}
export interface DailyProgress {
  id: string;
  progressDate: Date;
  amount: number;
}
export interface SubComponent {
  id: string;
  name: string;
  weightage: number;
  remarks: string;
  createdOn: Date;
  updatedOn: Date;
  createdBy: string;
  updatedBy: string;
  progress: ProgressQuantity[];
  dailyProgress: DailyProgress[];
  activities: Activity[];
}
export interface Document {
  id: string;
  description: string;
  originalName: string;
  fileName: string;
  versionNumber: number;
  createdOn: Date;
  updatedOn: Date;
  createdBy: string;
  updatedBy: string;
  status: Status;
  category: Category;
  subCategory: SubCategory;
}
export interface DocumentStatistic {
  status: Status;
  documentCount: number;
}

export interface StatisticList {
  id: string;
  description: string;
  documentCount: number
}
export interface Category {
  id: string;
  description: string;
  remarks: string;
  subCategories: SubCategory[];
}

export interface SubCategory {
  id: string;
  description: string;
  remarks: string;
  category: Category;
}

export interface Activity {
  id: string;
  name: string;
  weightage: number;
  startDate: Date;
  endDate: Date;
  remark: string;
  createdOn: Date;
  updatedOn: Date;
  createdBy: string;
  updatedBy: string;
  activityType: ActivityType;
  progress: ProgressQuantity[];
  dailyProgress:DailyProgress[];
  subActivities: SubActivity[];
}
export interface ProgressQuantity {
  id: string;
  parentId: string;
  weightage: number;
  total_quantity: number;
  total_amount: number;
  progress_percentage: number;
  activityType: ActivityType;
}
export interface SubActivity {
  id: string;
  name: string;
  quantity: number;
  weightage: number;
  unit:Unit;
  createdOn: Date;
  updatedOn: Date;
  createdBy: string;
  updatedBy: string;
  progress: Progress[];
  dailyProgress:DailyProgress[];

}
export interface ActivityType {
  id: string;
  key: string;
  description: string;
  remarks: string;
}
export interface Unit {
  id: string;
  key: string;
  description: string;
}

export interface Progress {
  id: string;
  remarks: string;
  progressDate: Date;
  amount: number,
  createdOn: Date,
  updatedOn: Date,
  createdBy: string;
  updatedBy: string;
}

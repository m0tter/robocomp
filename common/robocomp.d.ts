export interface SchoolBase {
  name: string;
  contactName: string;
  contactNumber: string;
  contactEmail: string;
  address: string;
  isCurrent: boolean;
}

export interface School extends SchoolBase {
  _id: string;
}

export interface SideNavItem {
  name: string;
  route: string;
  isDivider?: boolean;
}

export interface UserBase {
  username: string;
  password: string;
  email: string;
  isAdmin: boolean;
}

export interface User extends UserBase {
  _id?: string;
}

export interface CompBase {
  name: string;
  resultType: string;
  teams: string[];
  date: string;
}

export enum CompetitionType {
  number = 1,
  time = 2,
  boolean = 3
}

export interface Competition {
  name: string;
  type: CompetitionType;
}

export interface RoboEventBase {
  name: string;
  date: string;
  competitions: Competition[];
  isCurrent: boolean;
}

export interface RoboEvent extends RoboEventBase { 
  _id?: string;
}

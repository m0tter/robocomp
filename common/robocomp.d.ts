export interface SchoolBase {
  name: string;
  contactName: string;
  contactNumber: string;
  contactEmail: string;
  address: string;
  teams: Team[];
  isCurrent: boolean;
}

export interface School extends SchoolBase {
  _id?: string;
}

export interface TeamBase {
  name: string;
  members: string[];
  isCurrent: boolean;
}

export interface Team extends TeamBase {
  _id?: string;
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
  canEdit: boolean;
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
  sumo,
  rescue,
  dance
}

export interface CompetitionBase {
  name: string;
  type: CompetitionType;
}

export interface Competition extends CompetitionBase{
  _id?: string;
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

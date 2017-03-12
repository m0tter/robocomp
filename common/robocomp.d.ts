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

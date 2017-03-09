//declare module 'robocomp' {
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

  export interface User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
  }
//}
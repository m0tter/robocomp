declare module 'robocomp' {
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
}
export interface UniversityType {
  id: number;
  university: string;
}

export interface MajorType {
  id: number;
  major: string;
  college: number;
  university: number;
}

export interface CollegeUtilType {
  id: number;
  major: string;
  college: string;
  university: string;
}

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

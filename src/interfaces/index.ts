export interface InstructorI  {
  id:number;
  age: number;
  name: string;
  [key:string]: any
}
export interface StudentI  {
  id:number;
  age: number;
  name: string;
  courses: CourseI[];
  [key:string]: any
}

export interface CourseI  {
  id:number;
  name: string;
  date: string;
  duration: number;
  instructor: InstructorI;
  students: StudentI[]

  [key:string]: any
}
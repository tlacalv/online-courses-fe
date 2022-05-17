export interface InstructorI  {
  age: number;
  name: string;
  [key:string]: any
}
export interface StudentI  {
  age: number;
  name: string;
  courses: CourseI[];
  [key:string]: any
}

export interface CourseI  {
  name: string;
  date: string;
  duration: number;
  instructor: InstructorI;
  students: StudentI[]

  [key:string]: any
}
import axios from "axios";
import { InstructorI, StudentI } from "../interfaces";

class CoursesAPI {
  private client;
  private static instance:CoursesAPI | undefined;

  private constructor() {
    this.client = axios.create({
      baseURL: 'http://127.0.0.1:8000/api',
      headers: {'Content-Type':'application/json', 'Accept':'application/json'}
    });
  }
  static getInstance() {
    if(!this.instance){
      this.instance = new CoursesAPI;
    }
    return this.instance
  }
  //instructors
  async listInstructors() {
    return await this.client.get('/instructors');      
  }
  async getInstructor(id:number) {
    return await this.client.get(`/instructors/${id}`);      
  }
  async createInstructor(instructor: InstructorI) {
    return await this.client.post(`/instructors/`,instructor);      
  }
  async updateInstructor(id:number, instructor: InstructorI) {
    return await this.client.put(`/instructors/${id}`,instructor);      
  }
  async deleteInstructor(id: number) {
    return await this.client.delete(`/instructors/${id}`);      
  }
  //students
  async listStudents() {
    return await this.client.get('/students');      
  }
  async getStudent(id:number) {
    return await this.client.get(`/students/${id}`);      
  }
  async createStudent(student: StudentI) {
    return await this.client.post(`/students/`,student);      
  }
  async updateStudent(id:number, student: StudentI) {
    return await this.client.put(`/students/${id}`,student);      
  }
  async deleteStudent(id: number) {
    return await this.client.delete(`/students/${id}`);      
  }

}

export const client = CoursesAPI.getInstance();
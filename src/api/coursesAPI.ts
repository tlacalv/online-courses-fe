import axios from "axios";

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

  async listInstructors() {
    return await this.client.get('/instructors');      
  }
}

export const client = CoursesAPI.getInstance();
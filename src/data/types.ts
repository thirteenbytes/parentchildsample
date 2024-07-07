export interface Student {
    id: number;
    name: string;
    age: number;
    sex: string;
    active: boolean;
    studentType: StudentType;
  }

  export enum StudentType {
    Undergraduate =0,
    Graduate = 1
  }
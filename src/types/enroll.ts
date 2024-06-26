import { AllocatedCourse } from "./allocatedcourses";

export interface enroll {
  id?: number;
  courseId: number;
  userId: number;
  trainerId: number;
}

export enum Enroll {
  default = 0,
  accept = 1,
  reject = 2,
  enquiry = 3,
}

export interface AllocatedCourseById {
  data?: (AllocatedCourse)[] | null;
  message: string;
}
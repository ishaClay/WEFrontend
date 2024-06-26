import { AllCourseResponse } from "@/types/courseManagement";
import api from "./api";

export interface courseRequest {
  title: string;
  institute: string;
  instituteWebsite: string;
  instituteWebsite2: string;
  freeCourse: number;
  price: number;
  discout: number;
  discountApplicable: number;
  providerName: number;
  clientId: number;
}

export interface courseRequestTwoPage {
  nfqLeval?: number,
  ectsCredits?: string,
  fetCredits?: string,
  certificate?: number,
  time?: number,
  isOnline?: number,
  universityAddress?: string,
  duration?: string,
  instituteOther?: string,
  otherInstitutionName?: string,
  description?: string,
  bannerImage?: string,
  keys?: string
}

export const fetchEnrollmentRequest = (trainerID: string, params?: string) => {
  const url = `api/v1/course/course-enrollment-requests/${trainerID}?enroll=${params}`;

  return api({ url });
};

export const UpdateEnrollmentRequest = (courseID: number, data: any) => {
  const url = `api/v1/course/requests-update/${courseID}`;
  const method = "put";

  return api({ url, data, method });
};

export const fetchCourseAllCourse = async (): Promise<AllCourseResponse> => {
  const url = `api/v1/course/getAllCourses`;
  const res = await api({ url });
  console.log("res=====>", res.data);

  return res.data;
};

export const createCourse = (data: courseRequest) => {
  const url = `api/v1/course/create-course/`;
  const method = "post";
  return api({ url, data, method });
}

export const createCourseTwoPage = ({ data, id, paramsversion }: { data: courseRequestTwoPage, id: string, paramsversion: string }) => {
  const url = `api/v1/course/update-course/${id}/${paramsversion}`;
  const method = "put";
  return api({ url, data, method });
}

export const fetchNfqlLevel = async () => {
  const url = `api/v1/course/nfqlevel/nfqlevellist`
  const method = "get";
  const res = await api({ url, method });
  return res.data
}
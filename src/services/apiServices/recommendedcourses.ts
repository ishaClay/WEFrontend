import { RecommendedCourseResponse } from "@/types/RecommendedCourses";
import api from "./api";

export type CourseEnrollmentPayload = {
  courseId: number;
  userId: number;
  trainerId: number;
};

export const fetchRecommendedCourses = async (params: {
  user: number;
  client: number;
  page: number;
  search: string;
}): Promise<RecommendedCourseResponse> => {
  const url = `/api/v1/course/recommended`;

  const response = await api({ url, params: { ...params, limit: 10 } });
  return response.data;
};

export const courseEnrollmentRequest = async (
  data: CourseEnrollmentPayload
) => {
  const url = `/api/v1/course/enroll`;

  return await api({ url, method: "post", data });
};

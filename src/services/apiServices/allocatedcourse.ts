import api from "./api";

export const fetchAllocatedCourseById = async (trainerId: string, enrollId: number) => {
  const url = `https://weidevapi.clay.in/api/v1/course/course-enrollment-Accepted/${trainerId}/${enrollId}`;

  const res = await api({ url });
  return res.data
};

export const fetchAllocatedCourse = () => {
  const url = `api/v1/course/course-enrollment-Accepted/11`;

  return api({ url });
};

import { useState } from "react";
import HeaderCourse from "@/components/HeaderCourse";
import { BsSearch } from "react-icons/bs";
import { AiOutlineAppstore, AiOutlineBars } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import EmployeeListSidebar from "@/components/EmployeeListSidebar";
import {
  CourseTime,
  IsOnline,
  RecommendedCourses,
} from "@/types/RecommendedCourses";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/lib/constants";
import { fetchRecommendedCourses } from "@/services/apiServices/recommendedcourses";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function CoursesRecommended() {
  const userData = useSelector((state: RootState) => state.user);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(0);
  const [search, setSearch] = useState("");

  const handlePaginationChange = (page: number) => {
    setCurrentPage(page);
    refetch();
  };

  const { data: recommendedcourses, refetch } = useQuery({
    queryKey: [QUERY_KEYS.fetchbyrecommendedcourse],
    queryFn: () =>
      fetchRecommendedCourses(
        parseInt(userData?.UserId),
        parseInt(userData?.clientId),
        currentPage,
        search
      ),
  });

  return (
    <div className="flex bg-[#f5f3ff] overflow-hidden">
      <div className="">
        <EmployeeListSidebar />
      </div>
      <div className="flex-col max-w[calc(100%_-_240px)] w-full">
        <div className=" ">
          <HeaderCourse />
        </div>

        <div className="p-3 h-[calc(100vh_-_120px)]">
          <div className="bg-[#FFFFFF] rounded-[10px] h-full">
            <div className=" pt-[16px] pl-[30px] h-[60px] bg-[#FFFFFF] border-b border-[#D9D9D9] rounded-t-[50px]">
              <p className="text-[#000000] text-[Calibri]">Recommended Courses</p>
            </div>

            <div className="flex p-3 bg-[#FFFFFF] justify-between items-center">
              <div>
                <div className="flex ml-0 items-center border border-[#D9D9D9] rounded-md px-4 py-2 w-[550px] h-[52px] text-[#A3A3A3]">
                  <BsSearch className="text-[#D9D9D9] mr-2" />

                  <input
                    type="text"
                    placeholder="Search by pilier, level, recommended, course name etc."
                    className="flex-1 mr-2 focus:outline-none text-black placeholder-[#A3A3A3] text-sm"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <AiOutlineAppstore className="text-[#A3A3A3] w-8 h-8" />

                <AiOutlineBars className="text-[#00778B] w-8 h-8" />
              </div>
            </div>

            {recommendedcourses?.data.data?.map(
              (recommendedcourses: RecommendedCourses) => (
                <>
                  <div key={recommendedcourses.id}>
                    <div className="h-[175px] bg-[#FFFFFF] flex  border border-[#D9D9D9] m-[12px] rounded-md shadow-sm">
                      <div className=" pt-[22px] pl-[22px]  overflow-hidden rounded">
                        <img
                          className=" w-[152px] h-[133px] rounded object-cover object-center "
                          src={recommendedcourses.bannerImage}
                          alt="Course"
                        />
                      </div>

                      <div className="flex flex-col mt-[22px] ml-[22px] ">
                        <div>
                          <div className="flex items-center  ">
                            <FaStar className="text-yellow-500" />
                            <span className="text-[#8C94A3] font-semibold text-sm mr-2 ml-1">
                              RECOMMENDED
                            </span>
                            <span className="bg-[#FFD56A] text-[#3A3A3A] font-semibold text-xs py-1 px-2 rounded-full">
                              Technology & Innovation
                            </span>
                            <span className="bg-[#D6F5AC] text-[#000000] font-semibold text-xs py-1 px-2 rounded-full ml-2">
                              Social
                            </span>
                          </div>
                        </div>

                        <div className="flex ">
                          <div
                            className="h-[44px] w-[378.08px] mt-[16px]"
                            style={{
                              fontFamily: "Inter",
                              fontSize: "16px",
                              fontWeight: 500,
                              lineHeight: "22px",
                              textAlign: "left",
                            }}
                          >
                            <p>{recommendedcourses.description}</p>
                          </div>

                          <div className="ml-[200px]">
                            <img
                              className=" h-[48px] w-[162.74px] object-cover object-center"
                              src="/public/assets/img/atu.png"
                              alt="Course"
                            />
                          </div>
                        </div>

                        <div className="flex mt-[25px]">
                          <div className="h-[22px] w-[129px] flex items-center gap-1">
                            <img
                              className=" h-[16] w-[18px]"
                              src="public/assets/img/timer.png"
                              alt="Course"
                            />
                            <p className="text-xs">Level- Advanced</p>
                          </div>

                          <div className="h-[22px] w-[160px] flex items-center gap-1">
                            <img
                              className=" h-[16] w-[18px] text-black"
                              src="public/assets/img/diploma.png"
                              alt="Course"
                            />
                            <p className="text-xs">Post Graduate Diploma</p>
                          </div>
                          <div className="h-[22px] w-[80px] flex items-center gap-1">
                            <img
                              className=" h-[16] w-[18px]"
                              src="public/assets/img/fulltime.png"
                              alt="Course"
                            />
                            <p className="text-xs">
                              {recommendedcourses.time ===
                                CourseTime.FullTime && <span>Full-time</span>}
                              {recommendedcourses.time ===
                                CourseTime.PartTime && <span>Part-time</span>}
                            </p>
                          </div>
                          <div className="h-[22px] w-[75px] flex items-center gap-1">
                            <img
                              className=" h-[16] w-[18px]"
                              src="public/assets/img/online.png"
                              alt="Course"
                            />
                            <p className="text-xs">
                              {recommendedcourses.isOnline ===
                                IsOnline.Online && <span>Online</span>}
                              {recommendedcourses.isOnline ===
                                IsOnline.InPerson && <span>InPerson</span>}
                              {recommendedcourses.isOnline ===
                                IsOnline.Hybrid && <span>Hybrid</span>}
                            </p>
                          </div>
                          <div className="h-[22px] w-[80px] flex items-center gap-1">
                            <img
                              className=" h-[16] w-[18px]"
                              src="public/assets/img/time.png"
                              alt="Course"
                            />
                            <p className="text-xs">
                              {recommendedcourses.duration}
                            </p>
                          </div>
                          <div className="h-[22px] w-[200px] flex items-center gap-1">
                            <img
                              className=" h-[16] w-[18px]"
                              src="public/assets/img/unversity.png"
                              alt="Course"
                            />
                            <p className="text-xs">
                              Atlantic Technological University
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col ">
                          <div>
                            <h3 className="text-[#000000] text-[font-calibri-bold] ml-[97px] mt-[20px]">
                              €{recommendedcourses.price}
                            </h3>
                          </div>

                          <button className=" h-[42px] w-[110px] bg-[#64A70B] text-white ml-[100px] mt-[20px] px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
                            Enroll Now
                          </button>
                          <button className=" h-[42px] w-[110px] bg-[#00778B] text-white ml-[100px] mt-[7px] font-semibold px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
                            Inquire
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="ml-[1000px] mt-[20px]">
                      {totalPages > 1 && (
                        <Pagination>
                          <PaginationContent>
                            <PaginationItem>
                              <PaginationPrevious
                                onClick={() =>
                                  handlePaginationChange(currentPage - 1)
                                }
                              />
                            </PaginationItem>
                            {[...Array(totalPages)].map((_, index) => (
                              <PaginationItem key={index}>
                                <PaginationLink
                                  onClick={() =>
                                    handlePaginationChange(index + 1)
                                  }
                                >
                                  {index + 1}
                                </PaginationLink>
                              </PaginationItem>
                            ))}
                            <PaginationItem>
                              <PaginationNext
                                onClick={() =>
                                  handlePaginationChange(currentPage + 1)
                                }
                              />
                            </PaginationItem>
                          </PaginationContent>
                        </Pagination>
                      )}
                    </div>
                  </div>
                </>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesRecommended;

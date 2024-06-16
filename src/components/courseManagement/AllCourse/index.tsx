import { Button } from "@/components/ui/button";
import { AiOutlineAppstore, AiOutlineBars } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import CourseMangagementImage1 from "@/assets/images/Coursemanagement_1.png";
import CourseMangagementImage2 from "@/assets/images/Coursemanagement_2.png";
import CourseMangagementImage3 from "@/assets/images/Coursemanagement_3.png";
import CourseMangagementImage4 from "@/assets/images/Coursemanagement_4.png";
import StarImage from "@/assets/images/Vector.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AllCourses = () => {
  const courseList = [
    {
      image: CourseMangagementImage1,
      title: "Greening the emerald isle: Ireland's journey to carbon...",
      subtitle: "Prime Infotech",
      rating: "4/5",
      module: 3,
      duration: "3 Days",
    },
    {
      image: CourseMangagementImage2,
      title: "Certificate in the Sustainable Development Goals, Partners...",
      subtitle: "Prime Infotech",
      rating: "4/5",
      module: 3,
      duration: "3 Days",
    },
    {
      image: CourseMangagementImage3,
      title: "Greening the emerald isle: Ireland's journey to carbon...",
      subtitle: "Prime Infotech",
      rating: "4/5",
      module: 3,
      duration: "3 Days",
    },
    {
      image: CourseMangagementImage4,
      title: "Certificate in the Sustainable Development Goals, Partners...",
      subtitle: "Prime Infotech",
      rating: "4/5",
      module: 3,
      duration: "3 Days",
    },
    {
      image: CourseMangagementImage3,
      title: "Greening the emerald isle: Ireland's journey to carbon...",
      subtitle: "Prime Infotech",
      rating: "4/5",
      module: 3,
      duration: "3 Days",
    },
    {
      image: CourseMangagementImage4,
      title: "Certificate in the Sustainable Development Goals, Partners...",
      subtitle: "Prime Infotech",
      rating: "4/5",
      module: 3,
      duration: "3 Days",
    },
    {
      image: CourseMangagementImage1,
      title: "Greening the emerald isle: Ireland's journey to carbon...",
      subtitle: "Prime Infotech",
      rating: "4/5",
      module: 3,
      duration: "3 Days",
    },
    {
      image: CourseMangagementImage2,
      title: "Certificate in the Sustainable Development Goals, Partners...",
      subtitle: "Prime Infotech",
      rating: "4/5",
      module: 3,
      duration: "3 Days",
    },
  ];
  return (
    <div>
      <div>
        <div className="bg-[#FFFFFF] rounded-[10px] w-full">
          <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-4">
            <div className="flex  bg-white">
              <p className="text-black text-base font-bold font-sans">
                Course Management
              </p>
            </div>
            <div>
              <Button className="text-base font-semibold leading-5 font-sans bg-[#00778B]">
                ADD NEW COURSE
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between py-5">
            <div className="flex items-center border border-[#D9D9D9] rounded-md px-2 w-[550px] h-[52px]">
              <BsSearch className="text-[#D9D9D9] mr-2" />
              <input
                type="search"
                placeholder="Search by Pillar, level, recommended, course name etc."
                className="flex-1 focus:outline-none text-sm placeholder-[#D9D9D9]"
              />
            </div>
            <div className="flex ml-6">
              <Button className="bg-transparent p-1 hover:bg-transparent">
                <AiOutlineAppstore className="text-[#00778B] w-8 h-8 " />
              </Button>
              <Button className="bg-transparent p-1 hover:bg-transparent">
                <AiOutlineBars className="text-[#A3A3A3] w-8 h-8 ml-2" />
              </Button>
            </div>
          </div>
          <div>
            <div className="grid xl:grid-cols-4 grid-cols-3 gap-5">
              {courseList.map((list: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="border border-[#ddd] rounded-[5px] overflow-hidden"
                  >
                    <div className="relative">
                      <img src={list.image} alt="" className="w-full" />
                      <div className="absolute right-2 bottom-2">
                        <Badge className="bg-white text-black hover:bg-[#eee] font-calibri text-base font-normal px-2 py-0">
                          Published
                        </Badge>
                      </div>
                    </div>
                    <div className="p-2">
                      <h5 className="text-base font-bold font-inter text-[#1D2026] mb-[19px] line-clamp-2">
                        {list.title}
                      </h5>
                      <div className="flex items-center justify-between mb-[11px]">
                        <div>
                          <h6 className="text-sm leading-5 font-normal font-nunito">
                            Created By : {list.subtitle}
                          </h6>
                        </div>
                        <div className="flex items-center text-[14px] leading-3 gap-1 font-nunito">
                          <img src={StarImage} alt="" />
                          {list.rating}
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-[11px]">
                        <h5 className="text-[14px] font-nunito">
                          Module : {list.module}
                        </h5>
                        <p className="text-[14px] font-nunito">
                          Duration : {list.duration}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#EDF0F4] text-black py-1 hover:bg-[#EDF0F4]">
                          Environment
                        </Badge>
                        <Badge className="bg-[#FF5252] py-1 hover:bg-[#FF5252]">
                          Introductory
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between xl:gap-[7px] gap-1 py-[9px] xl:px-[13px] px-1 border-t">
                      <Button className="xl:max-w-[90px] py-[6px] font-Poppins bg-[#58BA66] hover:bg-[#58BA66] h-auto w-full">
                        PUBLISH
                      </Button>
                      <Select>
                        <SelectTrigger className="max-w-[62px] h-auto py-[5px] px-2 font- w-full bg-[#00778B] text-white">
                          <SelectValue placeholder="V-01" />
                        </SelectTrigger>
                        <SelectContent className="min-w-full w-[62px]">
                          <SelectItem className="px-2" value="Pending">
                            V-01
                          </SelectItem>
                          <SelectItem className="px-2" value="Accepted">
                            V-02
                          </SelectItem>
                          <SelectItem className="px-2" value="Rejected">
                            V-03
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <Button className="p-2 w-8 h-8 bg-[#5CC1EE]">
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button className="p-2 w-8 h-8 bg-[#FF5252]">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
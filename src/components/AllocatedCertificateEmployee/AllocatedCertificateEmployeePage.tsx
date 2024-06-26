import { MoveLeft } from "lucide-react";
import { Button } from "../ui/button";
import EmployeeCertificate from "@/assets/images/EmployeeCertificate.png";
import SelectMenu from "../comman/SelectMenu";
import { useState } from "react";
import { Label } from "../ui/label";
const selectCourseOption = [
  {
    label: "Select Course 1",
    value: "Select_Course_1",
  },
  {
    label: "Select Course 2",
    value: "Select_Course_2",
  },
  {
    label: "Select Course 3",
    value: "Select_Course_3",
  },
];

const selectTraineeOption = [
  {
    label: "Select Trainee 1",
    value: "Select_Trainee_1",
  },
  {
    label: "Select Trainee 2",
    value: "Select_Trainee_2",
  },
  {
    label: "Select Trainee 3",
    value: "Select_Trainee_3",
  },
];
const AllocatedCertificateEmployeePage = () => {
  const [selectCourse, setSelectCourse] = useState("");
  const [selectTrainee, setSelectTrainee] = useState("");
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center border-b border-[#D9D9D9] p-4">
        <div className="">
          <h6 className="font-calibri text-base font-bold">
            Allocated Certificate
          </h6>
        </div>
        <div className="">
          <Button className="px-5 py-2 font-medium bg-transparent xl:text-base text-sm text-black font-nunito hover:bg-transparent">
            <MoveLeft className="me-3" /> Back
          </Button>
        </div>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-8 ">
            <img src={EmployeeCertificate} alt="" className="w-full" />
          </div>
          <div className="col-span-4">
            <div className="border border-[#D9D9D9] rounded-lg mb-5">
              <div className="xl:p-4 p-2 border-b border-[#D9D9D9]">
                <h5 className="text-base font-bold font-calibri">
                  Trainee Details
                </h5>
              </div>
              <div className="xl:p-5 p-3">
                <div className="pb-3">
                  <Label className="text-base text-[#515151] font-normal font-calibri">
                    Select Course
                  </Label>
                  <SelectMenu
                    option={selectCourseOption}
                    setValue={(data: string) => setSelectCourse(data)}
                    value={selectCourse}
                    className="text-[#A3A3A3] text-base font-calibri"
                    placeholder="Select Course"
                  />
                </div>

                <div className="">
                  <Label className="text-base text-[#515151] font-normal font-calibri">
                    Select Course
                  </Label>
                  <SelectMenu
                    option={selectTraineeOption}
                    setValue={(data: string) => setSelectTrainee(data)}
                    value={selectTrainee}
                    className="text-[#A3A3A3] text-base font-calibri"
                    placeholder="Select Trainee"
                  />
                </div>
              </div>
            </div>
            <div className="border border-[#D9D9D9] rounded-lg mb-5">
              <div className="xl:p-4 p-2 border-b border-[#D9D9D9]">
                <h5 className="text-base font-bold font-calibri">Body</h5>
              </div>
              <div className="xl:p-5 p-3 border border-[#D9D9D9] xl:mx-4 mx-2 xl:my-3 my-2 rounded-lg">
                <p className="text-base text-[#A3A3A3] font-calibri line-clamp-4">
                  [name] [course] Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. A id amet metus pellentesque ac diam feugiat.
                  Proin neque, enim sit tellus enim. Sed in nulla feugiat enim
                  est lobortis euismod neque in.
                </p>
              </div>
            </div>
            <div className="">
              <Button className="uppercase w-full xl:h-14 h-11 xl:text-base text-sm font-nunito bg-[#58BA66] rounded-lg">
                issue certificate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllocatedCertificateEmployeePage;

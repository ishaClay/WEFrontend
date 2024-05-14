

import HeaderCourse from "@/components/HeaderCourse"
import { FaStar } from 'react-icons/fa';

import { BsSearch } from 'react-icons/bs';

import EmployeeListSidebar from "@/components/EmployeeListSidebar";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
function EmployeeProgress() {


  return (
    <div className="flex bg-[#f5f3ff] w-[1510px] h-[1608px] overflow-hidden ">
      <div className="">
        <EmployeeListSidebar />
      </div>
      <div className="flex flex-col  ">
        <div className="">
          <HeaderCourse />
        </div>

        <div className="bg-[#FFFFFF] w-[1250px] h-[1469px] m-[12px] rounded-[10px]">
          <div className="  pt-[px] pl-[30px] w-[1250px] h-[60px] bg-[#FFFFFF] border-b border-[#D9D9D9] rounded-t-[10px] flex items-center justify-between">
            <p className="text-[#000000] text-[Calibri] font-bold">Employee Progress</p>

          </div>

          <div className="flex pl-[30px] w-[1230px] h-[70px] bg-[#FFFFFF] ">
            <div>
              <div className="flex mt-[9px] ml-[3px] ml-0 items-center border border-[#D9D9D9] rounded-md px-4 py-2 w-[550px] h-[52px] text-[#A3A3A3]">

                <BsSearch className="text-[#D9D9D9] " />

                <input
                  type="text"
                  placeholder="Search by pilier, level, recommended, course name etc."
                  className="flex-1 mr-2 focus:outline-none placeholder-[#A3A3A3] text-sm"
                />

              </div>
            </div>

          </div>
          <div className="h-[609px] w-[1175px] border border-[#D9D9D9] rounded-lg ml-8">

            <div className=" h-[100px] w-[1175px] border-[#D9D9D9] border-b  flex">

              <div className="flex p-6">
                <img src="/public/assets/img/face1.jpg" alt="Employee Name" className="w-12 h-12 rounded-full mr-4" />
                <div className="flex flex-col">
                  <span className="text-[12px]  text-[#A3A3A3]">Employee Name</span>
                  <span className="text-[16px] mt-[5px] ">Ankites Risher</span>
                </div>

              </div>

              <div className="flex flex-col mb-4">
                <div className="mt-2">
                  Action Items
                </div>
                <div className="flex mt-2">
                  <div className="  bg-[#0000000F]  text-xs h-[46px] w-[90px] py-2 px-4 rounded-full mr-2"><span className="flex flex-col"><span>Assigned
                  </span>
                    <span className="ml-4">5</span>
                  </span></div>
                  <div className="bg-[#F1B89C]  py-2  text-xs px-4  h-[46px] w-[90px] rounded-full mr-2"><span className="flex flex-col"><span>Delayed
                  </span>
                    <span className="ml-4">3</span>
                  </span>
                  </div>
                  <div className="bg-[#EDEA89]  text-xs py-2 h-[46px] w-[90px] px-4 rounded-full mr-2"><span className="flex flex-col"><span>Ontime
                  </span>
                    <span className="ml-4">2</span>
                  </span></div>
                  <div className="bg-[#D2EFB6]  text-xs py-2 h-[46px] w-[90px] px-4 rounded-full"><span className="flex flex-col"><span>Completed
                  </span>
                    <span className="ml-4">1</span>
                  </span></div>
                </div>

              </div>
              <div className="flex flex-col mb-4 ml-8">
                <div className="mt-2 ml-[50px]">
                  Courses
                </div>
                <div className="flex mt-2 ml-2">

                  <div className="bg-[#00000026]  py-2  text-xs px-4  h-[46px] w-[90px] rounded-full mr-2 ml-[50px]"><span className="flex flex-col"><span>Assigned
                  </span>
                    <span className="ml-4">5</span>
                  </span> </div>
                  <div className="bg-[#F1B89C]  text-xs py-2 h-[46px] w-[90px] px-4 rounded-full mr-2 "><span className="flex flex-col"><span>InProgress
                  </span>
                    <span className="ml-4">3</span>
                  </span> </div>
                  <div className="bg-[#F1B89C]  text-xs py-2 h-[46px] w-[90px] px-4 rounded-full"><span className="flex flex-col"><span>Completed
                  </span>
                    <span className="ml-4">1</span>
                  </span></div>
                </div>

              </div>
              <div className="text-6xl ml-[120px] mt-[25px]">
                <IoIosArrowUp className="h-[30px] w-[30px]" />
              </div>


            </div>
            <div className="h-[466px] w-[1200px]  m-4  flex gap-9">
              <div className="h-[466px] w-[550px] border rounded-lg  border-[#D9D9D9]">
                <div className="w-[550px] h-[30px] border-b  border-[#D9D9D9]">
                  <h1 className=" mt-[10px] ml-[20px]  text-[16px] font-bold ">Action Items</h1>

                </div >
                <div className="w-[550px] h-[141px] border-b  border-[#D9D9D9]">
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="py-3 px-4 flex items-center">
                        <div className="w-8 h-6 mb-[85px] bg-[#D2EFB6] mr-2 rounded-md"></div>

                        <div>
                          <p className="font-semibold text-[14px]">Lead in energy efficiency through continuous optimization and strategic energy management.</p>
                          <div className="flex gap-9 mt-[20px]">
                            <p className="text-xs text-gray-600">Last Updated By <span className="text-[#000000]">: First Name Last Name</span></p>
                            <p className="text-xs text-gray-600">Target Completion  Date <span className="text-[#000000]"> : 15/03/2024 </span></p>

                          </div>
                          <div className="flex gap-20 mt-[15px]">
                            <p className="text-xs text-gray-600">Last Updated Date <span className="text-[#000000]"> : 15/03/2024 </span> </p>
                            <p className="text-xs text-gray-600">Actual Completion Date <span className="text-[#000000]"> : 15/03/2024 </span> </p>

                          </div>

                        </div>
                      </td>
                    </tr>

                  </tbody>
                </div>
                <div className="w-[550px] h-[141px] border-b  border-[#D9D9D9]">
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="py-3 px-4 flex items-center">
                        <div className="w-8 h-6 mb-[85px] bg-[#F1B89C] mr-2 rounded-md"></div>

                        <div>
                          <p className="font-semibold text-[14px]">Lead in energy efficiency through continuous optimization and strategic energy management.</p>
                          <div className="flex gap-9 mt-[20px]">
                            <p className="text-xs text-gray-600">Last Updated By <span className="text-[#000000]">: First Name Last Name</span></p>
                            <p className="text-xs text-gray-600">Target Completion  Date <span className="text-[#000000]"> : 15/03/2024 </span></p>

                          </div>
                          <div className="flex gap-20 mt-[15px]">
                            <p className="text-xs text-gray-600">Last Updated Date <span className="text-[#000000]"> : 15/03/2024 </span> </p>
                            <p className="text-xs text-gray-600">Actual Completion Date <span className="text-[#000000]"> : 15/03/2024 </span> </p>

                          </div>

                        </div>
                      </td>
                    </tr>

                  </tbody>
                </div>
                <div className="w-[550px] h-[141px] ">
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="py-3 px-4 flex items-center">
                        <div className="w-8 h-6 mb-[85px] bg-[#EDEA89] mr-2 rounded-md"></div>

                        <div>
                          <p className="font-semibold text-[14px]">Lead in energy efficiency through continuous optimization and strategic energy management.</p>
                          <div className="flex gap-9 mt-[20px]">
                            <p className="text-xs text-gray-600">Last Updated By <span className="text-[#000000]">: First Name Last Name</span></p>
                            <p className="text-xs text-gray-600">Target Completion  Date <span className="text-[#000000]"> : 15/03/2024 </span></p>

                          </div>
                          <div className="flex gap-20 mt-[15px]">
                            <p className="text-xs text-gray-600">Last Updated Date <span className="text-[#000000]"> : 15/03/2024 </span> </p>
                            <p className="text-xs text-gray-600">Actual Completion Date <span className="text-[#000000]"> : 15/03/2024 </span> </p>

                          </div>

                        </div>
                      </td>
                    </tr>

                  </tbody>
                </div>
              </div>
              <div className="h-[466px] w-[550px] border  rounded-lg  border-[#D9D9D9] ">
                <div className="w-[550px] h-[30px] border-b  border-[#D9D9D9]">
                  <h1 className="mt-[10px] ml-[20px]  text-[16px] font-bold ">Enrolled Courses</h1>
                </div >

                <div className="w-[513px] h-[160px] border rounded  border-[#D9D9D9] m-4 mt-28 shadow-sm">



                  <div className="flex items-center">
                    <div className="pt-4 pl-4 overflow-hidden rounded">
                      <img className="w-[140px] h-[100px] rounded object-cover object-center" src="/public/assets/img/nature.png" alt="Course" />
                    </div>
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center space-x-1 ml-[20px] mt-[15px]">
                        <FaStar className="text-[#FD8E1F]" />
                        <span className="text-[#8C94A3] font-semibold text-[12px]">RECOMMENDED</span>
                      </div>
                      <h2 className="text-[12px] font-semibold ml-[20px] mt-[40px]">Certificate in the Sustainable Development Goals, Partnership, People, Planet and Prosperity</h2>
                      <div className="flex space-x-1 ml-[20px] ">
                        <span className="px-2 py-1 bg-[#FFD56A] text-white rounded-full text-xs">Technology & Innovation</span>
                        <span className="px-2 py-1 bg-[#D6F5AC] text-white rounded-full text-xs">Social</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-[470px] bg-[#E8E8E8] rounded-lg mt-[15px] ml-[20px]">

                    <div
                      className="h-4  bg-green-500 text-white rounded-lg text-[10px] text-center"
                      style={{ width: `${20}%` }}
                    >
                      {20}%
                    </div>
                  </div>

                </div >
                <div className="flex ml-[250px]">
                  <div className="w-4 h-4 rounded-full bg-[#00778B] mr-2"></div>

                  <div className="w-4 h-4 rounded-full bg-[#D9D9D9] mr-2"></div>
                  <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
                </div>
              </div>

            </div>

          </div>

          <div className="h-[100px] w-[1175px] border border-[#D9D9D9] mt-[10px] rounded-lg ml-8">

            <div className=" flex">

              <div className="flex p-6">
                <img src="/public/assets/img/face1.jpg" alt="Employee Name" className="w-12 h-12 rounded-full mr-4" />
                <div className="flex flex-col">
                  <span className="text-[12px]  text-[#A3A3A3]">Employee Name</span>
                  <span className="text-[16px] mt-[5px] ">Ankites Risher</span>
                </div>

              </div>

              <div className="flex flex-col mb-4">
                <div className="mt-2">
                  Action Items
                </div>
                <div className="flex mt-2">
                  <div className="  bg-[#0000000F]  text-xs h-[46px] w-[90px] py-2 px-4 rounded-full mr-2"><span className="flex flex-col"><span>Assigned
                  </span>
                    <span className="ml-4">5</span>
                  </span></div>
                  <div className="bg-[#F1B89C]  py-2  text-xs px-4  h-[46px] w-[90px] rounded-full mr-2"><span className="flex flex-col"><span>Delayed
                  </span>
                    <span className="ml-4">3</span>
                  </span>
                  </div>
                  <div className="bg-[#EDEA89]  text-xs py-2 h-[46px] w-[90px] px-4 rounded-full mr-2"><span className="flex flex-col"><span>Ontime
                  </span>
                    <span className="ml-4">2</span>
                  </span></div>
                  <div className="bg-[#D2EFB6]  text-xs py-2 h-[46px] w-[90px] px-4 rounded-full"><span className="flex flex-col"><span>Completed
                  </span>
                    <span className="ml-4">1</span>
                  </span></div>
                </div>


              </div>
              <div className="flex flex-col mb-4 ml-8">
                <div className="mt-2 ml-[50px]">
                  Courses
                </div>
                <div className="flex mt-2 ml-2">

                  <div className="bg-[#00000026]  py-2  text-xs px-4  h-[46px] w-[90px] rounded-full mr-2 ml-[50px]"><span className="flex flex-col"><span>Assigned
                  </span>
                    <span className="ml-4">5</span>
                  </span> </div>
                  <div className="bg-[#F1B89C]  text-xs py-2 h-[46px] w-[90px] px-4 rounded-full mr-2 "><span className="flex flex-col"><span>InProgress
                  </span>
                    <span className="ml-4">3</span>
                  </span> </div>
                  <div className="bg-[#F1B89C]  text-xs py-2 h-[46px] w-[90px] px-4 rounded-full"><span className="flex flex-col"><span>Completed
                  </span>
                    <span className="ml-4">1</span>
                  </span></div>
                </div>


              </div>
              <div className="text-6xl ml-[120px] mt-[25px]">
                <IoIosArrowDown className="h-[30px] w-[30px]" />
              </div>

            </div>
          </div>

          <div className="h-[100px] w-[1175px] border border-[#D9D9D9] mt-[10px] rounded-lg ml-8">

            <div className=" flex">

              <div className="flex p-6">
                <img src="/public/assets/img/face1.jpg" alt="Employee Name" className="w-12 h-12 rounded-full mr-4" />
                <div className="flex flex-col">
                  <span className="text-[12px]  text-[#A3A3A3]">Employee Name</span>
                  <span className="text-[16px] mt-[5px] ">Ankites Risher</span>
                </div>

              </div>

              <div className="flex flex-col mb-4">
                <div className="mt-2">
                  Action Items
                </div>
                <div className="flex mt-2">
                  <div className="  bg-[#0000000F]  text-xs h-[46px] w-[90px] py-2 px-4 rounded-full mr-2"><span className="flex flex-col"><span>Assigned
                  </span>
                    <span className="ml-4">5</span>
                  </span></div>
                  <div className="bg-[#F1B89C]  py-2  text-xs px-4  h-[46px] w-[90px] rounded-full mr-2"><span className="flex flex-col"><span>Delayed
                  </span>
                    <span className="ml-4">3</span>
                  </span>
                  </div>
                  <div className="bg-[#EDEA89]  text-xs py-2 h-[46px] w-[90px] px-4 rounded-full mr-2"><span className="flex flex-col"><span>Ontime
                  </span>
                    <span className="ml-4">2</span>
                  </span></div>
                  <div className="bg-[#D2EFB6]  text-xs py-2 h-[46px] w-[90px] px-4 rounded-full"><span className="flex flex-col"><span>Completed
                  </span>
                    <span className="ml-4">1</span>
                  </span></div>
                </div>


              </div>
              <div className="flex flex-col mb-4 ml-8">
                <div className="mt-2 ml-[50px]">
                  Courses
                </div>
                <div className="flex mt-2 ml-2">

                  <div className="bg-[#00000026]  py-2  text-xs px-4  h-[46px] w-[90px] rounded-full mr-2 ml-[50px]"><span className="flex flex-col"><span>Assigned
                  </span>
                    <span className="ml-4">5</span>
                  </span> </div>
                  <div className="bg-[#F1B89C]  text-xs py-2 h-[46px] w-[90px] px-4 rounded-full mr-2 "><span className="flex flex-col"><span>InProgress
                  </span>
                    <span className="ml-4">3</span>
                  </span> </div>
                  <div className="bg-[#F1B89C]  text-xs py-2 h-[46px] w-[90px] px-4 rounded-full"><span className="flex flex-col"><span>Completed
                  </span>
                    <span className="ml-4">1</span>
                  </span></div>
                </div>

              </div>
              <div className="text-6xl ml-[120px] mt-[25px]">
                <IoIosArrowDown className="h-[30px] w-[30px]" />
              </div>

            </div>
          </div>

          <div className="h-[100px] w-[1175px] border border-[#D9D9D9] mt-[10px] rounded-lg ml-8">

            <div className=" flex">

              <div className="flex p-6">
                <img src="/public/assets/img/face1.jpg" alt="Employee Name" className="w-12 h-12 rounded-full mr-4" />
                <div className="flex flex-col">
                  <span className="text-[12px]  text-[#A3A3A3]">Employee Name</span>
                  <span className="text-[16px] mt-[5px] ">Ankites Risher</span>
                </div>

              </div>

              <div className="flex flex-col mb-4">
                <div className="mt-2">
                  Action Items
                </div>
                <div className="flex mt-2">
                  <div className="  bg-[#0000000F]  text-xs h-[46px] w-[90px] py-2 px-4 rounded-full mr-2"><span className="flex flex-col"><span>Assigned
                  </span>
                    <span className="ml-4">5</span>
                  </span></div>
                  <div className="bg-[#F1B89C]  py-2  text-xs px-4  h-[46px] w-[90px] rounded-full mr-2"><span className="flex flex-col"><span>Delayed
                  </span>
                    <span className="ml-4">3</span>
                  </span>
                  </div>
                  <div className="bg-[#EDEA89]  text-xs py-2 h-[46px] w-[90px] px-4 rounded-full mr-2"><span className="flex flex-col"><span>Ontime
                  </span>
                    <span className="ml-4">2</span>
                  </span></div>
                  <div className="bg-[#D2EFB6]  text-xs py-2 h-[46px] w-[90px] px-4 rounded-full"><span className="flex flex-col"><span>Completed
                  </span>
                    <span className="ml-4">1</span>
                  </span></div>
                </div>

              </div>
              <div className="flex flex-col mb-4 ml-8">
                <div className="mt-2 ml-[50px]">
                  Courses
                </div>
                <div className="flex mt-2 ml-2">

                  <div className="bg-[#00000026]  py-2  text-xs px-4  h-[46px] w-[90px] rounded-full mr-2 ml-[50px]"><span className="flex flex-col"><span>Assigned
                  </span>
                    <span className="ml-4">5</span>
                  </span> </div>
                  <div className="bg-[#F1B89C]  text-xs py-2 h-[46px] w-[90px] px-4 rounded-full mr-2 "><span className="flex flex-col"><span>InProgress
                  </span>
                    <span className="ml-4">3</span>
                  </span> </div>
                  <div className="bg-[#F1B89C]  text-xs py-2 h-[46px] w-[90px] px-4 rounded-full"><span className="flex flex-col"><span>Completed
                  </span>
                    <span className="ml-4">1</span>
                  </span></div>
                </div>

              </div>
              <div className="text-6xl ml-[120px] mt-[25px]">
                <IoIosArrowDown className="h-[30px] w-[30px]" />
              </div>

            </div>
          </div>

          <div className="ml-[550px] mt-[20px]">
            <button className="bg-[#58BA66] text-white px-4 py-2 rounded " >Load More Record</button>
          </div>

        </div>

      </div>
    </div>



  )
}

export default EmployeeProgress;
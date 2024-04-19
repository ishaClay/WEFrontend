

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

import HeaderCourse from "@/components/HeaderCourse"

import { BsSearch } from 'react-icons/bs';
import { TbSelector } from "react-icons/tb";

import FaqsListSidebar from "@/components/FaqsListSidebar";


function TrainingDocument() {

    const employeeData = [
        {
            ID: '#01',
            DocumentTitle: 'User manual for SME admin',
            Type: 'User Manual',
           
        },
        {
            ID: '#02',
            DocumentTitle: 'User manual for SME admin',
            Type: 'User Manual',
           
        },
        {
            ID: '#03',
            DocumentTitle: 'User manual for SME admin',
            Type: 'User Manual',
           
        },
        {
            ID: '#04',
            DocumentTitle: 'User manual for SME admin',
            Type: 'User Manual',
           
        },
        {
            ID: '#05',
            DocumentTitle: 'User manual for SME admin',
            Type: 'User Manual',
           
        },
        // Add more employee data as needed
    ];
    return (
        <div className="flex bg-[#f5f3ff] w-[1520px] h-[760px] gap-1 overflow-x-hidden">
            <div className=" w-[235px] h-[760px]">
                <FaqsListSidebar />
            </div>
            <div className="flex flex-col  ">
                <div className="w-[1204px] h-[120px] ">
                    <HeaderCourse />
                </div>

                <div className="bg-[#FFFFFF] w-[1250px] h-[1469px] m-[12px] rounded-t-[10px]">
                    <div className="  pt-[16px] pl-[30px] w-[1250px] h-[60px] bg-[#FFFFFF] border-b border-[#D9D9D9] rounded-t-[50px] flex items-center justify-between">
                        <p className="text-[#000000] text-[Calibri] font-bold">Team Member List</p>
                   
                    </div>



                    <div className="flex pl-[10px] w-[1230px] h-[70px] bg-[#FFFFFF] ">
                        <div>
                            <div className="flex mt-[9px] ml-0 items-center border border-[#D9D9D9] rounded-md px-4 py-2 w-[550px] h-[52px] text-[#A3A3A3]">

                                <BsSearch className="text-[#D9D9D9] mr-2" />

                                <input
                                    type="text"
                                    placeholder="Search by pilier, level, recommended, course name etc."
                                    className="flex-1 mr-2 focus:outline-none placeholder-[#A3A3A3] text-sm"
                                />

                            </div>
                        </div>

                    </div>


                    <div className="overflow-x-auto">
                        <table className="table-auto w-full  ">
                            <thead>
                                <tr className="bg-[#F1F1F1] h-[50px]">

                                    <th className=" "> <span className="flex ml-4 ">ID <span className="mt-1"><TbSelector /></span></span></th>
                                    <th className=" "><span className="flex ml-4">Document Title<span className="mt-1"><TbSelector /></span></span></th>
                                    <th className=" "><span className="flex ml-4">Type<span className="mt-1"><TbSelector /></span></span></th>
                                    
                                </tr>
                            </thead>
                            <tbody >
                                {employeeData.map(employee => (
                                    <tr key={employee.ID} >
                                        <td className=" border-b px-4 pl-4 py-2"><span className="w-[110px]">{employee.ID}</span></td>
                                        <td className=" border-b px-4 py-4 "><span className="flex text-[#00778B]">
   
                                            {employee.DocumentTitle}</span>
                                        
                                        </td>
                                        <td className=" border-b px-4 py-2">{employee.Type}</td>
                                        
                                        

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="ml-[1000px] mt-[20px]">
                            <Pagination >
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">1</PaginationLink>
                                        <PaginationLink href="#">2</PaginationLink>
                                        <PaginationLink href="#">3</PaginationLink>
                                    </PaginationItem>

                                    <PaginationItem>
                                        <PaginationNext href="#" />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>

                        </div>




                    </div>



                    <div className="ml-[20px]">
                        <p className="font-bold text-[10px] ">Showing 10/200 Records</p>
                    </div>



                </div>



            </div>



        </div>



    )
}

export default TrainingDocument;
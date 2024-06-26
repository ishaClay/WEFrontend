import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { Switch } from "@/components/ui/switch";
import { BsSearch } from "react-icons/bs";
import { TbSelector } from "react-icons/tb";

function EmployeePermission() {
	const employeeData = [
		{
			id: "#01",
			name: "Ankites Risher",
		},
		{
			id: "#02",
			name: "Liam Risher",
		},
		{
			id: "#03",
			name: "Liam Risher",
		},
		{
			id: "#04",
			name: "Liam Risher",
		},
		{
			id: "#05",
			name: "Liam Risher",
		},
	];
	return (
		<div className="bg-[#f5f3ff]">
				<div className="bg-[#FFFFFF] m-[12px] rounded-[10px]">
					<div className="pt-[16px] pl-[30px] h-[60px] bg-[#FFFFFF] border-b border-[#D9D9D9] rounded-t-[10px] flex items-center justify-between">
						<p className="text-[#000000] text-[Calibri] font-bold">
							Team Member List
						</p>
						<button className="bg-[#00778B] text-white px-4 py-2 rounded mr-[20px] mb-[13px] h-[45px] w-[150px]">
							Send Invitation
						</button>
					</div>
					<div className="flex pl-[15px] h-[70px] bg-[#FFFFFF] ">
						<div>
							<div className="flex mt-[9px]  items-center border border-[#D9D9D9] rounded-md px-4 py-2 w-[550px] h-[52px] text-[#A3A3A3]">
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
						<table className="table-auto w-full   ">
							<thead>
								<tr className="bg-[#F1F1F1] h-[50px]">
									<th className=" ">
										{" "}
										<span className="flex pl-4 ">
											ID{" "}
											<span className="mt-1">
												<TbSelector />
											</span>
										</span>
									</th>
									<th className=" ">
										<span className="flex ml-4">
											Team Member
											<span className="mt-1">
												<TbSelector />
											</span>
										</span>
									</th>
									<th className=" ">
										<span className="flex ml-4">
											Edit Action Item
											<span className="mt-1">
												<TbSelector />
											</span>
										</span>
									</th>
									<th className=" ">
										<span className="flex ml-4">
											Retake Self-assessment
											<span className="mt-1">
												<TbSelector />
											</span>
										</span>
									</th>
									<th className=" ">
										<span className="flex ml-4">
											Share Feedback
											<span className="mt-1">
												<TbSelector />
											</span>
										</span>
									</th>
								</tr>
							</thead>
							<tbody>
								{employeeData.map((employee) => (
									<tr key={employee.id}>
										<td className=" border-b px-30 pl-4 py-2">
											<span className="w-[110px]">{employee.id}</span>
										</td>
										<td className=" border-b px-30 py-4 ">
											<span className="flex">
												{" "}
												<img
													src="public/assets/img/face1.jpg"
													alt="Employee"
													className="w-8 h-8 rounded-full mr-2"
												/>
												{employee.name}
											</span>
										</td>
										<td className=" border-b px-30 pl-4 py-2 ">
											{" "}
											<Switch />{" "}
										</td>

										<td className="border-b px-30 pl-4 py-2 ">
											{" "}
											<Switch />{" "}
										</td>
										<td className={`border-b px-30 pl-4 py-2 `}>
											<Switch />
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<div className="ml-[1000px] mt-[20px]">
							<Pagination>
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
	);
}

export default EmployeePermission;

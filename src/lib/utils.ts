import { clsx, type ClassValue } from "clsx";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsTicketPerforated } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { GrCertificate } from "react-icons/gr";
import { LuMapPin } from "react-icons/lu";
import { PiEnvelopeThin } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { TfiBook } from "react-icons/tfi";
import { twMerge } from "tailwind-merge";
import Economic from "../assets/images/Economic.svg";
import Environmental from "../assets/images/Environmental.svg";
import Governance from "../assets/images/Governance.svg";
import GreenEconomic from "../assets/images/GreenEconomic.svg";
import GreenEnvironmental from "../assets/images/GreenEnvironmental.svg";
import GreenGovernance from "../assets/images/GreenGovernance.svg";
import GreenSocialGray from "../assets/images/GreenSocial.svg";
import GreenStrategicIntegrationGray from "../assets/images/GreenStratagic.svg";
import GreenTech from "../assets/images/GreenTech.svg";
import SocialGray from "../assets/images/Social.svg";
import StrategicIntegrationGray from "../assets/images/Stratagic.svg";
import Tech from "../assets/images/Tech.svg";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getImages = (name: string, active?: boolean) => {
  switch (name) {
    case "Social":
      return active ? GreenSocialGray : SocialGray;
    case "Technology & Innovation":
      return active ? GreenTech : Tech;
    case "Economics":
      return active ? GreenEconomic : Economic;
    case "Economic":
      return active ? GreenEconomic : Economic;
    case "Governance":
      return active ? GreenGovernance : Governance;
    case "Enviromental":
      return active ? GreenEnvironmental : Environmental;
    case "Strategic Intergration":
      return active ? GreenStrategicIntegrationGray : StrategicIntegrationGray;
    case "Strategic Integration":
      return active ? GreenStrategicIntegrationGray : StrategicIntegrationGray;
    default:
      return active ? GreenEnvironmental : Environmental;
  }
};

export const sidebarLayout = {
  TarinerSidebar: [
    {
      label: "Dashboard",
      Icon: RxDashboard,
      link: "/trainer/dashboard",
      children: [],
    },
    {
      label: "Course Management",
      Icon: TfiBook,
      link: "#",
      children: [
        {
          label: "Enrollment Requests",
          link: "/trainer/enrolledrequest",
        },
        {
          label: "Enrolled Courses",
          link: "/trainer/enrolledcourses",
        },
        {
          label: "All Courses",
          link: "/trainer/allcourse",
        },
        {
          label: "Live Sessions",
          link: "/trainer/allcourses",
        },
      ],
    },
    {
      label: "Trainer  Management",
      Icon: FaUserGroup,
      link: "/trainer/trainer-management",
      children: [],
    },
    {
      label: "Certificate Management",
      Icon: LuMapPin,
      link: "#",
      children: [
        {
          label: "Certificate Template",
          link: "/trainer/certificate-template",
        },
        {
          label: "Allocated Certificate",
          link: "/trainer/allocated-certificate",
        },
      ],
    },
    {
      label: "Support",
      Icon: BsTicketPerforated,
      link: "#",
      children: [
        {
          label: "FAQ's",
          link: "/trainer/faqslist",
        },
        {
          label: "Training Document",
          link: "/trainer/trainingdocument",
        },
        {
          label: "Support Request",
          link: "/trainer/supportticket",
        },
      ],
    },
    {
      label: "Settings",
      Icon: FiSettings,
      link: "/trainer/employeepermission",
      children: [],
    },
    {
      label: "Message",
      Icon: PiEnvelopeThin,
      link: "/trainer/messaging",
      children: [],
    },
    {
      label: "Logout",
      Icon: AiOutlinePoweroff,
      link: "/auth",
      children: [],
    },
  ],
  TarineeSidebar: [
    {
      label: "Dashboard",
      Icon: RxDashboard,
      link: "/trainee/dashboard",
      children: [],
    },
    {
      label: "Course Management",
      Icon: TfiBook,
      link: "#",
      children: [
        {
          label: "Enrollment Requests",
          link: "/trainee/enrolledrequest",
        },
        {
          label: "All Courses",
          link: "/trainee/allcourse",
        },
        {
          label: "My Courses",
          link: "/trainee/enrolledcourses",
        },
        {
          label: "Enrolled Courses",
          link: "/trainee/allcourses",
        },
      ],
    },
    {
      label: "Certificate Management",
      Icon: LuMapPin,
      link: "#",
      children: [
        {
          label: "Certificate Management",
          link: "/trainee/certificate-template",
        },
        {
          label: "Allocated Certificate",
          link: "/trainee/allocated-certificate",
        },
      ],
    },
    {
      label: "Support",
      Icon: BsTicketPerforated,
      link: "#",
      children: [
        {
          label: "FAQ's",
          link: "/trainee/faqslist",
        },
        {
          label: "User Manual",
          link: "/trainee/trainingdocument",
        },
        {
          label: "Support Request",
          link: "/trainee/supportticket",
        },
      ],
    },
    {
      label: "Settings",
      Icon: FiSettings,
      link: "/trainee/employeepermission",
      children: [],
    },
    {
      label: "Message",
      Icon: PiEnvelopeThin,
      link: "/trainee/messaging",
      children: [],
    },
    {
      label: "Logout",
      Icon: AiOutlinePoweroff,
      link: "/auth",
      children: [],
    },
  ],
  companySidebar: [
    {
      label: "Dashboard",
      Icon: RxDashboard,
      link: "/company/dashboard",
      children: [],
    },
    {
      label: "Our Maturity Journey",
      Icon: LuMapPin,
      link: "/company/maturityassessmentroadmap",
      children: [],
    },
    {
      label: "Course Management",
      Icon: TfiBook,
      link: "#",
      children: [
        {
          label: "Allocated Courses",
          link: "/company/allocatedcourses",
        },
        {
          label: "Recommended Courses",
          link: "/company/coursesrecommended",
        },
        {
          label: "All Courses",
          link: "/company/allcourses",
        },
      ],
    },
    {
      label: "Team Management",
      Icon: FaUserGroup,
      link: "#",
      children: [
        {
          label: "Team List",
          link: "/company/employeelist",
        },
        {
          label: "Team Progress",
          link: "/company/employeeprogress",
        },
      ],
    },
    {
      label: "Support",
      Icon: BsTicketPerforated,
      link: "#",
      children: [
        {
          label: "FAQ's",
          link: "/company/faqslist",
        },
        {
          label: "User Manual",
          link: "/company/trainingdocument",
        },
        {
          label: "Support Request",
          link: "/company/supportticket",
        },
      ],
    },
    {
      label: "Settings",
      Icon: FiSettings,
      link: "/company/employeepermission",
      children: [],
    },
    {
      label: "Message",
      Icon: PiEnvelopeThin,
      link: "/company/messaging",
      children: [],
    },
    {
      label: "Logout",
      Icon: AiOutlinePoweroff,
      link: "/auth",
      children: [],
    },
  ],
  companyEmployeeSidebar: [
    {
      label: "Dashboard",
      Icon: RxDashboard,
      link: "/employee/dashboard",
      children: [],
    },
    {
      label: "My Courses",
      Icon: TfiBook,
      link: "/employee/mycourses",
      children: [],
    },
    {
      label: "Our Maturity Journey",
      Icon: LuMapPin,
      link: "/employee/maturityassessmentroadmap",
      children: [],
    },
    {
      label: "Certifications",
      Icon: GrCertificate,
      link: "/employee/certificate",
      children: [],
    },
    {
      label: "Support",
      Icon: BsTicketPerforated,
      link: "#",
      children: [
        {
          label: "FAQ's",
          link: "/employee/faqslist",
        },
        {
          label: "User Manual",
          link: "/employee/trainingdocument",
        },
        {
          label: "Support Request",
          link: "/employee/supportticket",
        },
      ],
    },
    {
      label: "Logout",
      Icon: AiOutlinePoweroff,
      link: "/auth",
      children: [],
    },
  ]
}
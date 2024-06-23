import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "./comman/Button/CustomButton";

interface headerProps {
  hasDiffHeader?: boolean;
}

function Header(props: headerProps) {
  const navigate = useNavigate();

  const userData = localStorage?.getItem("user");
  const userToken = !!userData && JSON.parse(userData)?.accessToken;

  const handleLogout = () => {
    navigate("/");
    localStorage.clear();
  };

  const handleGotoDashboard = () => {
    const user = !!userData && JSON.parse(userData)?.query;

    switch (user.role) {
      case "1":
        break;
      case "2":
        navigate(`/trainer/dashboard`);
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        break;
      case "6":
        break;

      default:
        navigate("/");
        break;
    }
  };

  return (
    // Note : This below code is for backup
    <header
      className={`xl:max-w-[1160px] max-w-full w-full mx-auto xl:px-0 px-4 py-7 ${
        props.hasDiffHeader ? "mx-7" : ""
      }`}
    >
      <div className="flex justify-between gap-4">
        <div className="flex items-end">
          <div className={` ${!props.hasDiffHeader ? "xl:mr-7 mr-2" : ""}`}>
            <img
              onClick={() => {
                navigate("/");
              }}
              className="cursor-pointer"
              src="../assets/img/logo1.png"
            />
          </div>
          <div className="xl:ml-5 ml-3 text-[#1f1313]">
            <ul className="flex gap-[31px] font-normal text-base leading-5 text-color font-calibri mb-3">
              <li className="group flex items-center gap-[5px]">
                <span className="cursor-pointer">Our Courses</span>
                <img
                  className="w-[6px] h-[6px]"
                  src="../assets/img/Vector 1.png"
                />
              </li>
              <li>Testimonial</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="flex items-end">
          <div className="font-bold text-lg text-color">
            {userData ? (
              <div className="flex items-center xl:gap-5 gap-3">
                {userToken &&
                  !!userData &&
                  JSON.parse(userData)?.query?.pathstatus === "8" && (
                    <PrimaryButton
                      onClick={handleGotoDashboard}
                      name="Go to Dashboard"
                      className="xl:px-[30px] px-[15px] py-2 primary-background !font-calibri text-lg font-bold"
                    />
                  )}
                <PrimaryButton
                  onClick={handleLogout}
                  name="Logout"
                  className="xl:px-[60px] px-[45px] py-2 primary-background !font-calibri text-lg font-bold"
                />
              </div>
            ) : (
              <>
                <PrimaryButton
                  onClick={() => {
                    navigate("/register");
                  }}
                  name="Register"
                  className="xl:px-[39px] px-[30px] py-2 primary-background !font-calibri text-lg font-bold"
                />
                <PrimaryButton
                  onClick={() => {
                    navigate("/auth");
                  }}
                  name="Login"
                  className="xl:px-[39px] px-[45px] ml-5 py-2 primary-background !font-calibri text-lg font-bold"
                />
              </>
            )}
          </div>
          <img className="xl:ml-7 ml-2" src="../assets/img/logo2.png" />
        </div>
      </div>
    </header>
  );
}

export default Header;

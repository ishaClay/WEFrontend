import ErrorMessage from "@/components/comman/Error/ErrorMessage";
import PasswordInput from "@/components/comman/Input/Password";
import { InputWithLable } from "@/components/ui/inputwithlable";
import rePasswordBanner from "../../../public/assets/img/LoginImage.svg";
import { useToast } from "@/components/ui/use-toast";
import { ErrorType } from "@/types/Errors";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useEffect } from "react";
import { ResetPasswordApi } from "@/services/apiServices/authService";
import { ResetPasswordType } from "@/types/auth";
import Loading from "@/components/comman/Error/Loading";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //   const dispatch = useDispatch();
  const { toast } = useToast();
  const schema = z
    .object({
      email: z.string().optional(),
      oldPassword: z.string().optional(),
      password: z
        .string()
        .max(8, "Password must be at least 8 characters")
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&_.?]).{8}$/,
          "Password must contain at least one uppercase letter, one lowercase letter, and one special character"
        ),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });

  type ValidationSchema = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  useEffect(() => {
    setValue("email", location?.state?.email);
    setValue("oldPassword", location?.state?.oldPassword);
  }, [location]);

  const { mutate: resetPasswordData, isPending: loginPanding } = useMutation({
    mutationFn: ResetPasswordApi,
    onSuccess: () => {
      toast({
        title: "Password Reset Successfully",
      });
      navigate("/auth");
    },
    onError: (error: ErrorType) => {
      toast({
        variant: "destructive",
        title: error.data.message,
      });
    },
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    const resetPassword: ResetPasswordType | any = {
      oldPassword: data?.oldPassword || location?.state?.oldPassword,
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      token: location?.state?.token || "",
      status: location?.state?.status || "",
    };
    resetPasswordData(resetPassword);
  };

  return (
    <>
      <div className="flex h-screen 2xl:w-full">
        <div className="bg-[rgb(241,252,239)] w-1/2 font-poppins relative hidden flex-col items-center md:flex">
          <div className="top-[145px] absolute leading-10 flex flex-col items-center">
            <h2 className="lg:text-[62px] text-[40px] font-bold leading-[93px]">
              EcoGrow Platform
            </h2>
            <h3 className="lg:text-[26px] text-[20px] font-normal">
              Nurture your green skills,
            </h3>
            <h3 className="lg:text-[26px] text-[20px] font-normal">
              grow your sustainable impact.
            </h3>
          </div>
          <div className="absolute bottom-0 w-full">
            <img
              src={rePasswordBanner}
              alt="rePassword image"
              className="w-full"
            />
          </div>
        </div>
        <div className="md:w-1/2 font-nunitoSans font-normal flex justify-center items-center bg-white">
          <div className="lg:w-9/12 w-10/12 2xl:w-3/5">
            <h2 className="lg:text-[36px] text-[30px]  leading-[49px] font-extrabold">
              Reset Password
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-row flex-wrap gap-x-8 mt-20"
            >
              <div className="w-full mb-4">
                <InputWithLable
                  label="Email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={location?.state?.email}
                  disabled
                  className="w-full h-[52px] !mt-0 bg-white"
                  {...register("email")}
                />
              </div>
              <div className="w-full mb-4">
                <InputWithLable
                  label="Old Password"
                  placeholder="example@gmail.com"
                  value={location?.state?.oldPassword}
                  disabled
                  className="w-full h-[52px] !mt-0 bg-white"
                  {...register("oldPassword")}
                />
              </div>
              <div className="mb-4 w-full">
                <PasswordInput
                  label="Password"
                  placeholder="Password"
                  className="w-full h-[52px] mt-2 bg-white"
                  validationHandler={register("password")}
                />
                {errors?.password && (
                  <ErrorMessage message={errors?.password.message as string} />
                )}
              </div>
              <div className="mb-4 w-full">
                <PasswordInput
                  label="Confirm Password"
                  placeholder="Password"
                  className="w-full h-[52px] mt-2 bg-white"
                  validationHandler={register("confirmPassword")}
                />
                {errors?.confirmPassword && (
                  <ErrorMessage
                    message={errors?.confirmPassword.message as string}
                  />
                )}
              </div>
              <button
                onClick={() => navigate("/auth")}
                className="text-[14px] text-color font-medium mb-11 cursor-pointer"
              >
                Login
              </button>

              <button
                type="submit"
                className="w-full h-[52px] primary-background secondary-text rounded-[6px] text-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Loading isLoading={loginPanding} />
    </>
  );
};

export default ResetPassword;

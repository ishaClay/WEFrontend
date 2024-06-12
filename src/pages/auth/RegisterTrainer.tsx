import { PrimaryButton } from "@/components/comman/Button/CustomButton";
import ErrorMessage from "@/components/comman/Error/ErrorMessage";
import Loading from "@/components/comman/Error/Loading";
import Header from "@/components/Header";
import { InputWithLable } from "@/components/ui/inputwithlable";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { QUERY_KEYS } from "@/lib/constants";
import { registerTrainer } from "@/services/apiServices/trainer";
import { ErrorType } from "@/types/Errors";
import { Trainer } from "@/types/Trainer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

function RegisterTrainer() {
  const queryClient = useQueryClient();

  const { toast } = useToast();

  const { mutate: createtrainer, isPending: createPending } = useMutation({
    mutationFn: (question: Trainer) => registerTrainer(question),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.trainerList],
      });

      toast({
        description: "Trainer created successfully",
      });
    },
    onError: (error: ErrorType) => {
      console.error(error);
    },
  });

  const schema = z.object({
    providerName: z.string().min(1, { message: "Provider Name is required" }),
    providerType: z.string().min(1, { message: "Provider Type is required" }),
    providerCity: z.string().min(1, { message: "Provider City is required" }),
    providerCountry: z
      .string()
      .min(1, { message: "Provider Country is required" }),
    // surname: z.string().min(1, { message: "Contact Surname is required" }),
    // number: z.string().min(1, { message: "Contact Telephone No. is required" }),
    ProviderAddress: z
      .string()
      .min(1, { message: "Provider Address is required" }),
    ProviderCountry: z
      .string()
      .min(1, { message: "Provider Country is required" }),
    name: z.string().min(1, { message: "Contact First Name is required" }),
    email: z.string().min(1, { message: "Email Address is required" }),
    ProviderNotes: z.string().min(1, { message: "Provider Notes is required" }),
    foreignProvider: z
      .enum(["Yes", "No"])
      .optional()
      .default("No")
      .refine(
        (value) => value !== undefined && (value === "Yes" || value === "No"),
        {
          message: "Please select a valid option for Foreign Provider",
          path: ["foreignProvider"],
        }
      ),
  });

  type ValidationSchema = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (data: any) => {
    createtrainer(data);
    reset();
  };

  return (
    <div className="">
      <Header />
      <div className="flex relative mt-[40px]">
        <div>
          <img
            className="xl:max-w-[707px] max-w-[430px] h-[1000px]"
            src="../assets/img/Group 1000001826.png"
          />
        </div>

        <div className="  ">
          <div className="2xl:ml-[350px] xl:ml-[270px] ml-[270px]">
            <p>
              Already have an account?{" "}
              <a className="text-[#042937] font-semibold">Sign In</a>
            </p>
          </div>
          {/* max-w-[707px]  */}
          <div className="mt-[90px]">
            <div className="flex gap-x-[8px] h-180px items-end ml-[28px]">
              <h3 className="text-[24px]">Complete your registration</h3>
              <img
                className="mb-[10px]"
                src="../assets/img/Group 1000001825.png"
              />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-wrap gap-x-[100px] sm:gap-x-[32px] mt-[32px] justify-start ml-[28px]">
                <div>
                  <InputWithLable
                    className="w-[241px] h-[46px]"
                    placeholder="Sample Consulting Company"
                    label="Provider Name"
                    {...register("providerName")}
                  />
                  {errors.providerName && (
                    <ErrorMessage
                      message={errors.providerName.message as string}
                    />
                  )}
                </div>
                <div>
                  <InputWithLable
                    placeholder="IT or University"
                    className="w-[241px] h-[46px]"
                    label="Provider Type"
                    {...register("providerType")}
                  />
                  {errors.providerType && (
                    <ErrorMessage
                      message={errors.providerType.message as string}
                    />
                  )}
                </div>
                <div>
                  <InputWithLable
                    placeholder="London"
                    className="w-[241px] h-[46px]"
                    label="Provider City/Town"
                    {...register("providerCity")}
                  />
                  {errors.providerCity && (
                    <ErrorMessage
                      message={errors.providerCity.message as string}
                    />
                  )}
                </div>
                <div>
                  <InputWithLable
                    placeholder="London"
                    className="w-[241px] h-[46px]"
                    label="Provider County"
                    {...register("providerCountry")}
                  />
                  {errors.providerCountry && (
                    <ErrorMessage
                      message={errors.providerCountry.message as string}
                    />
                  )}
                </div>
                <div>
                  <InputWithLable
                    placeholder="Sample"
                    className="w-[241px] h-[46px]"
                    label="Contact Surname"
                    name=""
                  />
                </div>
                <div>
                  <InputWithLable
                    placeholder="0044 1234 1234567"
                    className="w-[241px] h-[46px]"
                    label="Contact Telephone No."
                    name=""
                  />
                </div>
                <div>
                  <Select {...register("foreignProvider")}>
                    <SelectGroup>
                      <SelectLabel className="text-[16px] font-[700] py-0 pb-[9px]">
                        Foregin Provider
                      </SelectLabel>

                      <SelectTrigger className="w-[241px] h-[46px] text-[gray]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </SelectGroup>
                    <SelectContent>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.foreignProvider && (
                    <ErrorMessage
                      message={errors.foreignProvider.message as string}
                    />
                  )}
                </div>
                <div>
                  <InputWithLable
                    placeholder="221 B Baker Street"
                    className="w-[241px] h-[46px]"
                    label="Provider Address"
                    {...register("ProviderAddress")}
                  />
                  {errors.ProviderAddress && (
                    <ErrorMessage
                      message={errors.ProviderAddress.message as string}
                    />
                  )}
                </div>
                <div>
                  <InputWithLable
                    placeholder="United Kingdom"
                    className="w-[241px] h-[46px]"
                    label="Provider Country"
                    {...register("ProviderCountry")}
                  />
                  {errors.ProviderCountry && (
                    <ErrorMessage
                      message={errors.ProviderCountry.message as string}
                    />
                  )}
                </div>
                <div>
                  <InputWithLable
                    placeholder="John"
                    className="w-[241px] h-[46px]"
                    label="Contact First Name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <ErrorMessage message={errors.name.message as string} />
                  )}
                </div>{" "}
                <div>
                  <InputWithLable
                    placeholder="john.sample@emailsample.com"
                    className="w-[241px] h-[46px]"
                    label="Email Address"
                    {...register("email")}
                  />
                  {errors.email && (
                    <ErrorMessage message={errors.email.message as string} />
                  )}
                </div>
                <div>
                  <InputWithLable
                    placeholder="Notes 1"
                    className="w-[241px] h-[46px]"
                    label="Provider Notes"
                    {...register("ProviderNotes")}
                  />
                  {errors.ProviderNotes && (
                    <ErrorMessage
                      message={errors.ProviderNotes.message as string}
                    />
                  )}
                </div>
                <PrimaryButton
                  type="submit"
                  name="Submit"
                  className="w-[370px] h-[48px] mt-[40px] ml-[80px]"
                />
                <div className="w-[296px] h-[30px] font-[400] text-[12px] mt-[112px] ml-[125px] text-center text-[#898989]">
                  <label>
                    Protected by reCAPTCHA and subject to the Skillnet{" "}
                    <a className="text-color">Privacy Policy</a> and{" "}
                    <a className="text-color">Terms of Service.</a>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Loading isLoading={createPending} />
      </div>
    </div>
  );
}

export default RegisterTrainer;

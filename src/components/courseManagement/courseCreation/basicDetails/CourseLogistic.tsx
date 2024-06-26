import InputWithLabel from "@/components/comman/InputWithLabel";
import Loader from "@/components/comman/Loader";
import SelectMenu from "@/components/comman/SelectMenu";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { createCourseTwoPage } from "@/services/apiServices/courseManagement";
import { ResponseError } from "@/types/Errors";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as zod from "zod";

const Time = [
  {
    label: "Part time",
    value: "1",
  },
  {
    label: "Full time",
    value: "0",
  },
];

const type = [
  {
    label: "Online",
    value: "0",
  },
  {
    label: "In-Person",
    value: "1",
  },
  {
    label: "Hybrid",
    value: "2",
  },
  {
    label: "Major",
    value: "2",
  },
];

const durationType = [
  {
    label: "Days",
    value: "Days",
  },
  {
    label: "Weeks",
    value: "Weeks",
  },
  {
    label: "Months",
    value: "Months",
  },
  {
    label: "Year",
    value: "Year",
  },
];

const schema = zod.object({
  time: zod.string().min(1, "Time is required"),
  type: zod.string().min(1, "Type is required"),
  location: zod.string().min(1, "Location is required"),
  duration: zod
    .string()
    .min(1, "Duration is required")
    .refine((val) => {
      return !isNaN(parseFloat(val)) && parseFloat(val) > 0;
    }, "Duration should be greater than 0"),
  durationType: zod.string().min(1, "Duration type is required"),
});

const CourseLogistic = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      time: Time[0].value,
      type: type[0].value,
      location: "",
      duration: "",
      durationType: durationType[0].value,
    },
  });
  const navigate = useNavigate();
  const search = window.location.search;
  const params = new URLSearchParams(search).get("id");
  const paramsTab = new URLSearchParams(search).get("tab");
  const paramsversion = new URLSearchParams(search).get("version");

  const { mutate, isPending } = useMutation({
    mutationFn: createCourseTwoPage,
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Course created successfully",
        variant: "success",
      });
      navigate(
        `/trainer/create_course?tab=${paramsTab}&step=${3}&id=${params}&version=${paramsversion}`,
        {
          replace: true,
        }
      );
    },
    onError: (error: ResponseError) => {
      toast({
        title: "Error",
        description: error.data?.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FieldValues) => {
    const payload = {
      time: +data?.time,
      isOnline: +data?.type,
      universityAddress: data?.location,
      duration: data?.duration + " " + data?.durationType,
    };

    mutate({
      data: payload,
      id: params || "",
      paramsversion: paramsversion || "",
    });
  };

  return (
    <div className="border border-[#D9D9D9] rounded-md p-7">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <h6 className="text-base text-[#515151] font-calibri pb-3">
            Is this course offered on a full-time or part-time basis?
          </h6>
          <div className="mb-[15px]">
            <SelectMenu
              option={Time}
              setValue={(data: string) => setValue("time", data)}
              value={watch("time")}
              className="bg-[#FFF] text-foreground font-calibri font-normal text-base p-4 py-[14px] h-auto"
            />
          </div>
        </div>
        <div className="">
          <h6 className="text-base text-[#515151] font-calibri pb-3">
            How is this course delivered? (e.g., Online, In-person, Hybrid)
          </h6>
          <div className="mb-[15px]">
            <SelectMenu
              option={type}
              setValue={(data: string) => setValue("type", data)}
              value={watch("type")}
              className="bg-[#FFF] text-foreground font-calibri font-normal text-base p-4 py-[14px] h-auto"
            />
          </div>
        </div>
        <div className="">
          <h6 className="text-base text-[#515151] font-calibri pb-3">
            Where is this course physically located? (if applicable)
          </h6>
          <div className="mb-[15px] w-full">
            <InputWithLabel
              type="text"
              placeholder="University Address"
              className="p-4 py-[14px] !text-[#000] placeholder:text-black rounded-md text-base font-calibri"
              {...register("location")}
              error={errors.location?.message as string}
            />
          </div>
        </div>
        <div className="">
          <h6 className="text-base text-[#515151] font-calibri pb-3">
            What is the duration of the course? (e.g., 6 months, 1 year)
          </h6>
          <div className="flex">
            <div className="pe-5">
              <InputWithLabel
                type="number"
                placeholder="Days / Weeks / Months / Year"
                className="border-[#D9D9D9] placeholder:text-black border rounded-md font-calibri text-base px-3 py-[14px]"
                {...register("duration")}
                error={errors.duration?.message as string}
              />
            </div>
            <div className="">
              <SelectMenu
                option={durationType}
                setValue={(data: string) => setValue("durationType", data)}
                value={watch("durationType")}
                className="w-[150px] border font-calibri border-[#D9D9D9] rounded-md py-[16px] h-auto"
                itemClassName="text-[#1D2026] font-calibri"
              />
            </div>
          </div>
        </div>
        <div className="text-right">
          <Button
            type="submit"
            className="outline-none text-base font-inter text-white bg-[#58BA66] py-6 px-8"
          >
            {isPending ? <Loader containerClassName="max-h-auto" /> : "Next"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CourseLogistic;

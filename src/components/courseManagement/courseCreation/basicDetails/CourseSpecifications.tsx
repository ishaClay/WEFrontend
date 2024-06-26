import InputWithLabel from "@/components/comman/InputWithLabel";
import Loader from "@/components/comman/Loader";
import SelectMenu from "@/components/comman/SelectMenu";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { getCertificate } from "@/services/apiServices/certificate";
import {
  createCourseTwoPage,
  fetchNfqlLevel,
} from "@/services/apiServices/courseManagement";
import { ResponseError } from "@/types/Errors";
import { CertificateResponse } from "@/types/certificate";
import { NfqlLevelResponse } from "@/types/nfql";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as zod from "zod";

const schema = zod.object({
  nfqLevel: zod.string().min(1, "NQF level is required"),
  participants: zod.string().min(1, "Participants is required"),
  ectsCredit: zod.string().min(1, "ECTS credit is required"),
  fetCredit: zod.string().min(1, "FET credit is required"),
});

const CourseSpecifications = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "all",
  });
  const search = window.location.search;
  const params = new URLSearchParams(search).get("id");
  const paramsTab = new URLSearchParams(search).get("tab");
  const paramsversion = new URLSearchParams(search).get("version");
  const navigate = useNavigate();

  const { data } = useQuery<CertificateResponse>({
    queryKey: ["certificate"],
    queryFn: getCertificate,
  });

  const { data: nfql } = useQuery<NfqlLevelResponse>({
    queryKey: ["nfqllevel"],
    queryFn: fetchNfqlLevel,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createCourseTwoPage,
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Course created successfully",
        variant: "success",
      });
      navigate(
        `/trainer/create_course?tab=${paramsTab}&step=${2}&id=${params}&version=${paramsversion}`,
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

  const certificateOption =
    data?.data?.length &&
    data?.data?.map((item) => {
      return {
        label: item.templateName,
        value: item.id.toString(),
      };
    });

  const nfqlLevelOption =
    nfql?.data?.length &&
    nfql?.data?.map((item) => {
      return {
        label: item.leval,
        value: item.id.toString(),
      };
    });

  const onSubmit = (data: FieldValues) => {
    const payload = {
      nfqLeval: data?.nfqLevel,
      ectsCredits: data?.ectsCredit,
      fetCredits: data?.fetCredit,
      certificate: data?.participants,
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
        <div className="mb-[18px]">
          <Label className="font-primary font-[400] leading-normal font-calibri text-[16px] text-[#515151]">
            Specify the NFQ level for this course (if applicable).
          </Label>
          <SelectMenu
            option={nfqlLevelOption || []}
            setValue={(e: string) => setValue("nfqLevel", e)}
            value={watch("nfqLevel")}
            placeholder="NQF Level 4"
            className="border border-[#D9D9D9] rounded-md w-full px-4 py-3 outline-none font-base font-calibri text-[#1D2026] mt-[9px]"
          />
        </div>
        <div className="mb-[18px]">
          <InputWithLabel
            label="How many ECTS credits does this course offer?"
            labelClassName="font-calibri md:text-[16px] text-[#515151]"
            placeholder="60 Credits"
            className="border border-[#D9D9D9] rounded-md w-full px-4 py-3 outline-none font-base font-calibri text-[#1D2026] mt-[9px]"
            {...register("ectsCredit")}
            error={errors.ectsCredit?.message as string}
          />
        </div>
        <div className="mb-[18px]">
          <InputWithLabel
            label="How many FET credits does this course offer?"
            labelClassName="font-calibri md:text-[16px] text-[#515151]"
            placeholder="60 Credits"
            className="border border-[#D9D9D9] rounded-md w-full px-4 py-3 outline-none font-base font-calibri text-[#1D2026] mt-[9px]"
            {...register("fetCredit")}
            error={errors.fetCredit?.message as string}
          />
        </div>
        <div className="mb-[18px]">
          <Label className="font-primary font-[400] leading-normal font-calibri text-[16px] text-[#515151]">
            What type of certificate or award will participants receive upon
            completion?
          </Label>
          <SelectMenu
            option={certificateOption || []}
            setValue={(e: string) => setValue("participants", e)}
            value={watch("participants")}
            placeholder="Post Graduate Degree or Diploma, Certificate, Professional Diploma"
            className="border border-[#D9D9D9] rounded-md w-full px-4 py-3 outline-none font-base font-calibri text-[#1D2026] mt-[9px]"
          />
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

export default CourseSpecifications;

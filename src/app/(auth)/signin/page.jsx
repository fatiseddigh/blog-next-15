"use client";

import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import SpinnerMini from "@/ui/SpinnerMini";
import Button from "@/components/ui/Button";
import { singinApi } from "@/services/authservice";

const schema = yup
  .object({
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
  })
  .required();

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
    try {
      const { user, message } = await singinApi(values);
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        Login
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          label="email"
          name="email"
          register={register}
          isRequired
          errors={errors}
        />
        <RHFTextField
          label="password"
          name="password"
          register={register}
          type="password"
          isRequired
          errors={errors}
        />
        <>
          {isLoading ? (
            <SpinnerMini />
          ) : (
            <Button type="submit" variant="primary" className="w-full">
              Confirm
            </Button>
          )}
        </>
      </form>
      <Link href="/signup" className="text-secondary-500 mt-6 text-center">
        register
      </Link>
    </div>
  );
}
export default Signin;

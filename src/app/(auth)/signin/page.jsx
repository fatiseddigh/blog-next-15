"use client";

import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import SpinnerMini from "@/ui/SpinnerMini";
import Button from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";

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

  const { signin } = useAuth();

  const onSubmit = async (values) => {
    await signin(values);
  };

  return (
    <div className="w-full">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent drop-shadow-md">
        Login
      </h1>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <RHFTextField
          label="Email"
          name="email"
          register={register}
          isRequired
          errors={errors}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 
                 text-white placeholder-gray-300 rounded-xl 
                 focus:ring-2 focus:ring-primary-400 focus:border-transparent"
        />

        <RHFTextField
          label="Password"
          name="password"
          type="password"
          register={register}
          isRequired
          errors={errors}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 
                 text-white placeholder-gray-300 rounded-xl 
                 focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
        />

        {/* Button */}
        {isLoading ? (
          <div className="flex justify-center">
            <SpinnerMini />
          </div>
        ) : (
          <Button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r 
                   from-primary-600 via-primary-400 to-secondary-500 
                   text-white font-medium shadow-md 
                   hover:scale-[1.02] transition-transform"
          >
            Confirm
          </Button>
        )}
      </form>

      {/* Signup Link */}
      <div className="mt-8 text-center">
        <Link
          href="/signup"
          className="text-sm text-secondary-500 hover:underline transition-colors"
        >
          Don’t have an account? Register
        </Link>
      </div>
    </div>
  );
}
export default Signin;

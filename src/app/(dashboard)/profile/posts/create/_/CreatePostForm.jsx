"use client";
import { useCategories } from "@/hooks/useCategories";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "Enter at least 5 characters")
      .required("Title is required"),
    briefText: yup
      .string()
      .min(10, "Enter at least 10 characters")
      .required("Description is required"),
    text: yup
      .string()
      .min(10, "Enter at least 10 characters")
      .required("Description is required"),
    slug: yup.string().required("Slug is required"),
    readingTime: yup
      .number()
      .positive()
      .integer()
      .required("Reading time is required")
      .typeError("Enter a valid number"),
    category: yup.string().required("Category is required"),
  })
  .required();

function CreatePostForm() {
  const { categories } = useCategories();
  const {
    control,
    reset,
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
    // defaultValues: editValues,
  });

  const onSubmit = (data) => {};

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField
        name="title"
        label="Title"
        errors={errors}
        register={register}
        isRequired
        className="input-glass"
      />

      <RHFTextField
        name="briefText"
        label="Brief Text"
        errors={errors}
        register={register}
        isRequired
        className="input-glass"
      />

      <RHFTextField
        name="text"
        label="Text"
        errors={errors}
        register={register}
        isRequired
        className="input-glass"
      />

      <RHFTextField
        name="slug"
        label="Slug"
        errors={errors}
        register={register}
        isRequired
        className="input-glass"
      />

      <RHFTextField
        name="readingTime"
        label="Reading Time"
        errors={errors}
        register={register}
        isRequired
        className="input-glass"
      />

      <RHFSelect
        name="category"
        label="Category"
        errors={errors}
        register={register}
        isRequired
        options={categories}
        className="input-glass"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 px-4 rounded-xl font-medium
                   bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500
                   text-white shadow-md hover:shadow-xl transition"
      >
        Create Post
      </button>
    </form>
  );
}
export default CreatePostForm;

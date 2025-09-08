"use client";
import { useCategories } from "@/hooks/useCategories";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import useCreatePost from "./useCreatePost";
import useEditPost from "./useEditPost";
import { useRouter } from "next/navigation";
import FileInput from "@/ui/FileInput";
import ButtonIcon from "@/ui/ButtonIcon";
import { XMarkIcon } from "@heroicons/react/24/outline";
import SpinnerMini from "@/ui/SpinnerMini";
import Image from "next/image";

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

function CreatePostForm({ postToEdit = {} }) {
  const { _id: editId } = postToEdit;
  const isEditSession = Boolean(editId);
  const {
    title,
    text,
    slug,
    briefText,
    readingTime,
    category,
    coverImage,
    coverImageUrl: prevCoverImageUrl,
  } = postToEdit;

  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      text,
      slug,
      briefText,
      readingTime,
      category: category._id,
      coverImage, // https://floan.ir/upload/folan.png => File !!!
    };
  }

  const { categories } = useCategories();
  const [coverImageUrl, setCoverImageUrl] = useState(prevCoverImageUrl || null);
  const { createPost, isCreating } = useCreatePost();
  const { editPost, isEditing } = useEditPost();
  const router = useRouter();

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
    defaultValues: editValues,
  });

  useEffect(() => {
    if (prevCoverImageUrl) {
      // convert preve link to file
      async function fetchMyApi() {
        const file = await imageUrlToFile(prevCoverImageUrl);
        setValue("coverImage", file);
      }
      fetchMyApi();
    }
  }, [editId, prevCoverImageUrl, setValue]);

  const onSubmit = (data) => {
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    if (isEditSession) {
      editPost(
        { id: editId, data: formData },
        {
          onSuccess: () => {
            reset();
            router.push("/profile/posts");
          },
        }
      );
    } else {
      createPost(formData, {
        onSuccess: () => {
          router.push("/profile/posts");
        },
      });
    }
  };

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
      <Controller
        name="coverImage"
        control={control}
        rules={{ required: "Post cover image is required" }}
        render={({ field: { value, onChange, ...rest } }) => {
          return (
            <FileInput
              label="Choose your cover image"
              name="coverImage"
              isRequired
              errors={errors}
              {...rest}
              value={value?.fileName}
              onChange={(event) => {
                const file = event.target.files[0];
                // console.log(file);
                onChange(file);
                setCoverImageUrl(URL.createObjectURL(file));
                event.target.value = null;
              }}
            />
          );
        }}
      />

      {coverImageUrl && (
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            fill
            alt="cover-iamge"
            src={coverImageUrl}
            className="object-cover object-center"
          />
          <ButtonIcon
            onClick={() => {
              setCoverImageUrl(null);
              setValue("coverImage", null);
            }}
            variant="red"
            className="w-6 h-6 absolute left-4 top-4"
          >
            <XMarkIcon />
          </ButtonIcon>
        </div>
      )}
      {/* Submit Button */}
      <div>
        {isCreating || isEditing ? (
          <SpinnerMini />
        ) : (
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl font-medium
                   bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500
                   text-white shadow-md hover:shadow-xl transition"
          >
            Create Post
          </button>
        )}
      </div>
    </form>
  );
}
export default CreatePostForm;

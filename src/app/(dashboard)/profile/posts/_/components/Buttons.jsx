"use client";
import ButtonIcon from "@/ui/ButtonIcon";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function DeletePost({ post: { _id: id, title } }) {
  return (
    <>
      <ButtonIcon variant="outline">
        <TrashIcon className="text-error" />
      </ButtonIcon>
    </>
  );
}

export function UpdatePost({ id }) {
  return (
    <Link href={`/profile/posts/${id}/edit`}>
      <ButtonIcon variant="outline">
        <PencilIcon />
      </ButtonIcon>
    </Link>
  );
}

"use client";

import { createComment } from "@/lib/actions";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import { useState, useActionState, useEffect } from "react";
import toast from "react-hot-toast";

const initilaState = {
  error: "",
  message: "",
};

function CommentForm({ postId, parentId, onClose }) {
  const [text, setText] = useState("");
  const [state, formAction] = useActionState(createComment, initilaState); // useFormState in React V 18.

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state, onClose]);

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form
            className="space-y-7"
            //  action={createComment.bind(null, postId, parentId)}
            action={async (formData) => {
              await formAction({ formData, postId, parentId });
            }}
          >
            <TextArea
              name="text"
              label="Comment Text"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <SubmitButton
              className="border-secondary-400 text-secondary-100 bg-primary-400
                 hover:bg-secondary-600 hover:scale-99 transition-all duration-300 drop-shadow-sm"
            >
              Submit
            </SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CommentForm;

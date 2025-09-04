"use client";
import Button from "@/ui/Button";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Comment from "./Comment";
import Modal from "@/ui/Modal";
import { useState } from "react";
import CommentForm from "./CommentForm";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function PostComment({ post: { comments, _id: postId } }) {
  const [open, setOpen] = useState(false);
  const [parent, setParent] = useState(null);
  const { user } = useAuth();
  const router = useRouter();

  const addNewCommentHandler = (parent) => {
    if (!user) {
      router.push("/signin");
      return;
    }
    setParent(parent);
    setOpen(true);
  };

  return (
    <div className="mb-10">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={parent ? "Reply to Comment" : "New Comment"}
        description={parent ? parent.user.name : "Enter your comment"}
      >
        <CommentForm
          onClose={() => setOpen(false)}
          parentId={parent ? parent._id : null}
          postId={postId}
        />
      </Modal>
      <div className="flex flex-col items-center lg:flex-row justify-between gap-y-3 mb-8">
        <h2 className="text-2xl font-bold text-secondary-800 pl-2">Comments</h2>
        <Button
          onClick={() => addNewCommentHandler(null)}
          variant="outline"
          className="flex items-center py-2"
        >
          <QuestionMarkCircleIcon className="w-4 ml-2" />
          <span>Submit a new comment</span>
        </Button>
      </div>
      <div className="space-y-8 post-comments bg-secondary-0 rounded-xl py-6 px-3 lg:px-6 ">
        {comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <div key={comment._id}>
                <div
                  className="rounded-xl p-2 sm:p-4 mb-3 bg-gradient-to-br from-primary-600/20 via-primary-400/20 to-secondary-500/20 
             backdrop-blur-xl border border-white/20 
             shadow-lg animate-fadeIn"
                >
                  <Comment
                    comment={comment}
                    onAddComment={() => addNewCommentHandler(comment)}
                  />
                </div>
                <div className="post-comments__answer ml-2 sm:ml-8 space-y-3">
                  {comment.answers.map((item, index) => {
                    return (
                      <div key={item._id} className="relative">
                        <div
                          className={classNames(
                            "answer-item  p-2 sm:p-4 rounded-xl mb-3 bg-gradient-to-br from-primary-400/20 via-primary-200/20 to-secondary-300/20 backdrop-blur-xl border border-white/20 shadow-lg animate-fadeIn",
                            {
                              "last-item": index + 1 === comment.answers.length,
                            }
                          )}
                        >
                          <Comment comment={item} key={item._id} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-secondary-500">
            No comments have been posted for this post
          </p>
        )}
      </div>
    </div>
  );
}
export default PostComment;

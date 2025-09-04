"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { createPortal } from "react-dom";

function Modal({ open, onClose, title, children, description = "" }) {
  const ref = useOutsideClick(onClose);

  return (
    open &&
    createPortal(
      <div
        className="fixed inset-0 z-50 flex items-center justify-center 
                   bg-black/40 backdrop-blur-sm"
      >
        {/* Modal card */}
        <div
          ref={ref}
          className="relative w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] 
                     overflow-y-auto rounded-2xl 
                     bg-white/10 backdrop-blur-xl border border-white/20 
                     shadow-2xl animate-fadeIn"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-white/10">
            <div>
              <p className="text-lg font-bold bg-gradient-to-r from-primary-600 via-primary-400 to-secondary-500 bg-clip-text text-transparent">
                {title}
              </p>
              {description && (
                <p className="text-sm text-gray-200 mt-1">{description}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition"
            >
              <XMarkIcon className="w-6 h-6 text-secondary-500 hover:text-secondary-400" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">{children}</div>

          {/* Optional footer buttons */}
          {/* 
          <div className="flex justify-end gap-3 p-4 border-t border-white/10">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm rounded-lg text-gray-200 hover:text-white"
            >
              Cancel
            </button>
            <button className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-primary-600 via-primary-400 to-secondary-500 text-white shadow-md">
              Confirm
            </button>
          </div> */}
        </div>
      </div>,
      typeof document !== "undefined" ? document.body : null
    )
  );
}

export default Modal;

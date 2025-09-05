"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

function Drawer({ open, onClose, children }) {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  if (!domReady) return null;

  return createPortal(
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-50 w-[300px] h-screen transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <div
          className="flex flex-col h-full 
                     bg-gradient-to-br from-primary-600/20 via-primary-400/20 to-secondary-500/20 
                     backdrop-blur-xl border-r border-white/20 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <h2 className="text-base font-semibold bg-gradient-to-r from-primary-600 via-primary-400 to-secondary-500 bg-clip-text text-transparent">
              Menu
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition"
            >
              <XMarkIcon className="w-6 h-6 text-secondary-200 hover:text-secondary-400" />
            </button>
          </div>

          {/* Content */}
          <div>{children}</div>
        </div>
      </div>
    </>,
    document.body
  );
}

export default Drawer;

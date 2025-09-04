"use client";
import Modal from "@/ui/Modal";
import React, { useState } from "react";

const page = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="hiiii"
        description="hellloooooo"
      >
        test content ....
      </Modal>
    </>
  );
};

export default page;

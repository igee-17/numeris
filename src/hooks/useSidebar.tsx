import React from "react";
import { useState } from "react";

export const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prevState) => !prevState);

  return { isOpen, open, close, toggle };
};

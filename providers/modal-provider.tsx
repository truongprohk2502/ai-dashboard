"use client";

import useDomMounted from "@/hooks/use-dom-mounted";

import { ProModal } from "@/components/modals/pro-modal";

export const ModalProvider = () => {
  const isMounted = useDomMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ProModal />
    </>
  );
};

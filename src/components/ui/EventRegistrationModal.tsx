"use client";

import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "../ui/animated-modal";
import { LucideIcon } from "lucide-react";

type EventRegistrationModalProps = {
  title: string;
  date: string;
  highlights: string[];
  icon: LucideIcon;
  onConfirm?: () => void;
};

export function EventRegistrationModal({
  title,
  date,
  highlights,
  icon: IconComponent,
  onConfirm,
}: EventRegistrationModalProps) {
  return (
    <Modal>
      {/** Modal Trigger (the button that opens the modal) */}
      <ModalTrigger 
  className="inline-flex h-10 items-center justify-center gap-2
    rounded-md border border-purple-500/20 
    bg-gradient-to-r from-purple-500/10 via-purple-500/20 to-purple-600/10
    hover:from-purple-500/20 hover:via-purple-500/30 hover:to-purple-600/20
    px-6 font-medium text-purple-200 
    shadow-[0_0_15px_rgba(168,85,247,0.1)]
    backdrop-blur-sm transition-all duration-300
    hover:border-purple-500/30 hover:text-purple-100"
>
  <div className="flex items-center gap-2">
    <IconComponent className="w-5 h-5 text-purple-400" />
    <span>Register Now</span>
  </div>
</ModalTrigger>

      {/** The main body of the modal, shown when open = true */}
      <ModalBody>
        <ModalContent className="text-gray-800 dark:text-gray-100 text-left">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            <strong>Date:</strong> {date}
          </p>

          {!!highlights?.length && (
            <ul className="list-disc list-inside text-sm mb-6">
              {highlights.map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>
          )}

          <p className="text-sm">
            Click <strong>Yes</strong> to confirm your participation in{" "}
            <em>{title}</em>.
          </p>
        </ModalContent>

        <ModalFooter className="flex gap-4 justify-end">
          <NoButton />
          <YesButton onConfirm={onConfirm} title={title} />
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}

function NoButton() {
  const { setOpen } = useModal();

  const handleNo = () => {
    console.log("User clicked NO");
    setOpen(false);
  };

  return (
    <button
      onClick={handleNo}
      className="px-3 py-1 rounded-md border border-gray-400 
                 dark:border-gray-600 text-sm"
    >
      No
    </button>
  );
}

function YesButton({
  onConfirm,
  title,
}: {
  onConfirm?: () => void;
  title: string;
}) {
  const { setOpen } = useModal();

  const handleYes = () => {
    console.log(`User clicked YES for "${title}"`);
    if (onConfirm) onConfirm();
    setOpen(false);
  };

  return (
    <button
      onClick={handleYes}
      className="px-3 py-1 rounded-md border border-black bg-black text-white 
                 dark:border-white dark:bg-white dark:text-black text-sm"
    >
      Yes
    </button>
  );
}

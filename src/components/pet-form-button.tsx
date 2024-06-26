import React from "react";
import { Button } from "./ui/button";
import { ActionType } from "@/lib/types";
import { useFormStatus } from "react-dom";

type PetFormButtonProps = {
  actionType: ActionType;
};

export default function PetFormButton({ actionType }: PetFormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="mt-5 self-end">
      {actionType === "add" ? "Add a new pet" : "Edit pet"}
    </Button>
  );
}

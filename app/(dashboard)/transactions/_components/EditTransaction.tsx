// EditTransactionDialog.tsx
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  transaction: TransactionHistoryRow;
}

function EditTransactionDialog({ open, setOpen, transaction }: Props) {
  const [description, setDescription] = useState(transaction.description);
  const [amount, setAmount] = useState(transaction.amount);
  const queryClient = useQueryClient();

  const editMutation = useMutation({
    mutationFn: (data) => updateTransaction(transaction.id, data),
    onSuccess: async () => {
      toast.success("Transaction updated successfully");
      await queryClient.invalidateQueries(["transactions"]);
    },
    onError: () => {
      toast.error("Failed to update transaction");
    },
  });

  const handleUpdate = () => {
    editMutation.mutate({ description, amount });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Transaction</AlertDialogTitle>
        </AlertDialogHeader>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="input-field"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Amount"
          className="input-field"
        />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleUpdate}>Update</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default EditTransactionDialog;

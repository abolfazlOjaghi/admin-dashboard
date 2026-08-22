import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
export const useDeleteItem = (queryKey, dataKey, itemName, id) => {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const deleteItem = () => {
    queryClient.setQueryData(queryKey, (oldData) => {
      if (!oldData) return oldData;

      return {
        ...oldData,
        [dataKey]: oldData[dataKey].filter((item) => item.id !== id),
      };
    });
    setIsModalOpen(false);
    toast.success(
      <div>
        <p className="font-medium">{itemName} removed</p>
        <p className="text-xs text-gray-500">
          Demo only — changes are not persisted!
        </p>
      </div>,
    );
  };
  return {deleteItem, isModalOpen, toggleModal : () => setIsModalOpen(prev => !prev) };
};

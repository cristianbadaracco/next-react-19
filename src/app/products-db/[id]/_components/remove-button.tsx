"use client";

import { toast } from "sonner";

import { deleteProduct } from "@/actions/products";

interface RemoveButtonProps {
  id: number;
  optimisticAction: (action: unknown) => void;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({
  id,
  optimisticAction,
}) => {
  const formAction = async (id: number) => {
    optimisticAction(id);

    const deleteProductWithId = deleteProduct.bind(null, id);
    try {
      await deleteProductWithId();
    } catch (error) {
      toast.error(
        `Error deleting product id: ${id} - ${error && JSON.stringify(error)}`
      );
    }
  };

  return (
    <form action={() => formAction(id)}>
      <button
        type="submit"
        className="bg-red-500 hover:bg-red-700 cursor-pointer text-white font-bold py-2 px-4 rounded"
      >
        X
      </button>
    </form>
  );
};

export default RemoveButton;

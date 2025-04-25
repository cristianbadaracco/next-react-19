import SubmitButton from "./submit-button";

import type { FormError, Product } from "@/types";

interface ProductFormProps {
  action: (payload: FormData) => void;
  state?: FormError;
  product?: Product;
}

const ProductForm: React.FC<ProductFormProps> = ({
  action,
  state,
  product,
}) => {
  return (
    <form
      action={action}
      className="w-full max-w-lg border border-gray-200 rounded-lg p-6 shadow-sm"
    >
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
          Product Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue={product?.title}
        />
        {state?.errors?.title && (
          <p className="text-red-500 text-sm mt-1">{state?.errors.title}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
          Price ($)
        </label>
        <input
          type="number"
          id="price"
          name="price"
          step="0.01"
          min="0"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue={product?.price}
        />
        {state?.errors?.price && (
          <p className="text-red-500 text-sm mt-1">{state?.errors.price}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-gray-700 font-medium mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue={product?.description ?? ""}
        ></textarea>
        {state?.errors?.description && (
          <p className="text-red-500 text-sm mt-1">
            {state?.errors.description}
          </p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
};

export default ProductForm;

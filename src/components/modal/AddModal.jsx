import { ListCheck, AlignLeft } from "lucide-react";
import Input from "../ui/Input";
import { useRef, useState } from "react";
import { ImagePlus, X } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { productSchema } from "../../validators/addProductValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../../services/requests/products";
import { toast } from "sonner";
import { fileToBase64 } from "../../utils/fileToBase64";
import ModalCancelButton from "../ui/ModalCancelButton";
const ImageInput = ({ label = "Product image", onChange, error }) => {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    setPreview(URL.createObjectURL(file));
    onChange?.(file);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    setPreview(null);
    onChange?.(null);
    if (inputRef.current) inputRef.current.value = "";
  };
  return (
    <div className="w-full space-y-1.5">
      <label className="text-sm font-medium text-gray-600 dark:text-gray-300 ml-1">
        {label}
      </label>

      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          handleFile(e.dataTransfer.files?.[0]);
        }}
        className={`relative flex flex-col items-center justify-center gap-y-2 rounded-xl border-2 border-dashed transition-colors cursor-pointer overflow-hidden
          ${isDragging ? "border-blue-600 bg-blue-600/5" : "border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900 hover:border-blue-600/60"}
          ${preview ? "h-40" : "h-32"}`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />

        {preview ? (
          <>
            <img
              src={preview}
              alt=""
              className="w-full h-full object-contain p-2"
            />
            <button
              type="button"
              onClick={handleRemove}
              className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 cursor-pointer transition-colors"
            >
              <X size={14} />
            </button>
          </>
        ) : (
          <>
            <ImagePlus size={24} className="text-gray-400" />
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              <span className="text-blue-600">Click to upload</span> or drag &
              drop
            </p>
            <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
          </>
        )}
      </div>
      <p className="min-h-3 text-red-600 text-sm font-semibold">
        {error || ""}
      </p>
    </div>
  );
};
const AddModal = ({ cancel }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(productSchema),
  });
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    // fake post request
    mutationFn: addProduct,
    onSuccess: (data) => {
      toast.success(
        <div>
          <p className="font-medium">{data.title} added</p>
          <p className="text-xs text-gray-500">
            Demo only — changes are not persisted!
          </p>
        </div>,
      );
      queryClient.invalidateQueries({ queryKey: ["products"] });
      cancel();
      reset();
    },
    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
  });
  const handleSubmitForm = async (formData) => {
    const payload = { ...formData };
    if (formData.image instanceof File) {
      payload.thumbnail = await fileToBase64(formData.image);
      delete payload.image;
    }
    mutate(payload);
  };
  return (
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <div className="flex flex-col items-center text-center gap-y-3">
        <div className="bg-emerald-600/20 text-emerald-700 rounded-full p-3">
          <ListCheck size={28} />
        </div>
        <h4 className="text-lg font-semibold">
          Fill this form to add a new product
        </h4>
      </div>
      <form
        className="w-full flex flex-col items-center *:w-full gap-y-1.5"
        id="addProductForm"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <Input
          {...register("title")}
          label="title"
          placeholder="enter product title"
          error={errors.title?.message}
          reserveErrorSpace
        />
        <Input
          {...register("price")}
          label="price"
          placeholder="enter price($)"
          error={errors.price?.message}
          reserveErrorSpace
        />
        <Input
          {...register("inventory")}
          label="stock"
          placeholder="enter your product inventory"
          error={errors.inventory?.message}
          reserveErrorSpace
        />
        <div className="relative">
          <AlignLeft
            size={18}
            className="absolute left-3.5 top-3.5 text-gray-400"
          />
          <textarea
            placeholder="Briefly describe the product..."
            rows={3}
            {...register("description")}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-100 dark:bg-zinc-900 font-medium placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-blue-600/40 resize-none"
          />
          <p className="min-h-3 text-red-600 text-sm font-semibold">
            {errors.description?.message || ""}
          </p>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <ImageInput
                onChange={field.onChange}
                error={errors.image?.message}
              />
            )}
          />
        </div>
      </form>
      <div className="flex items-center gap-x-3 w-full *:flex-1">
        <ModalCancelButton cancel={cancel} disabeld={isPending} disabeledStyles="disabled:opacity-50 disabled:cursor-not-allowed"/>
        <button
          className="rounded-xl py-1.5 hover:bg-emerald-600 hover:text-white text-emerald-600 transition-colors font-medium text-lg border-2  border-emerald-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-emerald-600"
          form="addProductForm"
          disabled={isPending}
        >
          {isPending ? "Adding" : "Add Product"}
        </button>
      </div>
    </div>
  );
};
export default AddModal;

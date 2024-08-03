import IButton from "@/components/modules/Button/Button";
import TextField from "@/components/modules/TextField/TextField";
import { addProduct } from "@/services/requests/product";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Chip } from "@mui/material";

const AddProductForm = () => {
  const [tags, setTags] = useState("");
  const [allTags, setAllTags] = useState<string[]>([]);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    addProduct({
      ...data,
      image: data.image[0].name,
      tags: allTags,
      discount: Number(data.discount),
    }).then((res) => {
      toast.success(res.data.message);
      reset();
    });
  };

  const tagHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!tags) return;
    if (e.key === "Enter") {
      setAllTags([...allTags, tags]);
      setTags("");
    }
  };

  const handleDelete = (tag: string) => {
    setAllTags(allTags.filter((t) => t !== tag));
  };

  return (
    <>
      <h2 className="mb-4">Add Product</h2>
      <form className="grid grid-cols-3 gap-4">
        <TextField
          {...register("title", {
            required: "Title is required",
          })}
          type="text"
          variant="gray"
          placeholder="Title"
          bgVariant="primary-light"
          error={errors.title?.message as string | undefined}
        />
        <TextField
          {...register("description", {
            required: "Description is required",
          })}
          type="text"
          variant="gray"
          placeholder="Description"
          bgVariant="primary-light"
          error={errors.description?.message as string | undefined}
        />
        <TextField
          {...register("price", {
            required: "Price is required",
          })}
          type="number"
          variant="gray"
          placeholder="Price"
          bgVariant="primary-light"
          error={errors.price?.message as string | undefined}
        />
        <div className="border border-gray rounded-md h-12 p-2 bg-white">
          <input {...register("image")} id="file_input" type="file" />
        </div>

        <TextField
          {...register("discount")}
          type="number"
          variant="gray"
          placeholder="Discount"
          bgVariant="primary-light"
        />
        <div>
          <TextField
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            onKeyDown={(e) => tagHandler(e)}
            type="text"
            variant="gray"
            placeholder="Add a tag..."
            bgVariant="primary-light"
          />
          <div className="flex gap-2 flex-wrap mt-2">
            {allTags.map((tag) => (
              <div key={tag}>
                <Chip label={tag} variant="outlined" onDelete={() => handleDelete(tag)} />
              </div>
            ))}
          </div>
        </div>
      </form>
      <IButton className="mt-6" type="button" onClick={handleSubmit(onSubmit)}>
        Add Product
      </IButton>
    </>
  );
};

export default AddProductForm;

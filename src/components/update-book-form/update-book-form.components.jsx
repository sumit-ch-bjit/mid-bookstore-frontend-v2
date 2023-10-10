import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UpdateBookContainer } from "./update-book-form.styles";

const UpdateBookForm = () => {
  const location = useLocation();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: location.state.book.title,
      author: location.state.book.author,
      description: location.state.book.description,
      price: location.state.book.price,
    },
  });

  const onSubmit = () => console.log("form submitted");

  return (
    <UpdateBookContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput
                label="Title"
                type="text"
                // required
                onChange={field.onChange}
                name="title"
                value={field.value}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="author"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput
                label="Author"
                type="text"
                // required
                onChange={field.onChange}
                name="Author"
                value={field.value}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="description"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput
                label="Description"
                type="text"
                // required
                onChange={field.onChange}
                name="Description"
                value={field.value}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="price"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput
                label="Price"
                type="number"
                // required
                onChange={field.onChange}
                name="Price"
                value={field.value}
              />
            )}
          />
        </div>
        <Button type="submit">Update Book</Button>
      </form>
    </UpdateBookContainer>
  );
};

export default UpdateBookForm;

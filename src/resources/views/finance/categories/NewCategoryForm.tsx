import { useSaveCategory } from "@/models/api/categories";
import { Category } from "@/models/services/categories";
import { Button, Group, Select, Stack, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { z } from "zod";

const categorySchema = z.object({
  name: z.string().trim().min(1, { message: "Name can not be empty." }),
  type: z.string().min(1, { message: "Type can not be empty." }),
});

const NewCategoryForm = () => {
  const mutation = useSaveCategory();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      type: "",
    },
    validate: zodResolver(categorySchema),
  });

  const handleOnSubmit = async (values: Category) => {
    mutation.mutate(values);
    notifications.show({
      title: "Success",
      message: "Category created successfully",
      color: "green",
    });
    form.reset();
  };

  return (
    <form onSubmit={form.onSubmit(handleOnSubmit)}>
      <Stack>
        <TextInput
          label="Name"
          withAsterisk
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <Select
          withAsterisk
          label="Type"
          data={[
            { value: "expense", label: "Expense" },
            { value: "income", label: "Income" },
            { value: "other", label: "Other" },
          ]}
          key={form.key("type")}
          {...form.getInputProps("type")}
        />

        <Group mt="md">
          <Button type="submit" variant="light">
            Save
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export default NewCategoryForm;

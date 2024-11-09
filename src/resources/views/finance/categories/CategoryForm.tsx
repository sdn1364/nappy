import {
  useGetCategoryById,
  useSaveCategory,
  useUpdateCategory,
} from "@/models/api/categories";
import { Category } from "@/models/services/categories.data";
import {
  Button,
  Group,
  LoadingOverlay,
  Radio,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useEffect } from "react";
import { z } from "zod";

const categorySchema = z.object({
  name: z.string().trim().min(1, { message: "Name can not be empty." }),
  type: z.string().min(1, { message: "Type can not be empty." }),
});

type CategoryFormProps = {
  editing: string | null;
};

const CategoryForm = ({ editing }: CategoryFormProps) => {
  const createMutate = useSaveCategory();

  const updateMutate = useUpdateCategory();

  const {
    data: categoryData,
    isPending,
    isSuccess,
  } = useGetCategoryById(editing);

  const form = useForm<Category>({
    mode: "uncontrolled",
    initialValues: {
      id: "",
      name: "",
      type: "",
    },
    validate: zodResolver(categorySchema),
  });

  const handleOnSubmit = async (values: Category) => {
    if (editing) {
      await updateMutate.mutate({ ...values, id: editing });
      notifications.show({
        title: "Updated",
        message: "Category updated successfully",
        color: "green",
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...rest } = values;
      await createMutate.mutate(rest as Category);
      // await createMutate.mutate(values as Category);

      if (createMutate.isError) {
        notifications.show({
          title: "Error",
          message: createMutate?.error?.message,
          color: "red",
        });
        return;
      }
      notifications.show({
        title: "Created",
        message: "Category created successfully",
        color: "green",
      });
      form.reset();
    }
  };

  useEffect(() => {
    if (editing && isSuccess) {
      form.setValues({
        name: categoryData.name,
        type: categoryData.type,
      });
    }
  }, [categoryData, editing, isSuccess]);

  return (
    <form
      style={{ position: "relative" }}
      onSubmit={form.onSubmit(handleOnSubmit)}
    >
      {editing && (
        <LoadingOverlay
          visible={isPending}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
      )}
      <Stack>
        <TextInput
          label="Name"
          withAsterisk
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <Radio.Group label="Type" withAsterisk {...form.getInputProps("type")}>
          <Group mt="xs">
            {[
              { value: "expense", label: "Expense" },
              { value: "income", label: "Income" },
              { value: "other", label: "Other" },
            ].map((o) => (
              <Radio
                name="type"
                key={o.value}
                label={o.label}
                value={o.value}
              />
            ))}
          </Group>
        </Radio.Group>
        {/* <Select
          withAsterisk
          label="Type"
          data={[
            { value: "expense", label: "Expense" },
            { value: "income", label: "Income" },
            { value: "other", label: "Other" },
          ]}
          key={form.key("type")}
          {...form.getInputProps("type")}
        /> */}

        <Group mt="md">
          <Button type="submit" variant="light">
            Save
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export default CategoryForm;

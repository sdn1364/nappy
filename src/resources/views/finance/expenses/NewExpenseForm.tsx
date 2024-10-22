import { useGetAllCategories } from "@/models/api/categories";
import { Button, Group, Loader, Select, Stack, TextInput } from "@mantine/core";

const NewExpenseForm = () => {
  const { data: categories, isPending } = useGetAllCategories();

  return (
    <Stack justify="space-between" h="100%">
      <Stack>
        <TextInput withAsterisk label="Name" />
        <Select
          withAsterisk
          label="Category"
          disabled={isPending}
          rightSection={isPending && <Loader size="xs" />}
          data={
            categories
              ?.filter((c) => c.type === "expense")
              .map((c) => ({
                value: `${c.id}`,
                label: `${c.name}`,
              })) ?? []
          }
        />

        <Select
          withAsterisk
          label="Account"
          data={[
            { value: "saving", label: "Chequing account" },
            { value: "credit", label: "Credit account" },
          ]}
        />
      </Stack>
      <Group mt="md">
        <Button type="submit" variant="light">
          Save
        </Button>
      </Group>
    </Stack>
  );
};

export default NewExpenseForm;

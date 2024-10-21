import { Button, Group, Select, Stack, TextInput } from "@mantine/core";

const NewExpenseForm = () => {
  return (
    <Stack justify="space-between" h="100%">
      <Stack>
        <TextInput label="Name" />
        <Select
          label="Category"
          data={[
            { value: "restaurant", label: "Restaurant" },
            { value: "rent", label: "Rent" },
          ]}
        />
      </Stack>
      <Group mt="md">
        <Button size="compact-xs" variant="light">
          Save
        </Button>
        <Button size="compact-xs" variant="subtle">
          Save and New
        </Button>
      </Group>
    </Stack>
  );
};

export default NewExpenseForm;

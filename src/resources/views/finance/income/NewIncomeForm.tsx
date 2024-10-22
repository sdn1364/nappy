import { useGetAllCategories } from "@/models/api/categories";
import {
  Button,
  Loader,
  rem,
  Select,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import {
  IconCalendarMonth,
  IconCategory,
  IconCreditCard,
  IconCurrencyDollar,
  IconReceipt,
} from "@tabler/icons-react";

const NewIncomeForm = () => {
  const { data: categories, isPending } = useGetAllCategories();

  return (
    <Stack justify="space-between" h="100%">
      <TextInput
        data-autofocus
        leftSectionPointerEvents="none"
        leftSection={
          <IconReceipt style={{ width: rem(16), height: rem(16) }} />
        }
        withAsterisk
        label="Name"
      />
      <TextInput
        withAsterisk
        label="Amount"
        leftSectionPointerEvents="none"
        leftSection={
          <IconCurrencyDollar style={{ width: rem(16), height: rem(16) }} />
        }
      />
      <Select
        leftSectionPointerEvents="none"
        leftSection={
          <IconCategory style={{ width: rem(16), height: rem(16) }} />
        }
        withAsterisk
        label="Category"
        disabled={isPending}
        rightSection={isPending && <Loader size="xs" />}
        data={
          categories
            ?.filter((c) => c.type === "income")
            .map((c) => ({
              value: `${c.id}`,
              label: `${c.name}`,
            })) ?? []
        }
      />
      <Select
        leftSectionPointerEvents="none"
        leftSection={
          <IconCreditCard style={{ width: rem(16), height: rem(16) }} />
        }
        withAsterisk
        label="Account"
        data={[
          { value: "saving", label: "Chequing account" },
          { value: "credit", label: "Credit account" },
        ]}
      />
      <DateInput
        leftSectionPointerEvents="none"
        leftSection={
          <IconCalendarMonth style={{ width: rem(16), height: rem(16) }} />
        }
        label="Date"
        withAsterisk
      />
      <Textarea label="Description" rows={3} />
      <Button type="submit" variant="light">
        Save
      </Button>
    </Stack>
  );
};

export default NewIncomeForm;

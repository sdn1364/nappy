import { useGetAllAccounts } from "@/models/api/account";
import { useGetAllCategories } from "@/models/api/categories";
import {
  Button,
  Loader,
  NumberInput,
  rem,
  Select,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import {
  IconCalendarMonth,
  IconCategory,
  IconCreditCard,
  IconCurrencyDollar,
  IconReceipt,
} from "@tabler/icons-react";

import { z } from "zod";

const expenseSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  amount: z.number().min(1, { message: "Amount is required." }),
  category: z.string(),
  account: z.string(),
  date: z.date(),
  description: z.string().min(1, { message: "Description is required" }),
});

const NewExpenseForm = () => {
  const { data: categories, isPending } = useGetAllCategories();
  const { data: accounts, isPending: accountIsPending } = useGetAllAccounts();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      amount: "",
      category: "",
      account: "",
      date: "",
      description: "",
    },
    validate: zodResolver(expenseSchema),
  });

  const handleOnSubmit = (values) => console.log(values);

  return (
    <form onSubmit={form.onSubmit(handleOnSubmit)}>
      <Stack justify="space-between" h="100%">
        <TextInput
          data-autofocus
          leftSectionPointerEvents="none"
          leftSection={
            <IconReceipt style={{ width: rem(16), height: rem(16) }} />
          }
          withAsterisk
          label="Name"
          {...form.getInputProps("name")}
        />
        <NumberInput
          hideControls
          withAsterisk
          label="Amount"
          leftSectionPointerEvents="none"
          leftSection={
            <IconCurrencyDollar style={{ width: rem(16), height: rem(16) }} />
          }
          {...form.getInputProps("amount")}
        />
        <Select
          label="Category"
          withAsterisk
          leftSectionPointerEvents="none"
          checkIconPosition="right"
          leftSection={
            <IconCategory style={{ width: rem(16), height: rem(16) }} />
          }
          {...form.getInputProps("category")}
          disabled={isPending}
          rightSection={isPending && <Loader size="xs" />}
          data={
            categories &&
            categories
              ?.filter((c: { type: string }) => c.type === "expense")
              ?.map((c) => ({
                value: `${c.id}`,
                label: `${c.name}`,
              }))
          }
        />
        <Select
          withAsterisk
          leftSectionPointerEvents="none"
          checkIconPosition="right"
          label="Account"
          leftSection={
            <IconCreditCard style={{ width: rem(16), height: rem(16) }} />
          }
          {...form.getInputProps("account")}
          disabled={accountIsPending}
          rightSection={accountIsPending && <Loader size="xs" />}
          data={accounts?.map((a) => ({
            value: `${a.id}`,
            label: `${a.name}`,
          }))}
        />
        <DateInput
          leftSectionPointerEvents="none"
          leftSection={
            <IconCalendarMonth style={{ width: rem(16), height: rem(16) }} />
          }
          label="Date"
          {...form.getInputProps("date")}
          withAsterisk
        />
        <Textarea
          label="Description"
          {...form.getInputProps("description")}
          rows={3}
        />
        <Button type="submit" variant="light">
          Save
        </Button>
      </Stack>
    </form>
  );
};

export default NewExpenseForm;

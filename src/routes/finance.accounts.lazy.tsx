import Account from "@/resources/views/finance/account/Account";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/finance/accounts")({
  component: Account,
});

import HeaderWithMenu from "@/resources/components/HeaderWithMenu";
import Page from "@/resources/components/Page";
import { Outlet } from "@tanstack/react-router";

const Finance = () => {
  const pages = [
    { name: "Dashboard", href: "/finance" },
    {
      name: "Expenses",
      href: "/finance/expense",
    },
    {
      name: "Income",
      href: "/finance/income",
    },
    {
      name: "Savings",
      href: "/finance/savings",
    },
    undefined, // add to create a divider
    {
      name: "Categories",
      href: "/finance/categories",
    },
    {
      name: "Accounts",
      href: "/finance/accounts",
    },
  ];

  return (
    <Page header={<HeaderWithMenu heading="Finance" routes={pages} />}>
      <Outlet />
    </Page>
  );
};

export default Finance;

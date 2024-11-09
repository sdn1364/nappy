import { useLocation } from "@tanstack/react-router";
import { Bolt } from "lucide-react";
import { useState } from "react";
import SettingsDialog from "./SettingsDialog";
import ThemeToggle from "./theme-toggle";
import Tooltip from "./Tooltip";
import { Button } from "./ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menubar";
import UserAccountMenu from "./UserAccountMenu";

const MainMenu = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState<boolean>(false);
  const menus = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "finance",
      href: "/finance",
      items: [
        {
          name: "Glance",
          href: "/finance",
        },
        {
          name: "Expense",
          href: "/finance/expense",
        },
        {
          name: "Income",
          href: "finance/income",
        },
        {
          name: "Savings",
          href: "finance/savings",
        },
        undefined,
        {
          name: "Categories",
          href: "finance/categories",
        },
        {
          name: "Accounts",
          href: "/finance/accounts",
        },
      ],
    },
    {
      name: "time tracker",
      href: "/time-tracker",
    },
    {
      name: "habit tracker",
      href: "/habit-tracker",
    },
    {
      name: "settings",
      href: "/settings",
    },
  ];

  return (
    <>
      <SettingsDialog open={open} onOpenChange={() => setOpen(false)} />
      <Menubar className="flex flex-row justify-between">
        <div className="flex flex-row space-x-1 items-center">
          {menus.map((m, i) => {
            const { name, items } = m;
            return (
              <MenubarMenu key={"main-menu-" + i}>
                <MenubarTrigger>
                  {name!.charAt(0)?.toUpperCase() + name!.slice(1)}
                </MenubarTrigger>
                {items && (
                  <MenubarContent>
                    {items.map((item, j) => {
                      if (!item)
                        return (
                          <MenubarSeparator key={"menu-item-" + i + "-" + j} />
                        );
                      return (
                        <MenubarItem key={"menu-item-" + i + "-" + j}>
                          {item.name}
                        </MenubarItem>
                      );
                    })}
                  </MenubarContent>
                )}
              </MenubarMenu>
            );
          })}
        </div>
        <div className="flex flex-row items-center">
          <Tooltip label="Settings">
            <Button
              variant="outline"
              className="rounded-none border-r-0"
              onClick={() => setOpen(true)}
            >
              <Bolt strokeWidth="1.5" className="rotate-90" />
            </Button>
          </Tooltip>
          <Tooltip label="Quick theme toggle">
            <ThemeToggle />
          </Tooltip>
          <UserAccountMenu />
        </div>
      </Menubar>
    </>
  );
};

export default MainMenu;

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@radix-ui/react-menubar";
import { MenubarShortcut } from "./ui/menubar";

const MainMenu = () => {
  const menus = [
    {
      name: "File",
      content: [
        {
          name: "New Tab",
          href: "/new-tab",
          type: "link",
          shortcut: "⌘T",
        },
        {},
      ],
    },
  ];
  return (
    <div className="w-full px-5">
      <Menubar>
        {menus.map((m, i) => (
          <MenubarMenu key={i}>
            <MenubarTrigger>{m.name}</MenubarTrigger>
            <MenubarContent>
              {m.content.map((c, i) => {
                return (
                  <MenubarItem key={i}>
                    {c.name}
                    {c.shortcut && (
                      <MenubarShortcut>{c.shortcut}</MenubarShortcut>
                    )}
                  </MenubarItem>
                );
              })}

              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        ))}
      </Menubar>
    </div>
  );
};
export default MainMenu;

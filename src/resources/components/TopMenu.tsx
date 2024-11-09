import { useLocation } from "@tanstack/react-router";
import { Route } from "./HeaderWithMenu";
import { Button } from "./ui/button";

const TopMenu = ({ routes }: { routes: Route[] }) => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-row gap-5">
      {routes.map((p, i) => {
        return (
          <Button key={i} disabled={pathname === p!.href}>
            {p!.name}
          </Button>
        );
      })}
    </div>
  );
};

export default TopMenu;

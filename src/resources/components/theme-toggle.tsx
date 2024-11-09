import { useTheme } from "@/providers/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      className="rounded-none"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Moon strokeWidth={1.5} />
      ) : (
        <Sun strokeWidth={1.5} />
      )}
    </Button>
  );
};

export default ThemeToggle;

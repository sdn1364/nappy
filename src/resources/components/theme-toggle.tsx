import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

const ThemeToggle = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      size="lg"
      variant="subtle"
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === "light" ? (
        <IconMoon style={{ width: "70%", height: "70%" }} strokeWidth={1} />
      ) : (
        <IconSun style={{ width: "70%", height: "70%" }} strokeWidth={1} />
      )}
    </ActionIcon>
  );
};

export default ThemeToggle;

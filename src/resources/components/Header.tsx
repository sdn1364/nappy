import { Group, Title } from "@mantine/core";
import { ReactNode } from "react";

interface Header {
  children?: ReactNode;
  heading: string;
}
const Header = ({ children, heading }: Header) => {
  return (
    <Group justify="space-between" align="flex-start">
      <Title order={5}>{heading}</Title>
      {children}
    </Group>
  );
};

export default Header;

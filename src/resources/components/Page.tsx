import { Stack } from "@mantine/core";
import { ReactNode } from "@tanstack/react-router";
import { PropsWithChildren } from "react";

interface PageProps {
  header?: ReactNode;
}

const Page = ({ children, header }: PropsWithChildren<PageProps>) => {
  return (
    <Stack
      p="md"
      mx="auto"
      style={{
        width: 1400,
      }}
    >
      {header}
      {children}
    </Stack>
  );
};

export default Page;

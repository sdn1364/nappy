import { Paper, Stack } from "@mantine/core";
import { ReactNode } from "@tanstack/react-router";
import { PropsWithChildren } from "react";

interface PageProps {
  header?: ReactNode;
  fullscreen?: boolean;
}

const Page = ({
  children,
  header,
  fullscreen,
}: PropsWithChildren<PageProps>) => {
  return (
    <Stack
      mx="auto"
      style={{
        width: fullscreen ? "100%" : 1400,
      }}
    >
      <Paper py="md">{header}</Paper>
      {children}
    </Stack>
  );
};

export default Page;

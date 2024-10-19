import { Stack } from "@mantine/core";
import { ReactNode } from "@tanstack/react-router";
import { PropsWithChildren } from "react";

interface PageProps {
  header?: ReactNode;
  heading?: string;
}

const Page = ({
  children,
  header: Header,
  heading,
}: PropsWithChildren<PageProps>) => {
  return (
    <Stack
      p="md"
      mx="auto"
      style={{
        width: 1400,
      }}
    >
      {Header && <Header />}
      {children}
    </Stack>
  );
};

export default Page;

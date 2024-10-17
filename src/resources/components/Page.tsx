import { Box } from "@mantine/core";
import { PropsWithChildren } from "react";

const Page = ({ children }: PropsWithChildren) => {
  return (
    <Box
      p="md"
      mx="auto"
      style={{
        width: 1400,
      }}
    >
      {children}
    </Box>
  );
};

export default Page;

import { Box } from "@mantine/core";
import { PropsWithChildren } from "react";

const Page = ({ children }: PropsWithChildren) => {
  return (
    <Box p="md" w="100%">
      {children}
    </Box>
  );
};

export default Page;

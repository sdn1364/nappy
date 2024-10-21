import Page from "@/resources/components/Page";
import { Box, Group, lighten, Paper } from "@mantine/core";
import { useRef } from "react";

const Dashboard = () => {
  const chartRef = useRef(null);
  console.log(chartRef);
  return (
    <Page>
      <Paper ref={chartRef} p="md" withBorder>
        <Group gap={1}>
          {[...Array(371)].map((_, i) => (
            <Paper key={"cell-" + i} p="xs">
              <Box
                w="100%"
                h="100%"
                bg={lighten("var(--mantine-color-dark-9)", Math.random())}
              ></Box>
            </Paper>
          ))}
        </Group>
      </Paper>
    </Page>
  );
};

export default Dashboard;

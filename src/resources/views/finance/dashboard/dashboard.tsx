import { AreaChart, BarChart } from "@mantine/charts";
import { Grid, Paper, rem, Stack, Title } from "@mantine/core";
import { StatsGrid } from "./StatsGrid";
import { StatsSegments } from "./StatsSegments";

const data = [
  {
    date: "Mar 22",
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: "Mar 23",
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: "Mar 24",
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: "Mar 25",
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: "Mar 26",
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];

const barData = [
  { month: "January", Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: "February", Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: "March", Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: "April", Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: "May", Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: "June", Smartphones: 750, Laptops: 600, Tablets: 1000 },
];

const FinanceDashboard = () => {
  return (
    <Stack>
      <StatsGrid />
      <Grid align="stretch">
        <Grid.Col style={{ minHeight: rem(80) }} span={4}>
          <StatsSegments />
        </Grid.Col>
        <Grid.Col style={{ minHeight: rem(120) }} span={8}>
          <Paper withBorder p="md" radius="md">
            <Stack>
              <Title order={5}>Overview</Title>
              <AreaChart
                h={300}
                data={data}
                dataKey="date"
                series={[
                  { name: "Apples", color: "indigo.6" },
                  { name: "Oranges", color: "blue.6" },
                  { name: "Tomatoes", color: "teal.6" },
                ]}
                curveType="linear"
              />
            </Stack>
          </Paper>
        </Grid.Col>
        <Grid.Col span={6}>
          <Paper withBorder p="md" radius="md" bg="rgba(166, 30, 77, 0.04)">
            <Stack>
              <Title order={5}>Expenses</Title>
              <BarChart
                h={300}
                data={barData}
                dataKey="month"
                series={[
                  { name: "Smartphones", color: "violet.6" },
                  { name: "Laptops", color: "blue.6" },
                  { name: "Tablets", color: "teal.6" },
                ]}
                tickLine="y"
              />
            </Stack>
          </Paper>
        </Grid.Col>
        <Grid.Col span={6}>
          <Paper withBorder p="md" radius="md" bg="rgba(54, 79, 199, 0.04)">
            <Stack>
              <Title order={5}>Income</Title>
              <BarChart
                h={300}
                data={barData}
                dataKey="month"
                series={[
                  { name: "Smartphones", color: "violet.6" },
                  { name: "Laptops", color: "blue.6" },
                  { name: "Tablets", color: "teal.6" },
                ]}
                tickLine="y"
              />
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default FinanceDashboard;

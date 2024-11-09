import Page from "@/resources/components/Page";
import { useRef } from "react";

const Dashboard = () => {
  const chartRef = useRef(null);
  console.log(chartRef);
  return (
    <Page>
      <div ref={chartRef} p="md" withBorder>
        <div className="flex flex-col gap-1">
          {[...Array(371)].map((_, i) => (
            <div className="p-5" key={"cell-" + i}>
              <div className="w-full h-full" w="100%" h="100%"></div>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Dashboard;

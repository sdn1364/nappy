import HeaderWithMenu from "@/resources/components/HeaderWithMenu";
import Page from "@/resources/components/Page";
import { Outlet } from "@tanstack/react-router";

const Finance = () => {
  return (
    <Page header={<HeaderWithMenu heading="Finance" />}>
      <Outlet />
    </Page>
  );
};

export default Finance;

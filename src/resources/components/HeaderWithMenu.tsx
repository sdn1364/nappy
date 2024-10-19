import Header from "./Header";
import TopMenu from "./TopMenu";

export type Route =
  | {
      name: string;
      href: string;
    }
  | undefined;

interface HeaderWithMenuProps {
  routes: Route[];
  heading?: string;
}

const HeaderWithMenu = ({ routes, heading }: HeaderWithMenuProps) => {
  return (
    <Header heading={heading!}>
      <TopMenu routes={routes} />
    </Header>
  );
};
export default HeaderWithMenu;

import { ReactNode } from "react";

interface Header {
  children?: ReactNode;
  heading: string;
}
const Header = ({ children, heading }: Header) => {
  return (
    <div className="flex flex-row justify-between items-start">
      <h5>{heading}</h5>
      {children}
    </div>
  );
};

export default Header;

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
    <div
      className="mx-auto"
      style={{
        width: fullscreen ? "100%" : 1400,
      }}
    >
      <div className="h-14 my-5">{header}</div>
      {children}
    </div>
  );
};

export default Page;

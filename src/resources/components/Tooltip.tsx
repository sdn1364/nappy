import { PropsWithChildren } from "react";
import {
  Tooltip as ShadcnTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Tooltip = ({ children, label }: PropsWithChildren<{ label: string }>) => {
  return (
    <TooltipProvider>
      <ShadcnTooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </ShadcnTooltip>
    </TooltipProvider>
  );
};

export default Tooltip;

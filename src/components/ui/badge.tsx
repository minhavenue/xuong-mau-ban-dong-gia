import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-background/90 px-2.5 py-0.5 text-xs font-semibold text-foreground shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

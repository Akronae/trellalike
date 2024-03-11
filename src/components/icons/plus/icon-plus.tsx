import { DetailedHTMLProps, HTMLAttributes } from "react";
import "./icon-plus.css";

export type IconPlusProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  size?: "m" | "lg";
  color?: "white" | "light" | "black";
};
export function IconPlus(props: IconPlusProps) {
  return (
    <span
      className={`icon-plus ${props.size || ""} ${props.color || ""}`}
      {...props}
    />
  );
}

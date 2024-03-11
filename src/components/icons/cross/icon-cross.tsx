import { DetailedHTMLProps, HTMLAttributes } from "react";
import "./icon-cross.css";

export function IconCross(
  props: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
) {
  return <span className="icon-cross" {...props} />;
}

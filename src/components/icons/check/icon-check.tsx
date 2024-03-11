import { DetailedHTMLProps, HTMLAttributes } from "react";
import "./icon-check.css";

export function IconCheck(
  props: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
) {
  return <span className="icon-check" {...props} />;
}

import { DetailedHTMLProps, HTMLAttributes } from "react";
import "./icon-text.css";

export function IconText(
  props: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
) {
  return <span className="icon-text" {...props} />;
}

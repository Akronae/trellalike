import { DetailedHTMLProps, HTMLAttributes } from "react";
import "./icon-minus.css";

export function IconMinus(
  props: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
) {
  return <span className="icon-minus" {...props} />;
}

import { DetailedHTMLProps, HTMLAttributes } from "react";
import "./icon-eye.css";

export function IconEye(
  props: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
) {
  return <span className="icon-eye" {...props} />;
}

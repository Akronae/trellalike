import { Box, Button, ButtonProps } from "@mui/material";
import { IconEye } from "@/components/icons/eye/icon-eye";
import { IconText } from "@/components/icons/text/icon-text";

export type TaskProps = React.PropsWithChildren &
  ButtonProps & {
    followed?: boolean;
    content?: string;
    title: string;
    id: string;
  };
export function Task(props: TaskProps) {
  const { title, followed, content, children, ...rest } = props;

  return (
    <Button
      variant="contained"
      color="secondary"
      size="small"
      style={{
        boxShadow: "rgba(9, 30, 66, 0.25) 0px 1px 0px",
      }}
      sx={{
        padding: "0 8px",
        height: "auto",
        backgroundColor: "white",
        ":hover": { backgroundColor: "#f4f5f7" },
      }}
      {...rest}
    >
      <Box display={"flex"} flexDirection={"column"}>
        {title}
        {children}
        <Box display={"flex"} flexDirection={"row"}>
          {followed && <IconEye />}
          {content && <IconText />}
        </Box>
      </Box>
    </Button>
  );
}

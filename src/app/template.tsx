import { Header } from "@/components/header";
import { Box } from "@mui/material";

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box width={"100vw"} height={"100vh"}>
      <Header />
      {children}
    </Box>
  );
}

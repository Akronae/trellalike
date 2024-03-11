"use client";

import styled from "@emotion/styled";
import { IconPlus } from "@/components/icons/plus/icon-plus";
import { Button, Box } from "@mui/material";
import { useState } from "react";
import { IconCross } from "@/components/icons/cross/icon-cross";

export type AddListBtnProps = {
  onAdd: (title: string) => void;
};
export function AddListBtn(props: AddListBtnProps) {
  const { onAdd } = props;
  const [mode, setMode] = useState<"idle" | "edit">("idle");
  const [title, setTitle] = useState<string>("");

  if (mode == "idle") {
    return (
      <NewListButton
        size="small"
        variant="contained"
        onClick={() => setMode("edit")}
      >
        <IconPlus color="white" />
        Ajouter une autre liste
      </NewListButton>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: "#ebecf0",
        padding: "4px",
        width: "100%",
      }}
    >
      <input
        placeholder="Saisissez le titre de la liste..."
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          borderStyle: "solid",
          borderColor: "transparent",
          borderRadius: "3px",
          height: "36px",
          margin: "0px",
          paddingLeft: "12px",
          paddingRight: "12px",
          outline: "0px",
          width: "100%",
          borderWidth: "0px",
          boxShadow: "rgb(0, 121, 191) 0px 0px 0px 2px inset",
        }}
      />
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        gap={"6px"}
        marginTop={"4px"}
      >
        <Button
          color="success"
          variant="contained"
          size="small"
          onClick={() => {
            onAdd(title);
            setMode("idle");
            setTitle("");
          }}
        >
          Ajouter une liste
        </Button>
        <IconCross
          onClick={() => {
            setMode("idle");
          }}
        />
      </Box>
    </Box>
  );
}

const NewListButton = styled(Button)`
  width: 100%;
  background-color: #ffffff3d;
  border-radius: 3px;
  padding: 1px 12px;
  color: white;
  font-size: 14px;
  height: 40px;
  line-height: 32px;
  display: flex;
  justify-content: flex-start;

  &:hover {
    background-color: #abb1b4;
  }
`;

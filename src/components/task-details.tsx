"use client";

import {
  Backdrop,
  Box,
  Button,
  IconButton,
  Typography,
  TypographyProps,
} from "@mui/material";
import { TaskProps } from "@/components/task";
import { IconEye } from "@/components/icons/eye/icon-eye";
import { IconMinus } from "@/components/icons/minus/icon-minus";
import { IconCheck } from "@/components/icons/check/icon-check";
import { IconCross } from "@/components/icons/cross/icon-cross";
import { IconPlus } from "@/components/icons/plus/icon-plus";
import { useState } from "react";
import styled from "@emotion/styled";

export type TaskDetailsProps = {
  onClose: () => void;
  onTaskUpdate: (task: TaskProps) => void;
  onTaskDelete: (task: TaskProps) => void;
  task: TaskProps;
  list: { title: string };
};
export function TaskDetails(props: TaskDetailsProps) {
  const { onClose, onTaskUpdate, task, list } = props;

  const [mode, setMode] = useState<"view" | "edit">("view");
  const [taskContent, setTaskContent] = useState<string | undefined>(
    task.content
  );

  const saveContent = () => {
    onTaskUpdate({ ...task, content: taskContent });
    setMode("view");
  };

  const del = () => {
    if (
      confirm(
        [
          `Vous allez supprimer la carte nommée ${task.title}.`,
          `Appuyez sur "OK" pour continuer.`,
          `Ou sur "Annuler" pour fermer.`,
        ].join("\n")
      )
    ) {
      props.onTaskDelete(task);
      props.onClose();
    }
  };

  return (
    <Backdrop
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.64)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        overflow: "hidden scroll",
      }}
      open={true}
      transitionDuration={150}
    >
      <Box
        padding={"12px 24px 32px"}
        sx={{
          backgroundColor: "#f4f5f7",
          borderRadius: "3px",
          width: "100%",
          maxWidth: "768px",
          position: "relative",
        }}
      >
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            top: "0",
            right: "0",
            padding: "4px",
            margin: "4px",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
          }}
          onClick={() => onClose()}
        >
          <IconPlus
            size="lg"
            color="light"
            style={{
              transform: "rotate(45deg)",
              margin: 0,
              color: "#919191",
            }}
          />
        </IconButton>
        <Box display={"flex"} flexDirection={"column"} gap={"19px"}>
          <Box>
            <Typography variant="subtitle1">{task.title}</Typography>
            <Typography variant="body2">
              Dans la liste{" "}
              <span style={{ textDecoration: "underline" }}>{list.title}</span>
              {task.followed && <IconEye />}
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"row"} gap={"20px"}>
            <Box flex={1}>
              <Header>Description</Header>
              {mode === "view" && !task.content && (
                <Button
                  color="secondary"
                  variant="contained"
                  size="small"
                  sx={{
                    height: "50px",
                    padding: "8px 12px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                  onClick={() => setMode("edit")}
                >
                  <span
                    style={{
                      lineHeight: "19px",
                      fontFamily:
                        '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
                    }}
                  >
                    Ajouter une description plus détaillée...
                  </span>
                </Button>
              )}
              {mode === "view" && task.content && (
                <Typography
                  variant="body2"
                  sx={{
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    lineHeight: "19px",
                    cursor: "pointer",
                  }}
                  onClick={() => setMode("edit")}
                >
                  {task.content}
                </Typography>
              )}
              {mode == "edit" && (
                <>
                  <NoteDetailsArea
                    placeholder="Ajouter une description plus détaillée..."
                    autoFocus
                    value={taskContent}
                    onChange={(e) => setTaskContent(e.target.value)}
                  />
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    marginTop={"2px"}
                    gap={"6px"}
                  >
                    <Button
                      color="success"
                      variant="contained"
                      size="small"
                      onClick={() => saveContent()}
                    >
                      Enregistrer
                    </Button>
                    <IconCross onClick={() => setMode("view")} />
                  </Box>
                </>
              )}
            </Box>
            <Box minWidth={"170px"}>
              <Header>Actions</Header>
              <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
                <Button
                  color="secondary"
                  variant="contained"
                  size="small"
                  sx={{
                    width: "100%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                    marginTop: "4px",
                    padding: "1px 4px 1px 12px",
                  }}
                  onClick={() =>
                    onTaskUpdate({ ...task, followed: !task.followed })
                  }
                >
                  <IconEye
                    style={{
                      margin: 0,
                      marginRight: "2px",
                      marginBottom: "-1px",
                    }}
                  />
                  Suivre
                  {task.followed && <Checked />}
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  size="small"
                  sx={{
                    width: "100%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                  onClick={del}
                >
                  <IconMinus
                    style={{
                      margin: 0,
                      marginRight: "2px",
                      marginBottom: "-1px",
                    }}
                  />
                  Supprimer
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
        onClick={() => onClose()}
      />
    </Backdrop>
  );
}

function Header(props: TypographyProps) {
  return (
    <Typography
      fontSize={"18px"}
      lineHeight={"32px"}
      fontWeight={600}
      marginBottom={"5px"}
      {...props}
    />
  );
}

function Checked() {
  return (
    <Box
      sx={{
        backgroundColor: (t) => t.palette.success.light,
        width: "24px",
        height: "24px",
        borderRadius: "3px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
      }}
    >
      <IconCheck />
    </Box>
  );
}

const NoteDetailsArea = styled.textarea`
  appearance: none;
  border-radius: 3px;
  box-shadow: rgba(9, 30, 66, 0.13) 0px 0px 0px 1px inset;
  border-width: 0px;
  font-size: 14px;
  padding: 12px;
  width: 100%;

  &:focus {
    box-shadow: rgb(0, 121, 191) 0px 0px 0px 2px inset;
  }
`;

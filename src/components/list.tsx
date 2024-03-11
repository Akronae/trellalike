"use client";

import { Box, Button, IconButton, Typography } from "@mui/material";
import { IconMoreHoriz } from "@/components/icons/more-horiz/icon-more-horiz";
import { IconPlus } from "@/components/icons/plus/icon-plus";
import { Task, TaskProps } from "@/components/task";
import { useState } from "react";
import { IconCross } from "@/components/icons/cross/icon-cross";
import { TaskDetails } from "@/components/task-details";

export type ListProps = {
  title: string;
  tasks: TaskProps[];
  onListUpdate: (list: ListProps) => void;
  id: string;
};
export function List(props: ListProps) {
  const { title, tasks, onListUpdate, id } = props;
  const [mode, setMode] = useState<"view" | "add">("view");
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [focusedTaskId, setFocusedTaskId] = useState<string | null>(null);
  const focusedTask = tasks.find((t) => t.id === focusedTaskId);

  const addTask = () => {
    if (!newTaskTitle) return;
    tasks.push({
      title: newTaskTitle,
      id: Math.random().toString().substring(2),
    });
    setNewTaskTitle("");
    setMode("view");
  };

  const openTask = (task: TaskProps) => {
    setFocusedTaskId(task.id);
  };
  const closeTask = () => {
    setFocusedTaskId(null);
  };
  const updateTask = (task: TaskProps) => {
    const newTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      }
      return t;
    });
    onListUpdate({ ...props, tasks: newTasks });
  };
  const deleteTask = (task: TaskProps) => {
    const newTasks = tasks.filter((t) => t.id !== task.id);
    onListUpdate({ ...props, tasks: newTasks });
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{ backgroundColor: "#ebecf0", borderRadius: 0.75 }}
      width={"100%"}
    >
      {focusedTask && (
        <TaskDetails
          onClose={closeTask}
          onTaskUpdate={updateTask}
          onTaskDelete={deleteTask}
          task={focusedTask}
          list={{ title }}
        />
      )}

      <Box
        display={"flex"}
        flex={1}
        flexDirection={"row"}
        justifyContent={"space-between"}
        padding={"10px 8px"}
        position={"relative"}
      >
        <Typography variant="subtitle2" sx={{ padding: "0px 8px" }}>
          {title}
        </Typography>
        <IconButton
          title="Supprimer cette liste"
          size="small"
          sx={{ position: "absolute", top: "6px", right: "8px" }}
        >
          <IconMoreHoriz />
        </IconButton>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        padding={"0px 8px"}
        gap={1}
      >
        {tasks.map((task) => (
          <Task key={task.id} {...task} onClick={() => openTask(task)} />
        ))}
      </Box>
      <Box padding={"8px"} display={"flex"}>
        {mode == "view" && (
          <Button
            size="medium"
            color="secondary"
            sx={{
              padding: "1px 12px",
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            onClick={() => setMode("add")}
          >
            <IconPlus style={{ marginTop: "1px" }} />
            <span style={{ marginTop: "2px" }}>
              Ajouter une {tasks.length == 0 ? "" : "autre"} carte
            </span>
          </Button>
        )}
        {mode == "add" && (
          <Box display={"flex"} flexDirection={"column"} gap={1} flex={1}>
            <textarea
              autoFocus
              style={{
                appearance: "none",
                borderWidth: "0",
                borderRadius: "3px",
                boxShadow: "rgba(9, 30, 66, 0.25) 0px 1px 0px",
                fontSize: "14px",
                minHeight: "72px",
                padding: "8px",
                paddingBottom: "0px",
                width: "100%",
              }}
              placeholder="Saisissez un titre pour cette carte…"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
            ></textarea>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={0.75}
            >
              <Button
                color="success"
                variant="contained"
                size="small"
                onClick={addTask}
              >
                Ajouter une carte
              </Button>
              <IconCross onClick={() => setMode("view")} />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

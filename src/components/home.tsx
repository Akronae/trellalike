"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { List, ListProps } from "@/components/list";
import { clone } from "@/utils/clone";
import { AddListBtn } from "@/components/add-list-btn";
import { setItem } from "@/utils/local-storage/set-item";
import { getItem } from "@/utils/local-storage/get-item";

export type HomeProps = {};
export function Home(props: HomeProps) {
  const original = [
    {
      id: "1",
      title: "My first list",
      tasks: [
        { id: "1", title: "My first card" },
        { id: "2", title: "My second card" },
        { id: "3", title: "Followed card", followed: true },
      ],
    },
    {
      id: "2",
      title: "My second list",
      tasks: [
        {
          id: "4",
          title: "Followed card with description",
          followed: true,
          content: "My first description",
        },
      ],
    },
  ];
  let [data, setData] = React.useState<typeof original>(
    getItem("data") || original
  );

  React.useEffect(() => {
    setItem("data", JSON.stringify(data));
  }, [data]);

  const reset = () => {
    setData(clone(original));
  };

  const onListUpdate = (list: ListProps) => {
    const newList = data.map((l) => {
      if (l.id === list.id) {
        return list;
      }
      return l;
    });
    setData(newList);
  };

  const addList = (title: string) => {
    const newList = {
      id: Math.random().toString().substring(2),
      title,
      tasks: [],
    };
    setData([...data, newList]);
  };

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box padding={1} flexDirection={"row"} display={"flex"} gap={2.5}>
        <Typography variant="h5" color={"primary.contrastText"}>
          Tableau principal
        </Typography>
        <Button
          color="success"
          variant="contained"
          size="small"
          onClick={reset}
        >
          Initialiser le jeu de données
        </Button>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"flex-start"}
        gap={"8px"}
        paddingLeft={1}
      >
        {data.map((list) => (
          <Box width={"272px"} key={list.id}>
            <List
              id={list.id}
              title={list.title}
              tasks={list.tasks}
              onListUpdate={onListUpdate}
            />
          </Box>
        ))}
        <Box width={"272px"}>
          <AddListBtn onAdd={addList} />
        </Box>
      </Box>
    </Box>
  );
}

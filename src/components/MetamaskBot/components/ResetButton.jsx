/* eslint-disable react/prop-types */
import React from "react";
import { Button, Tooltip } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";

export const ResetButton = (props) => {
  const { onClick, disabled } = props;

  return (
    <Tooltip title="Reset chat" placement="bottom">
      <Button
        color="secondary"
        variant={"contained"}
        sx={{
          borderRadius: "20px",
          minWidth: "40px",
          width: "40px",
          height: "40px",
          position: "absolute",
          right: "1rem",
          top: "1rem",
          color: "white",
        }}
        onClick={onClick}
        disabled={disabled}
      >
        <ReplayIcon />
      </Button>
    </Tooltip>
  );
};
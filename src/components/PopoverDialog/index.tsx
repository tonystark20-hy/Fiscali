import React from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  popoverContent: {
    padding: theme.spacing(2),
  },
}));

interface PopoverDialogProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}

const PopoverDialog: React.FC<PopoverDialogProps> = ({
  anchorEl,
  handleClose,
}) => {
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <div className={classes.popoverContent}>
        <Typography variant="h6">How are you?</Typography>
        <Typography>I am Good, Hope the same for you!</Typography>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </div>
    </Popover>
  );
};

export default PopoverDialog;

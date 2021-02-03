import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import React from "react";

const DialogDeleteBoard = ({ open, handleClose, handleDeletBoard }) => {
  return (
    <Dialog open={open} keepMounted onClose={handleClose}>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          if you delete it you will never be return, click on remove to remove
          it for ever or click on cancel to close this window
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDeletBoard} color="secondary">
          Remove
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogDeleteBoard;

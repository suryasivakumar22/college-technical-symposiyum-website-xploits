import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { motion } from "framer-motion";
import { TransitionProps } from "@mui/material/transitions";
import { slideInFromLeft } from "@/utils/motion";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <motion.a
        variants={slideInFromLeft(1)}
        href="http://tinyurl.com/xploits24"
        className="p-3 button-primary text-center text-white cursor-pointer rounded-lg max-w-[400px] mx-3 mt-10"
      >
        Register
      </motion.a>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdtdxgclUq1TzbMIDi4EeG0xGucFManUtlrkOJl7s51xCJkGw/viewform?embedded=true"
          width="670"
          height="4035"
        >
          Loading…
        </iframe>
      </Dialog>
    </React.Fragment>
  );
}

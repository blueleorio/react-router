import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: 600 },
  bgcolor: "background.paper",
  borderRadius: 2,
  border: "none",
};

function JobDetailModal({ open, job, onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card
            sx={{
              border: "none",
              boxShadow: 0,
              backgroundColor: (theme) => theme.palette.primary.light,
              color: (theme) => theme.palette.common.white,
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                {job?.title}
              </Typography>

              <Box>
                {job.skills && Array.isArray(job.skills)
                  ? job.skills
                      .slice(0, 4)
                      .map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          color="error"
                          size="small"
                          sx={{ margin: "4px" }}
                        />
                      ))
                  : null}
              </Box>
              <Typography>{job?.description}</Typography>
              <Typography variant="h6" component="div">
                City: {job?.city}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}

export default JobDetailModal;

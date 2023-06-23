import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CampaignIcon from "@mui/icons-material/Campaign";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "5%",
  left: "89%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 10,
  p: 4,
  height: 700,
};

const drawerWidth = 45;

const SidebarItems = [
  {
    label: "Announcements",
    icon: <CampaignIcon />,
    content: "Data Not Found.",
  },
  {
    label: "Status",
    icon: <CheckCircleIcon />,
    content: "Data Not Found.",
  },
];

export default function PermanentDrawer() {
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleOpen = (index) => {
    setOpen(true);
    setActiveIndex(index);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            mr: `${drawerWidth}px`,
          }}
        ></AppBar>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
        </Box>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="right"
        >
          <Toolbar />
          <Divider />
          <List sx={{ backgroundColor: "rgb(52,152,219)", height: "100vh" }}>
            {SidebarItems.map((item, index) => (
              <ListItemButton
                key={item.label}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  onClick={() => handleOpen(index)}
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: "white",
                    textDecoration: "none",
                  }}
                />
              </ListItemButton>
            ))}
          </List>
          <Divider />
        </Drawer>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h6 style={{ color: "orange" }}>
              {SidebarItems[activeIndex].label}
            </h6>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {SidebarItems[activeIndex].content}
          </Typography>
          <CloseIcon
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              cursor: "pointer",
              color: "#000",
            }}
            onClick={handleClose}
          />
        </Box>
      </Modal>
    </>
  );
}

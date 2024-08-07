import {
  List,
  Button,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material/";

import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
let Header = () => {
  return (
    <header>
      <Typography variant="h3" component={"h1"}>
        D
      </Typography>
      <List id="nav-link-list">
        <ListItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Likes" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem>
          <Button>Create Post</Button>
        </ListItem>
      </List>
      <List id="profile-link-list">
        <ListItem>
          <Button variant="outlined">Log In</Button>
        </ListItem>
        <ListItem>
          <Button variant="contained">Sign Up</Button>
        </ListItem>
      </List>
    </header>
  );
};

export default Header;

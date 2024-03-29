import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WatchIcon from '@material-ui/icons/Watch';


const drawerWidth = 260;

const MainDrawer = props => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List component="nav" aria-labelledby="nested-list-subheader">


          <ListItem button component={Link} to="/users">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
              <ListItemText primary="Users" />
          </ListItem>

          <ListItem button component={Link} to="/roles">
            <ListItemIcon>
              <StorefrontIcon />
            </ListItemIcon>
            <ListItemText primary="Roles" />
          </ListItem>

        </List>
      </Drawer>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar
}));

export default MainDrawer;

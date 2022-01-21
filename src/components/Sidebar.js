import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import {Route, BrowserRouter} from 'react-router-dom';
import companyLogo from '../Assets/logo2.svg';
import Home from '../Pages/Home';
import product from '../Pages/Products';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:'white',
  },
  photo: {
    height: "170px",
    width: "220px"
    },
  appBar: {
    background: 'linear-gradient(90deg, rgba(255,255,255,1) 7%, rgba(255,255,255,1) 100%);',
    color:'White',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  hide: {
    display: 'none', 
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    color:"Black",
    background: 'rgba(255,255,255,1)',
    
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    
  },
}));

export default function PersistentDrawerLeft() {

  let history = useHistory();

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  
  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  const login = () => {
    history.push('/login');
  };
  
  let button;
    if (localStorage.getItem('token')) {
      button = <Button variant="contained" color="secondary" edge="last"  onClick={logout}>Logout</Button>;
    } else {
      button = <Button variant="contained" color="secondary" edge="last"  onClick={login}>Login</Button>;
    }

    
  const itemsList = [
    {
      text: "HOME",
      icon: <HomeIcon />,
      onClick:() => history.push('/')
    },
    {
      text: "PRODUCT",
      icon: <ShoppingBasketOutlinedIcon />,
      onClick: () => history.push('/product')
    },
    {
      text: "MEETINGS",
      icon: <MeetingRoomOutlinedIcon />,
      onClick:() => history.push('/Meeting')
    },
    {
        text: "DESIGNS",
        icon: <CreateOutlinedIcon />,
        onClick: () => history.push('/getDesign')
    },{
        text: "ABOUT",
        icon: <InfoOutlinedIcon color="secondary"/>,
        onClick: () => <Route exact path = "/" component = {Home}/>
    },
    {
        text: "ORDERS",
        icon: <ListAltOutlinedIcon />,
        onClick: () => <Route exact path = "/" component = {Home}/>
    }
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
        <Box display='flex' flexGrow={1}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <img src={companyLogo} alt="313 UNICON BRICKS" className={classes.photo} />
        </Box>
          <Typography variant="h5" className={classes.title}>
          
        </Typography>
        {button} 
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>

      </Drawer>
    </div>
  );
}
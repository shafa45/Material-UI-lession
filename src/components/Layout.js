import { AppBar, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import {format}   from 'date-fns'

const drawerWidth = 240;
const useStyle = makeStyles((theme)=>{
    return({
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding:theme.spacing(3)
          },
          drawer: {
            width: drawerWidth,
          },
          drawerPaper: {
            width: drawerWidth,
          },
          root: {
            display: 'flex',
          },
          active:{
              background:'lightBlue'
          },
          title:{
                padding:theme.spacing(2)
          },
          appbar:{
            width:`calc(100% - ${drawerWidth}px)`
          },
          toolbar: theme.mixins.toolbar,
          date:{
            flexGrow:'1'
          },
          avatar:{
            margin:theme.spacing(2)
          }
    })
  
});

export default function Layout({ children }) {
  const classes = useStyle();
  const history=useHistory()
  const location=useLocation()
  const menuItem=[
      {text:'My Notes', path:"/",icon:<SubjectOutlined color='secondary'/>},
      {text:'Create Notes', path:"/create",icon:<AddCircleOutlineOutlined color='secondary'/>}
  ]
  return (
    <div className={classes.root}>
      {/* Appbar */}
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.date}>
           Today is  {format(new Date(),'do MMMM Y')}
          </Typography>
          <Typography>
            Mario
          </Typography>
          <Avatar className={classes.avatar} src='/mario-av.png'/>
        </Toolbar>
      </AppBar>
      {/* SideDrawer */}
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant='h5'className={classes.title}>Ninja Notes</Typography>
        </div>

        {/* Links list item */}
        <List>
        {menuItem.map(item =>(
            <ListItem
            className={location.pathname===item.path ? classes.active : null}
             button key={item.name} onClick={()=>history.push(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text}/>
            </ListItem>
        ))}
            
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
        </div>
    </div>
  );
}

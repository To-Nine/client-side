import { mainListItems, secondaryListItems } from '../ListItems/index';
import Chart from '../Chart/index';
import Deposits from '../Deposits/index';
import Orders from '../Order/index';
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { color } from '@mui/system';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Card } from '@mui/material';
import RecipeReviewCard from '../Card';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    


    '& .MuiDrawer-paper': {
      display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    border:'none',
    marginLeft:'3%'
      // position: 'relative',
      // whiteSpace: 'nowrap',
      // width: drawerWidth,
      // transition: theme.transitions.create('width', {
      //   easing: theme.transitions.easing.sharp,
      //   duration: theme.transitions.duration.enteringScreen,
      // }),
      // boxSizing: 'border-box',
      // ...(!open && {
      //   overflowX: 'hidden',
      //   transition: theme.transitions.create('width', {
      //     easing: theme.transitions.easing.sharp,
      //     duration: theme.transitions.duration.leavingScreen,
      //   }),
      //   width: theme.spacing(7),
      //   [theme.breakpoints.up('sm')]: {
      //     width: theme.spacing(9),
      //   },
      // }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex', maxHeight:'80vh'}}>
        <CssBaseline />
        <AppBar  open={open} sx={{height:'8vh', backgroundColor:'#00929B'}}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            {/* <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              To task
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} >
          {/* <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            {/* <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton> */}
          {/* </Toolbar> */}
          {/* <Divider /> */}
          <div style={{border:'1px solid black', borderRadius:'12px', backgroundColor:'#056E75'}}>
          <List component="nav"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            alignContent:'center',
            justifyItems:'center',
            gap:'30',
          }
          }
          >
            {mainListItems}
            {/* <Divider sx={{ my: 1 }} />
            {secondaryListItems} */}
          </List>
          </div>
        </Drawer>
        <Box
          component="main"
          sx={{
            // backgroundColor: (theme) =>
            //   theme.palette.mode === 'light'
            //     ? theme.palette.grey[100]
            //     : theme.palette.grey[900],

            flexGrow: 1,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={7}>
            <Grid item  md={4} ><Divider sx={{
                    backgroundColor:'green'
                  }}/><Paper
                 sx={{
                  padding:'3%',
                  display: 'flex',
                  maxHeight: 50,
                  maxWidth: 350,
                  justifyContent:'space-between'
                }}
                >
                  <div style={{marginLeft:'3%',display:'flex', justifyContent:'flex-start'}}>
                  Tarefa

                  </div>
                  <div style={{display:'flex', alignItems:'center', marginRight:'2%'}}>
                 <ControlPointIcon/>
                  
                  </div>
                </Paper></Grid>
                <Grid item  md={4} >
                <Divider sx={{
                    backgroundColor:'red'
                  }}/><Paper
                  sx={{
                    padding:'3%',
                    display: 'flex',
                    maxHeight: 50,
                    maxWidth: 350,
                    justifyContent:'space-between'
                  }}
                >
                  
                   <div style={{marginLeft:'3%',display:'flex', justifyContent:'flex-start'}}>
                  Lembrete

                  </div>
                  <div style={{display:'flex', alignItems:'center', marginRight:'2%'}}>
                 <ControlPointIcon/>
                  
                  </div>
                </Paper></Grid>
                <Grid item  md={4} ><Divider sx={{
                    backgroundColor:'purple'
                  }}/><Paper
                  sx={{
                    padding:'3%',
                    display: 'flex',
                    maxHeight: 50,
                    maxWidth: 350,
                    justifyContent:'space-between'
                  }}
                >
                  <div style={{marginLeft:'3%',display:'flex', justifyContent:'flex-start'}}>
                  Evento

                  </div>
                  <div style={{display:'flex', alignItems:'center', marginRight:'2%'}}>
                 <ControlPointIcon/>
                  
                  </div>
                </Paper></Grid>
              <Grid item  md={4} >
                <Paper
                  sx={{
                    
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: 240,
                    minWidth: 350
                  }}
                >
                  {/* <Chart /> */}
                  <RecipeReviewCard/>
                  <RecipeReviewCard/>
                  <RecipeReviewCard/>
                </Paper>
              </Grid>
              <Grid item md={4} >
                <Paper
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: 240,
                    minWidth: 350
                  }}
                >
                  <RecipeReviewCard/>
                  <RecipeReviewCard/>
                  <RecipeReviewCard/>
                  <RecipeReviewCard/>
                  <RecipeReviewCard/>
                  <RecipeReviewCard/>
                  <RecipeReviewCard/>
                  {/* <Deposits /> */}
                </Paper>
              </Grid>
              <Grid item md={4}>
                <Paper 
                sx={{display: 'flex', flexDirection: 'column', minHeight: 240, minWidth: 350 }}
                >
                  {/* <Orders /> */}
                  <RecipeReviewCard/>
                  <RecipeReviewCard/>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
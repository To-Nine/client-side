import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import Dashboard from '../Home';

export const mainListItems = (
  <React.Fragment>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6vh' }}>

      <ListItemButton>
      <Tooltip title='Visão Geral'>
          <DashboardIcon />
        </Tooltip>
        <ListItemText  />
      </ListItemButton>

      <ListItemButton>
      <Tooltip title='2'>
          <BarChartIcon />
        </Tooltip>
        <ListItemText />
      </ListItemButton>

      <ListItemButton>
      <Tooltip title='3'>
          <LayersIcon />
        </Tooltip>
        <ListItemText />
      </ListItemButton>

      <ListItemButton>
      <Tooltip title='4'>
          <PeopleIcon />
        </Tooltip>
        <ListItemText />
      </ListItemButton>

      <ListItemButton>
      <Tooltip title='5'>
          <ShoppingCartIcon />
        </Tooltip>
        <ListItemText />
      </ListItemButton>

      <ListItemButton>
        <Tooltip title='Sair'>
          <LogoutIcon />
        </Tooltip>
        <ListItemText />
      </ListItemButton>

    </div>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
    </ListSubheader>

    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText />
    </ListItemButton>

  </React.Fragment>
);
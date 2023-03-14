import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ButtonGroup, FormControl, Grid, InputLabel, MenuItem, Select, ToggleButton, ToggleButtonGroup } from '@mui/material';

export default function FormDialog(props: any) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {props.icon}
      </Button>
      <Dialog open={open} onClose={handleClose}>
      <Grid item md={12} sx={{padding:'2%'}} >
      <ToggleButtonGroup
  color="primary"
  value={""}
  exclusive
  onChange={undefined}
  aria-label="Platform"
  sx={{display:'flex', padding:'1%',justifyContent:'center', alignItems:'center'}}

>
  <ToggleButton value="web">Web</ToggleButton>
  <ToggleButton value="android">Android</ToggleButton>
  <ToggleButton value="ios">iOS</ToggleButton>
</ToggleButtonGroup>
      </Grid>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
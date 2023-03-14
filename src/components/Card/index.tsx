import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import { CardProps } from './type';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props: CardProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const DinamicAvatar= () => {
    if (props.type ==='evento') {return (<Avatar sx={{ bgcolor: 'purple' }} aria-label="recipe">
    <CalendarMonthOutlinedIcon/>
  </Avatar>)}
    if (props.type === 'lembrete') {return (<Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
    <NotificationsActiveOutlinedIcon/>
  </Avatar>)}
    if (props.type === 'tarefa') {return (<Avatar sx={{ bgcolor: 'green' }} aria-label="recipe">
    <ContentPasteOutlinedIcon/>
  </Avatar>)}
    return (<></>)
  }
  return (
    <div style={{margin: '10%'}}>
    <Card sx={{ maxWidth: 345}}>
      <CardHeader
        avatar={
          // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          //   <ContentPasteOutlinedIcon/>
          // </Avatar>
          <DinamicAvatar/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        // subheader="nomzykush@gmail.com"
      />
      {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
            Esse vai ser a descrição
        </Typography>
      </CardContent> */}
      
       {props.description === "" || props.description === undefined || props.description === null ? <></> :
       <>
       <CardActions disableSpacing>
       <ExpandMore
         expand={expanded}
         onClick={handleExpandClick}
         aria-expanded={expanded}
         aria-label="show more"
       >
         <ExpandMoreIcon />
       </ExpandMore>
     </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <Typography paragraph>Chevrolet Description</Typography> */}
          <Typography paragraph>
                {props.description}
          </Typography>
          {/* <Typography paragraph>
          It is currently the fourth-largest automotive brand in the United States and is a division of General Motors. Chevrolet has become one of America’s most iconic brands, producing reliable and stylish cars, trucks, and SUVs for over a century. Its models range from the economical Spark to the luxurious Corvette.
          </Typography>
          <Typography paragraph>
          Chevrolet is also known for its commitment to safety, providing advanced features like lane departure warning and front crash prevention. (Discard any mussels that don&apos;t open.)
          </Typography> */}
        </CardContent>
      </Collapse>
      </>
}
    </Card>
    </div>
  );
}
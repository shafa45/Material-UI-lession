import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { DeleteOutlined } from '@material-ui/icons';
import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core';
import { blue, green, pink, yellow } from '@material-ui/core/colors';

const useStyles=makeStyles({
//     test: {
//       border: (note)=>{
//       if(note.category==='work'){
//         return '2px solid red'
//       }
//   }
// }
avatar:{
  backgroundColor:(note)=>{
    if(note.category=='work')
      return yellow[700]

    if(note.category=='todos')
      return green[500]

    if(note.category=='money')
      return pink[500]

    else
    return blue[500]
  }
}

})


const NoteCard = ({note,handleDelete}) => {
  const classes=useStyles(note)
    return (<div>
        <Card elevation={1} className={classes.test}>
          
        <CardHeader title={note.title}
        avatar={
          <Avatar className={classes.avatar}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        subheader={note.category}
        action={
          <IconButton onClick={()=>handleDelete(note.id)}>
           <DeleteOutlined/>
          </IconButton>
        } />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {note.details}
          </Typography>
        </CardContent>
        </Card>
    </div> 
     );
}
 
export default NoteCard;
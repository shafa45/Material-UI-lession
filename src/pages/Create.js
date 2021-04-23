import React, { useState } from 'react'
import {Typography,Button,ButtonGroup,makeStyles,TextField,Container,Radio,RadioGroup,FormControlLabel,FormLabel,FormControl} from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import SendIcon from '@material-ui/icons/Send';
import { useHistory } from 'react-router';

const useStyle=makeStyles({
  btn:{
    fontSize:60,
    backgroundColor:'violet',
    '&:hover':{
      backgroundColor:'blue'
    }
  },
  title:{
    textDecoration:"underline",
    marginBottom:"20px"
  },
  field:{
      marginTop:'20px',
      marginBottom:'20px',
      display:'block'
  }
})


export default function Create() {
  const classes=useStyle()

  const history=useHistory()

  const [title,setTitle]=useState('')
  const [details,setDetails]=useState('')
  const [titleError,setTitleError]=useState(false)
  const [detailsError,setDetailsError]=useState(false)
  const [category,setCategory]=useState('todo')

  const handleSubmit=(e)=>{
    e.preventDefault()

    setTitleError(false)
    setDetailsError(false)

    if(title==='')
    setTitleError(true)
    if(details==='')
    setDetailsError(true)

    if(title && details){
      // console.log(title,details,category)
      fetch('http://localhost:8000/notes',{
        method:"POST",
        headers:{"Content-Type":'application/json'},
        body:JSON.stringify({title,details,category})
      }).then(()=>
      history.push('/'))
    }
  }
  return (
    <Container>
      <Typography 
      className={classes.title}
      variant='h6' 
      component='h2' 
      color='textSecondary' 
      gutterBottom>

      Create a New Note
      </Typography>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField 
        className={classes.field}
        variant='outlined'
        label='Note Title'
        required
        fullWidth
        onChange={(e)=>setTitle(e.target.value)}
        error={titleError}
        />
        <TextField 
        className={classes.field}
        variant='outlined'
        label='Details'
        multiline
        rows='5'
        required
        fullWidth
        onChange={(e)=>setDetails(e.target.value)}
        error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>
            Note Category
          </FormLabel>
          <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>
            <FormControlLabel value='money' control={<Radio/>} label='Money' />
            <FormControlLabel value='todo' control={<Radio/>} label='Todo' />
            <FormControlLabel value='reminders' control={<Radio/>} label='Reminders' />
            <FormControlLabel value='work' control={<Radio/>} label='Work' />
          </RadioGroup>
        </FormControl>

      <Button 
        // className={classes.btn}
         type='submit'
          variant='contained' color='primary'
          // onClick={()=> console.log("you clicked me")}
          // startIcon={<SendIcon/>}
          endIcon={<KeyboardArrowRightIcon/>}
          >Submit</Button>
      </form>
       
      {/* <Button type='submit'>Submit</Button>
      <Button variant='outlined' color='secondary'>Hello</Button>
      <Button variant='outlined' color='secondary' disabled>Hello</Button>
      <ButtonGroup variant='contained' color='secondary' >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
      <br/>
      {/* <AcUnitIcon color='secondary'/>
      <AcUnitIcon color='secondary' fontSize='large'/>
      <AcUnitIcon color='secondary' fontSize='small'/>
      <AcUnitIcon color='primary'/>
      <AcUnitIcon color='action'/>
      <AcUnitIcon color='error'/>
      <AcUnitIcon color='disabled'/> */}

    </Container>
  )
}



import React, {useState, useEffect} from 'react'
import APIService from '../APIService';
import {useHistory} from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Prod6 from '.././Assets/12red.jpeg'
const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      backgroundColor:'white'
    },
    image: {
      backgroundImage: 'url(https://images.adsttc.com/media/images/5368/32c5/c07a/80b5/c500/002b/large_jpg/student-centre-4.jpg?1399337644)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      filter: 'brightness(90%)',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      background: 'linear-gradient(90deg, rgba(75,108,183,1) 7%, rgba(24,40,72,1) 100%);',
      height:'3.5rem',
      border:'none',
      outline:'none',
      fontSize:'1.2rem',
      color:'white'
    },
  }));

export default function Login() {

    const classes = useStyles();

    const [username, setUsername] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setLogin] = useState(true)
    let history = useHistory()


    useEffect(() => {
        if(localStorage.getItem('token')) {
            history.push('/users')
        }
    }, [])

    const loginBtn = (e) => {
      {    
           e.preventDefault();
           APIService.LoginUser({username,password})
           .then(resp => {
             console.log(resp.data);
                   if(typeof(resp.token) != "undefined"){
                       localStorage.setItem('token',resp.token);
                       localStorage.setItem('id',resp.user.id);
                       localStorage.setItem('username',resp.user.username);
                       localStorage.setItem('email',resp.user.email);
                       localStorage.setItem('first_name',resp.user.first_name);
                       history.push('/')
                     }
               })
           .catch(error => console.log(error))
       }
   }

    const RegisterBtn = async (e) => {
       e.preventDefault();
       const data = await fetch(`http://127.0.0.1:8000/api/users/`,{
              'method':'POST',
              headers: {
                  'Content-Type':'application/json',
                },body:JSON.stringify({username,password,email, first_name, last_name})});
            const heroDetails = await data.json();
            if(data.statusText == 'Created'){
              history.push('/')
          }
    }

        return (
          <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={8} className={classes.image} />
            <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h4">
                  SIGN UP
                </Typography>
                <form className={classes.form} onSubmit={RegisterBtn}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    autoComplete="name"
                    placeholder="USERNAME"
                    autoFocus
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    autoComplete="name"
                    placeholder="FIRST NAME"
                    autoFocus
                    onChange={e => setFirst_name(e.target.value)}
                    value={first_name}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    autoComplete="name"
                    placeholder="LAST NAME"
                    autoFocus
                    onChange={e => setLast_name(e.target.value)}
                    value={last_name}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    autoComplete="email"
                    placeholder="John@mail.com"
                    autoFocus
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    placeholder="Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    placeholder="Confirm Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                  >
                    Sign In
                  </Button>
                </form>
              </div>
            </Grid>
          </Grid>
    );
}
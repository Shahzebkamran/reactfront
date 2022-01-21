

import React, {useState, useEffect} from 'react'
import APIService from '../APIService';
import {useHistory} from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Prod1 from '.././Assets/Prod1.jpg'
import Prod12 from '.././Assets/Prod12.jpeg'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarRateIcon from '@material-ui/icons/StarRate';
import StarIcon from '@material-ui/icons/Star';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { CardActions, Container, Icon } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      backgroundColor:'white'
    },
    image: {
    backgroundImage: 'url('+ Prod1 +')',
      backgroundRepeat: 'no-repeat',
      filter: 'brightness(100%)',
      backgroundPosition: 'left',
    },
    paper: {
      margin: theme.spacing(18, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'Left',
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
    captions:{
        fontSize:'16px',
        color:'Grey'
    },card: {
        maxWidth: 350,
        margin: "auto",
      },
      media: {
        paddingTop: "56.25%",
        marginTop:130,
        height:400,
      },
      content: {
        textAlign: "left",
        padding: theme.spacing(3),
      },
      divider: {
        margin: theme.spacing(0),
      },
      heading: {
        fontWeight: "bold",
        color:'Black'
      },
      subheading: {
        lineHeight: 1,
        textAlign: 'justify',
        color:'Grey'
      },
      avatar: {
        display: "inline-block",
        border: "2px solid white",
        "&:not(:first-of-type)": {
          marginLeft: theme.spacing(3),
        }
      },
      Icons:{
        flexDirection:'Row',
        marginLeft:0,
      },
      CardActions:{
      display:"flex",
      margin:"0 0px",
      justifyContent:"space-between",
      },
      ProdImage:{
          width:420,
          height:350,
          marginTop:'15%',
          padding:20,
          borderRadius: "7%"
      }
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
    const price = 500

    useEffect(() => {
        if(localStorage.getItem('token')) {
            history.push('/users')
        }
    }, [])

    const loginBtn = (event) => {
       {
            APIService.LoginUser(username, password)
            .then(resp => {
                    alert(resp.token); 
                    if(typeof(resp.token) != "undefined"){
                        alert(resp.token)
                        localStorage.setItem('token',resp.token);
                        history.push('/users');
                    }
                })
            .catch(error => console.log(error))
        }
    }


        return (
          <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={8} >
            <img src={Prod1} className={classes.ProdImage}/>
            <img src={Prod12} className={classes.ProdImage} />
            </Grid>
            <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
              <div className={classes.paper}>
                <Typography variant="h4">
                Tuscany ‘Venice’ 50mm
                </Typography>
                <Typography variant="h6">
                Price : RS {[price]}
                <br/>
                <IconButton className={classes.Icon}>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarBorderIcon/>
                </IconButton>
                <span className={classes.captions}>
                    8 reviews
                </span>
                </Typography>
                <form className={classes.form} onSubmit={()=> loginBtn()}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    autoComplete="email"
                    placeholder="1000"
                    autoFocus
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                  >
                      CHECK OUT
                  </Button>
                </form>
              </div>
            </Grid>
          </Grid>
    );
}

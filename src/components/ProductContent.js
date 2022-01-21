import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import cover from '.././Assets/productCover.jpg'
import { CardActions, Container, Icon } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Prod1 from '.././Assets/Prod1.jpg'
import Prod2 from '.././Assets/Prod2.jpg'
import Prod3 from '.././Assets/Prod3.jpg'
import Prod4 from '.././Assets/Prod4.jpg'
import Prod5 from '.././Assets/Prod5.jpg'
import Prod6 from '.././Assets/Prod6.jpg'
import { ArrowForward } from '@material-ui/icons';
import products from './product.json';
import { Button } from 'bootstrap';


const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      backgroundColor:'white'
    },
    image: {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      filter: 'brightness(100%)',
      width:'100%',
      height:'760px',
      display:'block',
      backgroundPosition: 'center',
      paddingBottom:'0px',position: 'relative'
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    box:{
      backgroundImage: ".././Assets/productCover.jpg",
      backgroundColor:'Black',
      color:'White'
    },
    right:{
      width:'50%',
      backgroundImage: 'url({bg})',
      color:'White'
    },
    projectContainer:{
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
    productContainer:{
      backgroundImage:'.././Assets/cover2.jpg',
      paddingTop: theme.spacing(3),
      // background:'linear-gradient(90deg, rgba(75,108,183,1) 7%, rgba(24,40,72,1) 100%);',
      color:'Black'
    },
    ProductTitle:{
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3),
       fontWeight:200,

    },card: {
      maxWidth: 350,
      backgroundColor:'rgba(120,140,40,0.1)',
      margin: "auto",
      transition: "0.1s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.5)"
      }
    },
    media: {
      paddingTop: "56.25%"
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
    },
    CardActions:{
    display:"flex",
    margin:"0 0px",
    justifyContent:"space-between",
    },
    cardArchitects:{
      maxWidth: 350,
      margin: "auto",
      transition: "0.1s",
      //boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      //"&:hover": {
     //   boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.5)"
      //},
      background:'linear-gradient(90deg, rgba(95,108,183,1) 100%, rgba(24,40,72,1) 100%);',
      color:'White',
      border:"2",
    },mediaArchitects:{
      paddingTop: "56.25%",
      width: "400", height: "400", borderRadius: "50%",roundedSize:"8%"
    },
    RoundImage:{
      margin:"auto"
      ,padding: "7%"
    },textImage:{color: 'white', 
      font: 'bold 24px/45px Helvetica, Sans-Serif' ,
      letterSpacing: '-1px',  
      background:'rgb(0, 0, 0)',
      background: 'rgba(0, 0, 0, 0.4)',
      padding: '10px' },
      ty:{
        position: 'absolute',
        top: '300px', 
        left: '0' ,
        width: '100%'
      },
  }));

function Content() {
    const classes = useStyles();
    
    return (
      <>
        <Box className={classes.image}>
          <img src={cover}  alt="UNICON BRICKS" className={classes.image} />
          {/* <Typography variant="h1" className={classes.ty}><span className={classes.textImage}>UNICON BRICKS</span></Typography> */}
        </Box>
        <Container maxWidth="lg" className={classes.projectContainer}>
        <Typography variant="h3" className={classes.ProductTitle}>
          PRODUCTS
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={Prod1}
              />
              <CardContent className={classes.content}>
                <Typography className={classes.heading} variant={"h6"} gutterBottom>
                Tuscany ‘Venice’ 50mm
                </Typography>
                <Typography className={classes.subheading} variant={"h9"}>
                Light, creamy texture in a slimmer 50mm profile
                </Typography>
                <CardActions className={classes.CardActions}>
                <IconButton aria-label="share" className="Icons">
                  <ArrowForward />
                </IconButton>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={Prod2}
              />
              <CardContent className={classes.content}>
                <Typography className={classes.heading} variant={"h6"} gutterBottom>
                Maclaren
                </Typography>
                <Typography className={classes.subheading} variant={"caption"}>
                Premium Recycled Design
                </Typography>
                <CardActions className={classes.CardActions}>
                <IconButton aria-label="share" className="Icons">
                  <ArrowForward />
                </IconButton>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={Prod3}
              />
              <CardContent className={classes.content}>
                <Typography className={classes.heading} variant={"h6"} gutterBottom>
                Siena
                </Typography>
                <Typography className={classes.subheading} variant={"caption"}>
                Burnt terracotta & auburn blend with Earthy textures
                </Typography>
                <CardActions className={classes.CardActions}>
                <IconButton aria-label="share" className="Icons">
                  <ArrowForward />
                </IconButton>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={Prod4}
              />
              <CardContent className={classes.content}>
                <Typography className={classes.heading} variant={"h6"} gutterBottom>
                Tuscany Block 162mm
                </Typography>
                <Typography className={classes.subheading} variant={"caption"}>
                Large format clay brick in Tuscany colour
                </Typography>
                <CardActions className={classes.CardActions}>
                <IconButton aria-label="share" className="Icons">
                  <ArrowForward />
                </IconButton>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={Prod5}
              />
              <CardContent className={classes.content}>
                <Typography className={classes.heading} variant={"h6"} gutterBottom>
                Light Cabernet
                </Typography>
                <Typography className={classes.subheading} variant={"caption"}>
                Red Re-Invented! Rich in colour and texture
                </Typography>
                <CardActions className={classes.CardActions}>
                <IconButton aria-label="share" className="Icons">
                  <ArrowForward />
                </IconButton>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={Prod6}
              />
              <CardContent className={classes.content}>
                <Typography className={classes.heading} variant={"h6"} gutterBottom>
                Coachhouse
                </Typography>
                <Typography className={classes.subheading} variant={"caption"}>
                A rich, dark blended brick with natural textures
                </Typography>
                <Divider className={classes.divider} light />
                <CardActions className={classes.CardActions}>
                <IconButton aria-label="share" className="Icons">
                  <ArrowForward />
                </IconButton>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </Container>
    </>
    )
}

export default Content

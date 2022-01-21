import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Arch2 from '.././Assets/Arch2.jpeg'


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
      backgroundImage: 'url(require(".././Assets/bg.jpg"))',
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
      background:'linear-gradient(90deg, rgba(75,108,183,1) 7%, rgba(24,40,72,1) 100%);',
      color:'Black'
    },
    ProductTitle:{
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3),
       fontWeight:200,

    },card: {
      maxWidth: 350,
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
      fontWeight: "bold"
    },
    subheading: {
      lineHeight: 1.8,
      textAlign: 'justify',
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
      background:'',
      color:'Black',
      border:"0",
    },mediaArchitects:{
      paddingTop: "56.25%",
      width: "400", height: "400", borderRadius: "0%",roundedSize:"0%"
    },
    RoundImage:{
      margin:"auto"
      ,padding: "7%"
    },textImage:{color: 'rgba(24,40,72,1)',
      letterSpacing: '-1px',  
      padding: '0px',margin:'0px' },
      ty:{
        position: 'absolute',
        top: '100px', 
        left: '0%' ,
        width: '100%',
        height:'100%',
        background: 'rgba(255, 255, 255, 0.3)',
      },
  }));

const ArchitectsCard = ({architectsData})=>{
    const classes = useStyles(); 
 return (
      <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.cardArchitects}>
        <CardMedia className={classes.card}>
        <CardMedia
            className={classes.media}
            image={Arch2}
          />
      </CardMedia>
          <CardContent className={classes.contentArchitects}>
            <Typography className={classes.heading} variant={"h6"} gutterBottom>
            {architectsData.first_name} {architectsData.last_name}
            </Typography>
            <Typography className={classes.subheading} variant={"caption"}>
            {architectsData.experience}
            {/* Working across multiple fashion platforms I am highly organised, self-motivated and experienced at operating in a pressurised, deadline-driven environment. I pride myself on being a team player and like to be fully submerged into all the stages of art direction and design, from concept to execution and feedback. */}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
 );
}
export default ArchitectsCard;
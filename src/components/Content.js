import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import cover from '.././Assets/cover4.jpg'
import { Container } from '@material-ui/core';
import ProductCards from './ProductCards';
import ArchitectsCard from './ArchitectsCard';
import ProjectsCards from './ProjectsCards';


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

function Content() {
    const [users, setUsers] = useState([]);
    const [projects,setProjects] = useState([]);
    const [products,setProducts] = useState([]);
    const getUsers = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/architects/");
        const FinalData = await response.json();
        setUsers(FinalData)
    }
    const getProjects = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/projects/");
      const FinalData = await response.json();
      setProjects(FinalData)
  }
  const getProducts = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/items/");
    const FinalData = await response.json();
    setProducts(FinalData)
}
    useEffect(() => {
        getUsers();
        getProjects();
        getProducts();
    }, [])
    
    const classes = useStyles(); 
    return (
      <>
        <Box className={classes.image}>
          <img src={cover}  alt="UNICON BRICKS" className={classes.image} />
          <Typography variant="h1" className={classes.ty}>
          <br/>
          <br/>
          <h1 className={classes.textImage}>
            UNITED
          </h1>
          <h7>WE BUILD</h7>
          <br/>
          </Typography>
        </Box>
        <Container maxWidth="lg" className={classes.projectContainer}>
        <Typography variant="h3" className={classes.ProductTitle}>
          PROJECTS
        </Typography>
        <Grid container spacing={3}>
        {projects.map((project,index) => (
            <ProjectsCards key={index} projectData={project} />
          )
          )}
        </Grid>
        </Container>
        <Container maxWidth="lg" className={classes.productContainer} >
        <Typography variant="h3" className={classes.ProductTitle}>
          ARCHITECTS
        </Typography>   
        <div>
        <Container maxWidth="lg" className={classes.productContainer} >
          <Grid container spacing={3}>      
          {users.map((user,index) => (
            <ArchitectsCard key={index} architectsData={user} />
          )
          )}
          </Grid>
          </Container>
        </div>
        </Container>
        <Container maxWidth="lg" className={classes.projectContainer}>
        <Typography variant="h3" className={classes.ProductTitle}>
          PRODUCTS
        </Typography>
        <Grid container spacing={3}>
        {products.map((product,index) => (
            <ProductCards key={index} productData={product} />
          )
          )}
        </Grid>
        </Container>
    </>
    )
}

export default Content

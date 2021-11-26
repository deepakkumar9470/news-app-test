import React,{useState,useEffect} from 'react'
import {Card,CardContent,Typography,Grid,Box,Paper,makeStyles ,CardActionArea,CardMedia} from '@material-ui/core';
import styles from './Cards.module.css';
import axios from 'axios'

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container : {
           margin : 15,
           height : 280,
           display : 'flex',
           flexDirection: 'column',
           alignItems : 'center',
           borderRadius : 5,
           '& > *'  : {
               padding : '0 0 5px 0' 
           }
    },
    card : {
      padding : '20px' 
    },
  
 
  });
  

const Cards = () => {
    const classes = useStyles();
    const [news,setNews] = useState([])
    const [country,setCountry] = useState('')

    const fetchAllNews = async () =>{
        try {
             
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=d1aad565c12d4144ad6ce0fcc8376a1b`)
            console.log(res) 
            setNews(res.data.articles)

        } catch (error) {
              console.log(error)
        }
     }

    useEffect(() => {
        fetchAllNews()

    }, [])

    const handleChange = (e) =>{
        setCountry(e.target.value)
        setNews(country)
    }

    const addEllipsis = (str,limit) =>{
        return str.length > limit ? str.substring(0, limit) + '...' : str;
       };

  return ( 
      <div className={classes.root}>
      <Box className={classes.container}>
         

            <select value={country} onChange={(e)=>handleChange(e)}>
            <option value="Orange">Orange</option>
                <option value="Radish">Radish</option>
                <option value="Cherry">Cherry</option>
            </select>

         <Grid container lg={12} sm={4} xs={3}>
         
        
        
          {news.length > 0 ? news?.map((n) => {
               
                    return (
                     <Grid item lg={3} sm={4} xs={12} className={classes.card}>
                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          component="img"
                          height="140"
                          image={n.urlToImage}
                          alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {n.source.name}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="div">
                          {n.author}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {addEllipsis(n.title,10)}
                          </Typography>
        
                          <Typography variant="body2" color="text.secondary">
                          {addEllipsis(n.description,50)}
                          </Typography>
                        </CardContent>
                        
                       </Card>
                 </Grid>
                    )
          }) : 'Loading..'}
           
           
           </Grid>  
    </Box>
    </div>
   
  )
}

export default Cards;
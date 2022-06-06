
import {Typography, AppBar, Card, CardActionArea, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, CardActions} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';
import UserComponent from './Pages/UserComponent';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const App = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline/>
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant='h6'>
                        BootCamp13 Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm" style={{ marginTop: '100px' }}>
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                        BootCamp13 
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                        Hello and welcome to the BootCamp13 talents site 
                        On this site you can get to know a little of our talents!
                        </Typography>
                        <UserComponent/>
                        <div className={classes.button}>
                            <Grid container spacing={2} justify="center">
                                    <Grid item>
                                    <Button variant='contained' color='primary'>
                                        see all talents
                                    </Button>                              
                                    </Grid>
                                    <Grid item>
                                    <Button variant='contained' color='primary'>
                                        create talent 
                                    </Button>
                                    </Grid>
                                    <Grid item>
                                    <Button variant='contained' color='primary'>
                                        select talent by id
                                    </Button>    
                                    </Grid>
                                    <Grid item>
                                    <Button variant='contained' color='primary'>
                                        delete talent 
                                    </Button>
                                    </Grid>
                                    <Grid item>
                                    <Button variant='contained' color='primary'>
                                        update talent 
                                    </Button>
                                    </Grid>                                 
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid}  maxWidth="md">
                    <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.CardMedia}
                            image="https://source.unsplash.com/random"
                            title="Image title"
                            />
                            <CardContent className={classes.CardContent}>
                                <Typography gutterBottom variant="h5">
                                    Headding
                                </Typography>
                                <Typography>
                                    this is a media card 
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">View</Button>
                                <Button size="small" color="primary">Edit</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}

                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                        <Typography  variant="subtitle1" align="center" color="textSecondary">
                            apply now to be our next talent!  <Button size="small" color="primary" onClick={()=>window.open("https://www.develeap.com/bootcamp-devops/", "_blank")}>Apply now</Button>
                        </Typography>
                         <Typography variant="subtitle1" align="center" gutterBottom >
                            @copyright develeap
                        </Typography>
            </footer>
            
        </>
    );

}

export default App;








// function Appfunc() {
//     return(
//         <Router>
//         <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="*" element={<ErrorPage />} />
//         </Routes>
//     </Router>
//     );
// }

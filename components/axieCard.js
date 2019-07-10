import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardActions } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    controls: {
        display: 'flex',
        alignItems: 'center'
    }
});

const AxieCard = props => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media} 
                    image={props.image}
                    title={props.title}
                />
                <CardContent>
                    {props.content}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default AxieCard;
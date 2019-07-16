import { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardActions, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
const axios = require('axios');

const axieApiUrl = 'https://axieinfinity.com/api/v2';

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

/**
 * @see https://pacxiu.github.io/AxieInfinityAPI/#single-axie
 * @param {string} id
 * @returns {Object}
 */
async function getAxieByID(id) {
    let {
        name,
        image
    } = await axios.get(`${axieApiUrl}/axies/${id}`).then(r => r.data)
    return {name, image};
}

class AxieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            image: null
        }
    }
    
    componentDidMount() {
        getAxieByID(this.props.axieId)
            .then(data => this.setState({
                name: data.name,
                image: data.image
            }));
    }

    render() {

        const {name, image} = this.state;

        if (!name || !image) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <h1>{name} - {this.props.axiePrice}</h1>
                <img style={{width: "300px"}} src={image} />
            </div>
        )
    }
}

// const AxieCard = props => {
//     const classes = useStyles();
//     return {
//         componentWillMount() {
//             getAxieByID(props.axieId)
//                 .then(result => {
//                     this.setState({
//                         name: result.name,
//                         image: result.image
//                     });
//                 });
//         },

//         render() {
//             return (
//                 <Card className={classes.card}>
//                     <CardActionArea>
//                         <CardMedia
//                             className={classes.media} 
//                             image={state.image}
//                             title={state.name}
//                         />
//                         <CardContent>
//                             {/* {props.content} */}
//                         </CardContent>
//                     </CardActionArea>
//                     <CardActions>
//                         <IconButton>
//                             <FavoriteIcon />
//                         </IconButton>
//                     </CardActions>
//                 </Card>
//             )
//         }
//     }
// }

// export default AxieCard;
export default AxieCard;


import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const spacing = 5;
const useStyles = makeStyles({
    root: {
        flexGrow: 1
    }
})

const Griddening = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {React.Children.map(props.children, (child, index) => (
                            <Grid key={index} item xs={5}>
                                {child}
                            </Grid>
                        ))}
                    </Grid>
                </Grid>        
            </Grid>
        </div>    
    )
};

export default Griddening;


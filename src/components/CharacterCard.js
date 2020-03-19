import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StyledLink from "./navigation/StyledLink";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '1rem',
    },
    media: {
        height: 140,
    },
});

const CharacterCard = (props) => {
    const classes = useStyles();
    const {name, image, species, status, location, id} = props
    return (
        <StyledLink to={`/character/${id}`}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Species: {species}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Dead or Alive?: {status}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Location: {location.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </StyledLink>
    )
}

export default CharacterCard

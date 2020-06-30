import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import SendIcon from "@material-ui/icons/Send";

const classes = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
  },
}));

const NotificationForm = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="custom image"
            height="20%"
            image="https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg"
            title="custom image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Send a New Notification
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <TextField
                required
                id="standard-required"
                label="Title"
                margin="normal"
                onChange={props.titleChange}
              />
              <br />
              <TextField
                required
                id="standard-required"
                label="Message"
                margin="normal"
                onChange={props.subtitleChange}
              />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={props.click}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            <SendIcon className={classes.rightIcon} />
            Send
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default NotificationForm;

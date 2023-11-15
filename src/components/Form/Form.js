import React, { useState } from "react";
import { Paper, TextField, Typography, Button } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions";

import useStyles from "./styles";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        className={`${classes.form} ${classes.root}`}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          name="creator"
          label="Creator"
          variant="outlined"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          fullWidth
        />
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          fullWidth
        />
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          fullWidth
        />
        <TextField
          name="tags"
          label="Tags"
          variant="outlined"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          fullWidth
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={(base64) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

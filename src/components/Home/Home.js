import React, { useState, useEffect } from "react";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import Paginate from "../Pagination/Pagination";

import { getPosts, getPostsBySearch } from "../../actions";

import useStyles from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const query = useQuery();

  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const dispatch = useDispatch();

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      navigate(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      navigate("/");
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAdd = (tag) => setTags([...tags, tag]);

  const handleDelete = (tagDelete) =>
    setTags(tags.filter((tag) => tag !== tagDelete));

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.con}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                fullWidth
                label="Search CRUD"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                variant="outlined"
              />
              <ChipInput
                value={tags}
                variant="outlined"
                onAdd={handleAdd}
                onDelete={handleDelete}
                style={{ margin: "10px 0" }}
                label="Search By Tag"
              />
              <Button
                variant="contained"
                className={classes.searchButton}
                onClick={searchPost}
                color="primary"
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {!searchQuery && !tags.length && (
              <Paper elevation={6} className={classes.pagination}>
                <Paginate page={page} />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;

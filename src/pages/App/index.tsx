import React, { useEffect, useState } from 'react';
import { PostCard, PostProps } from '../../components/PostCard'
import { jsonPlaceHolderApi } from '../../services/api';
import { Grid } from '@mui/material';
import './style.css';

function App() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      const postsResponse = await jsonPlaceHolderApi.get<PostProps[]>('/posts');
      setPosts(postsResponse.data);
    }
    fetchData();
  }, []);

  return (
    <Grid
      className="app"
      container
      spacing={2}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      {
        posts && posts.map(post => {
          return (
            <Grid
              className="post-card-content"
              item
            >
              <PostCard
                id={post.id}
                title={post.title}
                body={post.body}
              />
            </Grid>
          )
        })
      }
    </Grid>
  );
}

export default App;

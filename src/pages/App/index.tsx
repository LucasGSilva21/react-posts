import React, { useEffect, useState } from 'react';
import { PostCard, PostProps } from '../../components/PostCard'
import { jsonPlaceHolderApi } from '../../services/api';
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
    <div className="App">
      {
        posts && posts.map(post => {
          return (
            <PostCard
              id={post.id}
              title={post.title}
              body={post.body}
            />
          )
        })
      }
    </div>
  );
}

export default App;

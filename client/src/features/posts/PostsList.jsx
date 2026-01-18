import React from 'react';
import { useState, useEffect } from 'react';
import { API_URL } from '../../constants';

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  // Fetch posts from API
    useEffect(() => {
      async function loadPosts() {
        try {
          const response = await fetch(API_URL);
          if(response.ok) {
            const json = await response.json();
            setPosts(json);
          }
          else {
            throw response;
          }
        }
        catch (e) {
          const msg = "An unknown error has occurred ...";
          setError(msg);
          console.log(msg, e);
        }
        finally {
          setLoading(false);
        }
      }
      loadPosts();
    }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
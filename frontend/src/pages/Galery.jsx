import React, { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Gallery</h2>
      <div className="gallery-container">
        {posts.map((post) => (
          <div key={post._id} className="gallery-item">
            <img
              src={`http://localhost:3001/${post.photoUrl}`}
              alt={post.text}
            />
            <p>{post.text}</p>
            <p>Author: {post.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

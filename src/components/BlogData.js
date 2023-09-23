// VeriBağlamı.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../utils/base_url';
import { config } from '../utils/axiosconfig';

const BlogDataContext = createContext();

export function BlogDataProvider({ children }) {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogData() {
      try {
        const Blogresponse = await axios.get(
          `${base_url}/api/posts?published=true`,
          config
        );
        setBlogData(Blogresponse.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBlogData();
  }, []);

  return (
    <BlogDataContext.Provider value={{ blogData, loading }}>
      {children}
    </BlogDataContext.Provider>
  );
}

export function useBlogData() {
  return useContext(BlogDataContext);
}

// VeriBağlamı.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../utils/base_url';
import { config } from '../utils/axiosconfig';

const BlogDataContext = createContext();

export function BlogDataProvider({ children }) {
  const [blogData, setBlogData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogData() {
      try {
        const Blogresponse = await axios.get(
          `${base_url}/api/posts?published=true`,
          config
        );
        const Serviceresponse = await axios.get(
          `${base_url}/api/services?channels=true`,
          config
        );
        setBlogData(Blogresponse.data);
        setServiceData(Serviceresponse.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBlogData();
  }, []);

  return (
    <BlogDataContext.Provider value={{ blogData, serviceData, loading }}>
      {children}
    </BlogDataContext.Provider>
  );
}

export function useBlogData() {
  return useContext(BlogDataContext);
}

import React, { useEffect, useState } from "react";
import { BaseApi } from "../config";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [ratings, setRatings] = useState(null);
  useEffect(() => {
    fetchCourses();
    fetchStars();
  }, []);
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${BaseApi}/get/course`);
      if (response) {
        setCourses(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`${BaseApi}/public/review`);
      if (response.status === 200) {
        setReviews(response.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const fetchStars = async () => {
    try {
      const response = await axios.get(`${BaseApi}/public/review/average`);
      if (response.status === 200) {
        setRatings(response.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <AppContext.Provider value={{ courses, reviews, ratings }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };

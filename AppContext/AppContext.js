import React, { useEffect, useState } from "react";
import {BaseApi} from "../config"
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetchCourses();
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

  return (
    <AppContext.Provider value={{ courses }}>{children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext };

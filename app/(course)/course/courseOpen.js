import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TextInput,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { AppContext } from "../../../AppContext/AppContext";
import {
  CollegeSelect,
  CourcesHorizontal,
  HorizontalOption,
  PaperTable,
  SubjectInput,
} from "../../../components";
import axios from "axios";
import { BASE_API } from "@env";

const CourseScreen = () => {
  const route = useRoute();
  const { coursePath, courseName } = route.params;
  const { courses } = useContext(AppContext);
  const [pdfFiles, setPdfFiles] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchType, setSearchType] = useState("");
  const [uniqueYears, setUniqueYears] = useState([]);
  const [uniqueTypes, setUniqueTypes] = useState([]);
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSearchType("");
    setSearchYear("");
    fetchPaper(coursePath);
  }, [coursePath]);

  const fetchPaper = async (coursePath) => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_API}/course/${coursePath}`);
      setPapers(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const years = [...new Set(papers.map((file) => file.year))];
    setUniqueYears(years);

    const types = [...new Set(papers.map((file) => file.type))];
    setUniqueTypes(types);
  }, [papers]);

  useEffect(() => {
    let filteredPdfFiles = papers;

    if (searchYear) {
      filteredPdfFiles = filteredPdfFiles.filter(
        (file) => file.year === Number(searchYear)
      );
    }

    if (searchType) {
      filteredPdfFiles = filteredPdfFiles.filter((file) =>
        file.type.toLowerCase().includes(searchType.toLowerCase())
      );
    }

    if (searchInput) {
      filteredPdfFiles = filteredPdfFiles.filter((file) => {
        const subject = file.subject.toLowerCase();
        const searchTerm = searchInput.toLowerCase();
        return subject.includes(searchTerm);
      });
    }

    setPdfFiles(filteredPdfFiles);
  }, [papers, searchYear, searchType, searchInput]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111111", padding: 10 }}>
      {/* <CourcesHorizontal courses={courses} courseName={courseName} /> */}
      {papers.length > 0 && (
        <View>
          <View style={styles.yearAndInput}>
            <SubjectInput
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
            <HorizontalOption
              AppOptions={uniqueYears}
              courseName={searchYear}
              setSearchYear={setSearchYear}
            />
          </View>
          <CollegeSelect  uniqueTypes={uniqueTypes} searchType={searchType} setSearchType={setSearchType}/>
        </View>
      )}
      <PaperTable
        coursePath={coursePath}
        courseName={courseName}
        loading={loading}
        papers={pdfFiles}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  yearAndInput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    justifyContent: "space-between",
  },
});

export default CourseScreen;

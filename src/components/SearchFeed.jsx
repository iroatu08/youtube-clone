import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
   
<Box p={2}
sx={{overFlowY: 'auto', height: '90vh', flex: 2 }}
>
  <Typography
  fontWeight='bold'
  mb={2}
  sx={{color: 'white'}}
  >
Search Results for:
    <span  style={{color:'#f31503'}}> {searchTerm}</span>
  </Typography>

  <Videos videos={videos}/>
</Box>
  );
};

export default SearchFeed;

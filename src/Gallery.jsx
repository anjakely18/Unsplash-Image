import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url =
  "https://api.unsplash.com/search/photos?client_id=MxLJbpyGHF3N5aQsegq9Pb3kwJ4Ks6Js2JVu4EAokYg&query=office";

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });
  console.log(response);
  return <div className="image-container"></div>;
};

export default Gallery;

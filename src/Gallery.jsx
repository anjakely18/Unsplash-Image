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

  //Verification
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error....</h4>
      </section>
    );
  }
  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  //If no errors then...
  return (
    <section className="image-container">
      {results.map((item) => {
        //If items exist then get the url and if url exist get the regular
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;

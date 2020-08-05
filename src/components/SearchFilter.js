import React, { useState } from "react";
import { StateConsumer } from "../Context";

export default function SearchFilter() {
  const [nameOfMovie, updateName] = useState("");
  const [yearOfMovie, updateYear] = useState("");

  return (
    <StateConsumer>
      {({ findMovie, clearInputs }) => {
        return (
          <>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => updateName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Year"
              onChange={(e) => updateYear(e.target.value)}
            />
            <button onClick={() => findMovie(nameOfMovie, yearOfMovie)}>
              Search
            </button>
            <button onClick={() => clearInputs()}>X</button>
          </>
        );
      }}
    </StateConsumer>
  );
}

// onChange={(e) => updateValue(e.target.value)}

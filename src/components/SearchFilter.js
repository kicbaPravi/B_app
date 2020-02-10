import React from "react";
import { StateConsumer } from "../Context";

export default function SearchFilter() {
  return (
    <StateConsumer>
      {({ updateValue }) => {
        return (
          <>
            <input
              type="text"
              placeholder="Search for artist, event or venue"
              onChange={e => updateValue(e.target.value)}
            />
            <button>Go</button>
          </>
        );
      }}
    </StateConsumer>
  );
}

{
  /* <>
<input
  type="text"
  placeholder="Search for artist, event or venue"
  onChange={e => updateValue(e.target.value)}
/>
<button>Go</button>
</> */
}

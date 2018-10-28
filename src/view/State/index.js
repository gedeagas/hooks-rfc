import React from "react";
import { useState, useEffect, useContext } from "react";
import styled, { css } from "styled-components";

import { ThemeContext } from "../../index";
import { Text, Box, Button } from "../../uikit";

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  display: inline-flex;
  flex: 1;
`;

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const theme = useContext(ThemeContext);

  const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest.join("").toLowerCase();

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${capitalize(
      theme.value
    )} - Detak jantung mu ${count} bpm`;
  });

  function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }

  return (
    <div style={{ display: "flex" }}>
      <Wrapper>
        <Box background={theme.value}>
          <Text size="24px" weight="700">
            Detak Jantung
          </Text>
          <div style={{ marginTop: "40px", marginBottom: "40px" }}>
            <Text size="40px">{count}</Text>
            <br />
            <Text size="18px">bpm</Text>
          </div>
          <Text>total variasi</Text>
          <Text>56-142 bpm</Text>
        </Box>

        <Button
          color="gray"
          onClick={() => setCount(getRandomArbitrary(85, 120))}
        >
          <Text>Record</Text>
        </Button>
      </Wrapper>
      <Wrapper>
        <Text color="#000">Active Theme</Text>
        <Text color="#000" size="24px">
          {capitalize(theme.value)}
        </Text>

        <Button color="black" onClick={() => theme.setValue("black")}>
          <Text>Black</Text>
        </Button>
        <Button color="blue" onClick={() => theme.setValue("blue")}>
          <Text>Blue</Text>
        </Button>
        <Button color="red" onClick={() => theme.setValue("red")}>
          <Text>Red</Text>
        </Button>
      </Wrapper>
    </div>
  );
}

import React from "react";
import { render } from "react-dom";
import AppWrapper from "src/wrappers/AppWrapper";
import BodyWrapper from "src/wrappers/AppWrapper/BodyWrapper/BodyWrapper";
import JsonOjectsArrayContextProvider from "./contexts/JsonOjectsArrayContext";

render(
  <AppWrapper>
    <JsonOjectsArrayContextProvider>
      <BodyWrapper />
    </JsonOjectsArrayContextProvider>
  </AppWrapper>,
  document.getElementById("root") as HTMLElement
);

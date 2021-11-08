import { useLocalObservable } from "mobx-react";
import React from "react";
import {
  createJsonObjectsArrayStore,
  JsonObjectsArray,
} from "src/stores/jsonObjectsArrayStore";

export const JsonOjectsArrayContext = React.createContext({
  texts: [""],
  get textCount() {
    return this.texts.length;
  },
  addText(text: string) {
    this.texts.push(text);
  },
  objects: [] as JsonObjectsArray,
  addObjects(objects: JsonObjectsArray) {
    this.objects = [...objects];
  },
});

const JsonOjectsArrayContextProvider = (props: { children: JSX.Element }) => {
  const jsonObjectsArrayStore = useLocalObservable(createJsonObjectsArrayStore);

  return (
    <JsonOjectsArrayContext.Provider value={jsonObjectsArrayStore}>
      {props.children}
    </JsonOjectsArrayContext.Provider>
  );
};

export default JsonOjectsArrayContextProvider;

export const useJsonObjectsArrayStore = () =>
  React.useContext(JsonOjectsArrayContext);

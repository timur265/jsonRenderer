import { useLocalObservable } from "mobx-react";
import React from "react";
import AppStore from "src/stores/AppStore";
import FileRendererStore from "src/stores/FileRendererStore";

export const AppContext = React.createContext({
  fileRendererStore: FileRendererStore(),
});

const AppContextProvider = (props: { children: JSX.Element }) => {
  const jsonObjectsArrayStore = useLocalObservable(AppStore);

  return (
    <AppContext.Provider value={jsonObjectsArrayStore}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useJsonObjectsArrayStore = () => React.useContext(AppContext);

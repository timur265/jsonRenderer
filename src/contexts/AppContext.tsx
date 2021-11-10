import { useLocalObservable } from "mobx-react";
import React from "react";
import AppStore from "src/stores/AppStore";
import FileRendererStore from "src/stores/FileRendererStore";

export const AppContext = React.createContext({
  fileRendererStore: FileRendererStore(),
});

const AppContextProvider = (props: { children: JSX.Element }) => {
  const store = useLocalObservable(AppStore);

  return (
    <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => React.useContext(AppContext);

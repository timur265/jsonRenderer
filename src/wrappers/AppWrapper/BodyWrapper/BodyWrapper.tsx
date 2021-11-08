import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "src/config/routes";
import RendererPage from "src/pages/RendererPage";
import UploadPage from "src/pages/UploadPage";

function BodyWrapper() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.uploadPage} exact component={UploadPage} />
        <Route path={routes.rendererPage} exact component={RendererPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default BodyWrapper;

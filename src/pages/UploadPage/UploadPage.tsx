import React, { useRef, useState } from "react";
import Layout from "src/components/Layout";
import classes from "./UploadPage.css";
import cn from "clsx";
import { routes } from "src/config/routes";
import { Redirect } from "react-router";
import Typography from "src/components/ui-kit/Typography";
import { useJsonObjectsArrayStore } from "src/contexts/AppContext";

const UploadPage = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const store = useJsonObjectsArrayStore();
  const [redirect, setRedirect] = useState("");

  const setValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fileReader = new FileReader();

    if (e.target.files != null) {
      const ext = e.target.files[0].name.split(".").pop();
      if (ext === "json") {
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = (e) => {
          if (e.target != null && typeof e.target.result == "string") {
            const result = JSON.parse(e.target.result);
            store.fileRendererStore.addObjects(result);
            setRedirect(routes.rendererPage);
          }
        };
      }
    }
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <Layout>
      <>
        <form>
          <input
            className={cn(classes.inputFile)}
            type="file"
            onChange={setValue}
            ref={fileInput}
          />
        </form>
        <button
          className={cn(classes.uploadBtn)}
          onClick={() => {
            fileInput && fileInput.current ? fileInput.current.click() : null;
          }}
        >
          <Typography variant="span" color="white">
            Pick File
          </Typography>
        </button>
      </>
    </Layout>
  );
};

export default UploadPage;

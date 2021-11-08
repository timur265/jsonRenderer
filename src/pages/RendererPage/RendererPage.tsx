import React from "react";
import Layout from "src/components/Layout";
import Typography from "src/components/ui-kit/Typography";
import cn from "clsx";
import classes from "./RendererPage.css";
import { Grid } from "@material-ui/core";
import { useJsonObjectsArrayStore } from "src/contexts/AppContext";

const RendererPage = () => {
  const store = useJsonObjectsArrayStore();

  const getJsonObjects = () => {
    if (store.fileRendererStore.objects.length === 0) {
      return (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h2">Please pick file</Typography>
        </Grid>
      );
    }

    return store.fileRendererStore.objects.map((object: any) => {
      return (
        <div
          key={object.id ? object.id : Date.now()}
          className={cn(classes.objectContainer)}
        >
          <div>
            <div className={cn(classes.objectItem)}>
              <Typography variant="span">
                {"id ->"} {object.id}
              </Typography>
            </div>
            <div className={cn(classes.objectItem)}>
              <Typography variant="span">
                {"isActive ->"} {object.isActive ? "true" : "false"}
              </Typography>
            </div>
            <div className={cn(classes.objectItem)}>
              <Typography variant="span">
                {"picture ->"} {object.picture}
              </Typography>
            </div>
            <div className={cn(classes.objectItem)}>
              <Typography variant="span">
                {"age ->"} {object.age}
              </Typography>
            </div>
            <div className={cn(classes.objectItem)}>
              <Typography variant="span">
                {"name ->"} {object.name}
              </Typography>
            </div>
            <div className={cn(classes.objectItem)}>
              <Typography variant="span">
                {"email ->"} {object.email}
              </Typography>
            </div>
            <div className={cn(classes.objectItem)}>
              <Typography variant="span">
                {"address ->"} {object.address}
              </Typography>
            </div>
            <div className={cn(classes.objectItem)}>
              <Typography variant="span">
                {"about ->"} {object.about}
              </Typography>
            </div>
            <div className={cn(classes.objectItem)}>
              <Typography variant="span">
                {"registered ->"} {object.registered}
              </Typography>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <Layout>
      <div>{getJsonObjects()}</div>
    </Layout>
  );
};

export default RendererPage;

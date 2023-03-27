import ImagesRouter from "./images";

const RouterApp = (app: any) => {
  app.use("/images", ImagesRouter);
};

export default RouterApp;

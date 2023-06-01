import { bai1ReduxMiddlewareRouter } from "../../components/ReduxMiddleware/Bai1/routes";
import { bai2ReduxMiddlewareRouter } from "../../components/ReduxMiddleware/Bai2/routes";

export const reduxMiddlewareRouter = {
  path: "redux-middleware",
  children: [bai1ReduxMiddlewareRouter, bai2ReduxMiddlewareRouter],
};

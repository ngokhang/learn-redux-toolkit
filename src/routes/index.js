import { createBrowserRouter } from "react-router-dom";
import { bai1Router } from "./bai1";
import { bai2Router } from "./bai2";
import { homepageRouter } from "./homepage";

export const router = createBrowserRouter([
  homepageRouter,
  bai1Router,
  bai2Router,
]);

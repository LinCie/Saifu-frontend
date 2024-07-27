import { Root } from "@/components";
import { HomePage } from "@/pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<HomePage />} index />
    </Route>,
  ),
);

export default router;

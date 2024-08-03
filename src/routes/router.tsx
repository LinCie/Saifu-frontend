import { Root } from "@/components";
import { HomePage, SignInPage } from "@/pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<HomePage />} index />
      <Route path="/signin" element={<SignInPage />} />
    </Route>,
  ),
);

export default router;

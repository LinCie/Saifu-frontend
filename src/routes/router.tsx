import { DashboardRoot, Root } from "@/components";
import { userLoader } from "@/loaders";
import { HomePage, SignInPage, SignUpPage } from "@/pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" loader={userLoader} element={<Root />}>
      <Route path="/" element={<HomePage />} index />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<DashboardRoot />}></Route>
    </Route>,
  ),
);

export default router;

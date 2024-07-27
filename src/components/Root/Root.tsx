import { Outlet } from "react-router-dom";
import { RootHeader } from "./RootHeader";

export function Root() {
  return (
    <>
      <RootHeader />
      <Outlet />
    </>
  );
}

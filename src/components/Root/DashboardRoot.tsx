import { UserContext } from "@/contexts";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { DashboardHeader } from "./DashboardHeader";

export function DashboardRoot() {
  const userContext = useContext(UserContext);

  if (!userContext?.user) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <>
      <DashboardHeader />
      <Outlet />
    </>
  );
}

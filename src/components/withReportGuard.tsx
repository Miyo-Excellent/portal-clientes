"use client";
import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { selectRoutes } from "@redux/slices/routes.slice";

export interface WithReportGuardProps {
  children?: ReactNode;
}

export const WithReportGuard = ({ children }: WithReportGuardProps) => {
  const { withCredentials } = useSelector(selectRoutes);

  useEffect(() => {
    if (!withCredentials) redirect("/");
  }, [withCredentials]);

  return children;
};

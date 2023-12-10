import { ReactNode } from "react";
import { WithReportGuard } from "@components/withReportGuard";

export interface AuthLayoutProps {
  children?: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <WithReportGuard>{children}</WithReportGuard>;
}

import { DashboardShell } from "@/components/saas/layouts";

export default function AdminLayout({ children }: LayoutProps<"/admin">) {
  return <DashboardShell admin>{children}</DashboardShell>;
}

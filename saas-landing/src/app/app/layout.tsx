import { DashboardShell } from "@/components/saas/layouts";

export default function AppLayout({ children }: LayoutProps<"/app">) {
  return <DashboardShell>{children}</DashboardShell>;
}

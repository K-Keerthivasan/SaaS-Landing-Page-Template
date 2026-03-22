import { ShellHeader, StatCard } from "@/components/saas/layouts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { activities, kpis, quickActions } from "@/lib/mock-data";

export default function AppDashboardPage() {
  return (
    <div className="space-y-6">
      <ShellHeader
        eyebrow="Product Dashboard"
        title="Welcome back, Maya"
        description="The dashboard is arranged like a real operating surface: KPIs first, then recent activity, then actions that keep teams moving."
        badge="Live Demo"
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((item) => (
          <StatCard key={item.label} label={item.label} value={item.value} detail={`${item.delta} ${item.detail}`} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <Card className="glass-panel border-white/70 bg-white/78 py-0">
          <CardHeader className="px-6 pt-6">
            <CardTitle className="font-heading text-2xl text-slate-950">Activity feed</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 px-6 pb-6">
            {activities.map((activity) => (
              <div key={activity.title} className="rounded-[1.4rem] border border-slate-200/75 bg-slate-50/70 p-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-medium text-slate-900">{activity.title}</p>
                  <Badge variant="outline" className="rounded-full border-slate-200 bg-white text-slate-500">
                    {activity.time}
                  </Badge>
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-500">{activity.detail}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="glass-panel border-[#6C47FF]/18 bg-[linear-gradient(180deg,rgba(108,71,255,0.08),rgba(255,255,255,0.84))] py-0">
          <CardHeader className="px-6 pt-6">
            <CardTitle className="font-heading text-2xl text-slate-950">Quick actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 px-6 pb-6">
            {quickActions.map((action) => (
              <Button
                key={action}
                variant="outline"
                className="h-12 w-full justify-between rounded-2xl border-white/70 bg-white/75 px-4 text-sm text-slate-700"
              >
                {action}
                <span className="text-[#6C47FF]">+</span>
              </Button>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

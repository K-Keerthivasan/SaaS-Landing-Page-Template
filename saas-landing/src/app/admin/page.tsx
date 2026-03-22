import { HomeBackButton } from "@/components/admin/admin-theme";
import { PlanDistributionChart, SignupsChart } from "@/components/saas/charts";
import { ShellHeader, StatCard } from "@/components/saas/layouts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { adminStats, planDistribution, signupSeries } from "@/lib/mock-data";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6 min-w-0">
      <ShellHeader
        eyebrow="Super Admin"
        title="Business performance at a glance"
        description="This admin home gives operators core SaaS metrics up front, with charts sized for actual decision-making instead of filler."
        badge="Internal"
        actions={<HomeBackButton />}
      />

      <section className="grid gap-4 md:grid-cols-3">
        {adminStats.map((item) => (
          <StatCard key={item.label} label={item.label} value={item.value} detail={item.delta} />
        ))}
      </section>

      <section className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <Card className="glass-panel min-w-0 border-white/70 bg-white/78 py-0 dark:border-white/10 dark:bg-white/6">
          <CardHeader className="px-6 pt-6">
            <CardTitle className="font-heading text-2xl text-slate-950 dark:text-white">New signups, last 30 days</CardTitle>
          </CardHeader>
          <CardContent className="min-w-0 px-4 pb-4">
            <SignupsChart data={signupSeries} />
          </CardContent>
        </Card>
        <Card className="glass-panel min-w-0 border-white/70 bg-white/78 py-0 dark:border-white/10 dark:bg-white/6">
          <CardHeader className="px-6 pt-6">
            <CardTitle className="font-heading text-2xl text-slate-950 dark:text-white">Plan distribution</CardTitle>
          </CardHeader>
          <CardContent className="min-w-0 px-4 pb-4">
            <PlanDistributionChart data={planDistribution} />
            <div className="grid grid-cols-3 gap-3 px-2 pb-2 text-center text-sm text-slate-500 dark:text-slate-300">
              {planDistribution.map((item) => (
                <div key={item.name} className="rounded-2xl bg-slate-50/80 px-3 py-3 dark:bg-white/6">
                  <p className="font-medium text-slate-900 dark:text-white">{item.name}</p>
                  <p className="mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

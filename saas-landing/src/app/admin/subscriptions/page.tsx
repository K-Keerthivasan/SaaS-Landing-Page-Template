import { ShellHeader } from "@/components/saas/layouts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { revenueSummary, subscriptions } from "@/lib/mock-data";

export default function AdminSubscriptionsPage() {
  return (
    <div className="space-y-6">
      <ShellHeader
        eyebrow="Subscription Manager"
        title="Track active contracts and revenue health"
        description="This screen covers active subscription rows, lightweight plan filtering affordances, and summary metrics that matter to operators."
      />
      <section className="grid gap-4 md:grid-cols-3">
        {revenueSummary.map((item) => (
          <Card key={item.label} className="glass-panel border-white/70 bg-white/76 py-0 dark:border-white/10 dark:bg-white/6">
            <CardHeader className="px-5 pt-5">
              <CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.label}</CardTitle>
            </CardHeader>
            <CardContent className="px-5 pb-5 font-heading text-3xl font-semibold text-slate-950 dark:text-white">{item.value}</CardContent>
          </Card>
        ))}
      </section>
      <Card className="glass-panel overflow-hidden border-white/70 bg-white/78 py-0 dark:border-white/10 dark:bg-white/6">
        <CardHeader className="flex flex-col gap-4 px-6 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="font-heading text-2xl text-slate-950 dark:text-white">Active subscriptions</CardTitle>
          <div className="flex gap-2">
            {["All plans", "Starter", "Scale", "Enterprise"].map((filter, index) => (
              <Button
                key={filter}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "rounded-xl bg-[#6C47FF] px-4 text-white hover:bg-[#5a38ef]"
                    : "rounded-xl border-slate-200 bg-white px-4 dark:border-white/10 dark:bg-white/6"
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50/80 text-slate-500 dark:bg-white/6 dark:text-slate-400">
                <tr>
                  <th className="px-6 py-4 font-medium">Company</th>
                  <th className="px-6 py-4 font-medium">Plan</th>
                  <th className="px-6 py-4 font-medium">Seats</th>
                  <th className="px-6 py-4 font-medium">Amount</th>
                  <th className="px-6 py-4 font-medium">Renewal</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((subscription) => (
                  <tr key={subscription.company} className="border-t border-slate-200/70 dark:border-white/10">
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{subscription.company}</td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{subscription.plan}</td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{subscription.seats}</td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{subscription.amount}</td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{subscription.renewal}</td>
                    <td className="px-6 py-4">
                      <Badge
                        className={
                          subscription.status === "Active"
                            ? "rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                            : subscription.status === "Past Due"
                              ? "rounded-full bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300"
                              : "rounded-full bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200"
                        }
                      >
                        {subscription.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import Link from "next/link";

import { MarketingFooter, MarketingHeader } from "@/components/saas/layouts";
import { PricingBlock } from "@/components/saas/pricing-block";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { comparisonRows, faqs, pricingPlans } from "@/lib/mock-data";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fafafa_0%,#f5f4ff_100%)] dark:bg-[radial-gradient(circle_at_top,rgba(108,71,255,0.16),transparent_26%),linear-gradient(180deg,#080912_0%,#121322_100%)]">
      <MarketingHeader />
      <main className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl space-y-16">
          <section className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">Pricing</p>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">Pricing built for growth stages, not vanity tiers.</h1>
            <p className="mt-5 text-base leading-8 text-slate-500 dark:text-slate-300 sm:text-lg">
              Use this page as a direct conversion route or as a richer comparison screen linked from the landing page.
            </p>
          </section>

          <section>
            <PricingBlock plans={pricingPlans} />
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="glass-panel overflow-hidden border-white/70 bg-white/78 py-0 dark:border-white/10 dark:bg-white/6">
              <CardHeader className="px-6 pt-6">
                <CardTitle className="font-heading text-3xl text-slate-950 dark:text-white">Detailed feature comparison</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-slate-50/80 text-slate-500 dark:bg-white/6 dark:text-slate-400">
                      <tr>
                        <th className="px-6 py-4 font-medium">Feature</th>
                        <th className="px-6 py-4 font-medium">Starter</th>
                        <th className="px-6 py-4 font-medium">Scale</th>
                        <th className="px-6 py-4 font-medium">Enterprise</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr key={row.feature} className="border-t border-slate-200/70 dark:border-white/10">
                          <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{row.feature}</td>
                          <td className="px-6 py-4 text-slate-500 dark:text-slate-300">{row.starter}</td>
                          <td className="px-6 py-4 text-slate-500 dark:text-slate-300">{row.scale}</td>
                          <td className="px-6 py-4 text-slate-500 dark:text-slate-300">{row.enterprise}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <Card className="glass-panel border-[#6C47FF]/18 bg-[linear-gradient(135deg,rgba(108,71,255,0.10),rgba(255,255,255,0.84))] py-0 dark:border-[#6C47FF]/24 dark:bg-[linear-gradient(135deg,rgba(108,71,255,0.18),rgba(255,255,255,0.05))]">
              <CardHeader className="px-6 pt-6">
                <CardTitle className="font-heading text-3xl text-slate-950 dark:text-white">Enterprise rollout</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-6 pb-6 text-sm leading-7 text-slate-500 dark:text-slate-300">
                <p>
                  Need procurement support, custom controls, workspace migration, or white-glove onboarding? This block is positioned for higher-intent buyers.
                </p>
                <ul className="space-y-3">
                  <li>Dedicated implementation lead</li>
                  <li>Security questionnaire support</li>
                  <li>Custom onboarding timeline</li>
                  <li>Shared Slack channel</li>
                </ul>
                <Button asChild className="mt-2 h-11 rounded-2xl bg-[#6C47FF] px-5 text-sm text-white hover:bg-[#5a38ef]">
                  <Link href="/admin">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">FAQ</p>
              <h2 className="mt-4 font-heading text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">Handle objections before they slow the deal.</h2>
            </div>
            <Accordion type="single" collapsible className="glass-panel rounded-[1.75rem] border border-white/70 bg-white/80 dark:border-white/10 dark:bg-white/6">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="px-5 py-4 text-sm font-medium text-slate-900 dark:text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 text-sm leading-7 text-slate-500 dark:text-slate-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </main>
      <MarketingFooter />
    </div>
  );
}

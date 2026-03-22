import Link from "next/link";

import { HeroShowcase } from "@/components/saas/hero-showcase";
import {
  BoltIcon,
  ChartIcon,
  LayersIcon,
  ShieldIcon,
  SparkIcon,
  UsersIcon,
} from "@/components/saas/icons";
import { MarketingFooter, MarketingHeader } from "@/components/saas/layouts";
import { PricingBlock } from "@/components/saas/pricing-block";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { company, faqs, features, pricingPlans, socialProof } from "@/lib/mock-data";

const featureIcons = [LayersIcon, BoltIcon, ChartIcon];
const trustIcons = [SparkIcon, ShieldIcon, UsersIcon];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fafafa_0%,#f6f5ff_48%,#fafafa_100%)] dark:bg-[radial-gradient(circle_at_top,rgba(108,71,255,0.16),transparent_26%),linear-gradient(180deg,#080912_0%,#121322_52%,#0b0d16_100%)]">
      <MarketingHeader />
      <main className="pb-10">
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(108,71,255,0.25),transparent)]" />
          <div className="mx-auto grid w-full max-w-7xl gap-12 lg:gap-14">
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="rounded-full bg-[#6C47FF]/10 px-4 py-1 text-[#6C47FF] dark:bg-[#6C47FF]/18 dark:text-[#c7baff]">
                SaaS landing + app template for {company.name}
              </Badge>
              <h1 className="mt-8 font-heading text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-7xl">
                A clean futurist SaaS front end built to convert and scale.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500 dark:text-slate-300 sm:text-lg">
                {company.tagline} Launch marketing pages, product screens, and admin tooling with one coherent visual system.
              </p>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
                <Button asChild className="h-12 rounded-2xl bg-[#6C47FF] px-6 text-sm text-white hover:bg-[#5a38ef]">
                  <Link href="/register">Start Free Trial</Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-2xl border-slate-200 bg-white px-6 text-sm dark:border-white/10 dark:bg-white/6 dark:text-white">
                  <Link href="/app/dashboard">Preview Dashboard</Link>
                </Button>
              </div>
              <div className="mt-8 grid gap-3 sm:hidden">
                <div className="rounded-[1.4rem] border border-white/70 bg-white/76 px-4 py-3 text-left dark:border-white/10 dark:bg-white/6">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Mobile Ready</p>
                  <p className="mt-1 text-sm text-slate-900 dark:text-white">Hamburger navigation, theme toggle, and quick app access are now available on small screens.</p>
                </div>
              </div>
            </div>
            <HeroShowcase />
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <p className="text-center text-xs uppercase tracking-[0.34em] text-slate-400 dark:text-slate-500">Trusted by modern SaaS operators</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {socialProof.map((logo, index) => {
                const Icon = trustIcons[index % trustIcons.length];

                return (
                  <div
                    key={logo}
                    className="glass-panel flex items-center justify-center gap-3 rounded-[1.5rem] border border-white/70 bg-white/72 px-4 py-5 text-sm font-medium text-slate-500 dark:border-white/10 dark:bg-white/6 dark:text-slate-300"
                  >
                    <Icon className="h-4 w-4 text-[#6C47FF]" />
                    {logo}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">Feature highlights</p>
              <h2 className="mt-4 font-heading text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">Designed like a product, not a placeholder.</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = featureIcons[index % featureIcons.length];

                return (
                  <Card key={feature.title} className="glass-panel border-white/70 bg-white/76 py-0 dark:border-white/10 dark:bg-white/6">
                    <CardHeader className="px-6 pt-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6C47FF]/10 text-[#6C47FF] dark:bg-[#6C47FF]/18 dark:text-[#c7baff]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="pt-4 font-heading text-2xl dark:text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                      <CardDescription className="text-sm leading-7 text-slate-500 dark:text-slate-300">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">Pricing</p>
              <h2 className="mt-4 font-heading text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">Simple packaging with room to grow.</h2>
            </div>
            <PricingBlock plans={pricingPlans} compact />
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">FAQ</p>
              <h2 className="mt-4 font-heading text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">Everything teams ask before rollout.</h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 dark:text-slate-300">
                Keep the boilerplate realistic enough for sales, product, and internal ops demos from day one.
              </p>
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
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="glass-panel rounded-[2.5rem] border border-[#6C47FF]/18 bg-[linear-gradient(135deg,rgba(108,71,255,0.10),rgba(255,255,255,0.86))] px-6 py-10 text-center dark:border-[#6C47FF]/24 dark:bg-[linear-gradient(135deg,rgba(108,71,255,0.18),rgba(255,255,255,0.05))] sm:px-8 lg:px-14 lg:py-16">
              <p className="text-xs uppercase tracking-[0.34em] text-slate-500 dark:text-slate-400">Footer CTA</p>
              <h2 className="mt-5 font-heading text-3xl font-semibold text-slate-950 dark:text-white lg:text-5xl">
                Ship the next SaaS launch with a product-grade starting point.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-300">
                Marketing pages, app shell, auth, and admin tooling are already aligned. Replace the mock data and connect your stack.
              </p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
                <Button asChild className="h-12 rounded-2xl bg-[#6C47FF] px-6 text-sm text-white hover:bg-[#5a38ef]">
                  <Link href="/register">Create Workspace</Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-2xl border-slate-200 bg-white px-6 text-sm dark:border-white/10 dark:bg-white/6 dark:text-white">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}

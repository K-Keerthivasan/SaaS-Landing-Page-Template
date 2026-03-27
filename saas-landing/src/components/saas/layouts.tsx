"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, Menu01Icon } from "@hugeicons/core-free-icons";

import { HomeBackButton, ThemeToggle } from "@/components/admin/admin-theme";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { adminSidebarLinks, company, navLinks, sidebarLinks } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

function BrandLockup({ admin = false }: { admin?: boolean }) {
  return (
    <Link href={admin ? "/admin" : "/"} className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#6C47FF] text-sm font-semibold text-white shadow-[0_12px_24px_rgba(108,71,255,0.24)]">
        K2
      </div>
      <div>
        <p className="font-heading text-base font-semibold text-slate-950 dark:text-white sm:text-lg">{admin ? "K2 Admin" : company.product}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{admin ? "Internal controls" : company.name}</p>
      </div>
    </Link>
  );
}

function MobileNavSheet({
  links,
  admin = false,
}: {
  links: { href: string; label: string }[];
  admin?: boolean;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          className="rounded-2xl border-slate-200/70 bg-white/80 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 lg:hidden"
        >
          <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} />
          <span className="sr-only">Open navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="border-l border-white/10 bg-[linear-gradient(180deg,#fafafa_0%,#f5f3ff_100%)] p-0 dark:bg-[linear-gradient(180deg,#0c0c14_0%,#161625_100%)]">
        <SheetHeader className="border-b border-slate-200/70 pb-5 dark:border-white/10">
          <SheetTitle>
            <BrandLockup admin={admin} />
          </SheetTitle>
          <SheetDescription>
            {admin ? "Admin navigation and controls for smaller screens." : "Browse the product, pricing, and workspace from one menu."}
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-6 p-6">
          <div className="grid gap-2">
            {links.map((link) => (
              <SheetClose key={link.href} asChild>
                <Link
                  href={link.href}
                  className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-[#6C47FF]/30 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
                >
                  <span>{link.label}</span>
                  <span className="h-2 w-2 rounded-full bg-current/40" />
                </Link>
              </SheetClose>
            ))}
          </div>
          <div className="grid gap-3">
            <ThemeToggle className="w-full justify-center" />
            {!admin ? (
              <>
                <SheetClose asChild>
                  <Button asChild variant="ghost" className="h-11 rounded-2xl text-slate-700 dark:text-slate-100">
                    <Link href="/login">Login</Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild className="h-11 rounded-2xl bg-[#6C47FF] text-white hover:bg-[#5a38ef]">
                    <Link href="/register">Start Free</Link>
                  </Button>
                </SheetClose>
              </>
            ) : (
              <div className="rounded-[1.5rem] border border-[#6C47FF]/18 bg-[linear-gradient(180deg,rgba(108,71,255,0.12),rgba(255,255,255,0.82))] p-4 text-sm text-slate-600 dark:border-[#6C47FF]/24 dark:bg-[linear-gradient(180deg,rgba(108,71,255,0.18),rgba(255,255,255,0.04))] dark:text-slate-300">
                Revenue, users, and plan health stay reachable without the desktop sidebar.
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function MarketingHeader() {
  return (
    <header className="sticky top-[var(--k2-demo-top-offset)] z-30 border-b border-white/60 bg-[#FAFAFA]/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#09090f]/75">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <BrandLockup />
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button asChild variant="ghost" className="h-10 rounded-2xl px-4 text-sm text-slate-700 dark:text-slate-100 dark:hover:bg-white/10">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="h-10 rounded-2xl bg-[#6C47FF] px-4 text-sm text-white hover:bg-[#5a38ef]">
            <Link href="/register">Start Free</Link>
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle className="px-3" />
          <MobileNavSheet links={navLinks} />
        </div>
      </div>
    </header>
  );
}

export function MarketingFooter() {
  return (
    <footer className="border-t border-white/60 bg-white/70 dark:border-white/10 dark:bg-white/5">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-heading text-xl font-semibold text-slate-950 dark:text-white">{company.product}</p>
          <p className="mt-2 max-w-xl text-sm text-slate-500 dark:text-slate-300">
            Launch a clean futurist SaaS front end with public, product, and admin surfaces already speaking the same visual language.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-300">
          <Link href="/pricing" className="hover:text-slate-950 dark:hover:text-white">Pricing</Link>
          <Link href="/app/dashboard" className="hover:text-slate-950 dark:hover:text-white">Dashboard</Link>
          <Link href="/admin" className="hover:text-slate-950 dark:hover:text-white">Admin</Link>
          <Link href="/register" className="hover:text-slate-950 dark:hover:text-white">Get Started</Link>
        </div>
      </div>
    </footer>
  );
}

export function DashboardShell({
  children,
  admin = false,
}: {
  children: React.ReactNode;
  admin?: boolean;
}) {
  const links = admin ? adminSidebarLinks : sidebarLinks;

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fafafa_0%,#f4f3ff_100%)] transition-colors dark:bg-[radial-gradient(circle_at_top,rgba(108,71,255,0.18),transparent_30%),linear-gradient(180deg,#09090f_0%,#131321_100%)]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-6 lg:px-6">
        <header className="glass-panel sticky top-[calc(var(--k2-demo-top-offset)+1rem)] z-20 flex items-center justify-between rounded-[1.75rem] border border-white/70 bg-white/82 px-4 py-3 dark:border-white/10 dark:bg-white/6 lg:hidden">
          <BrandLockup admin={admin} />
          <div className="flex items-center gap-2">
            <ThemeToggle className="px-3" />
            <MobileNavSheet links={links} admin={admin} />
          </div>
        </header>
        <aside className="glass-panel hidden flex-col rounded-[2rem] border border-white/70 bg-white/74 p-5 dark:border-white/10 dark:bg-white/6 lg:flex">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#6C47FF] font-semibold text-white">K2</div>
            <div>
              <p className="font-heading text-lg font-semibold text-slate-950 dark:text-white">{admin ? "K2 Admin" : company.product}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{admin ? "Internal controls" : "Operator workspace"}</p>
            </div>
          </div>
          <nav className="space-y-2">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/8 dark:hover:text-white",
                  index === 0 && "bg-[#6C47FF]/8 text-[#6C47FF] dark:bg-[#6C47FF]/18 dark:text-[#c7baff]"
                )}
              >
                <span>{link.label}</span>
                <span className="h-2 w-2 rounded-full bg-current/40" />
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex gap-2">
            <ThemeToggle className="flex-1 justify-center" />
            {admin ? <HomeBackButton /> : null}
          </div>
          <div className="mt-auto rounded-[1.5rem] border border-[#6C47FF]/14 bg-[linear-gradient(180deg,rgba(108,71,255,0.08),rgba(255,255,255,0.72))] p-4 dark:border-[#6C47FF]/24 dark:bg-[linear-gradient(180deg,rgba(108,71,255,0.16),rgba(17,24,39,0.56))]">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">{admin ? "Governance" : "Workspace"}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {admin
                ? "Track revenue, plan mix, and account actions from one internal console."
                : "Monitor revenue performance, account health, and workflow execution without leaving the app."}
            </p>
          </div>
        </aside>
        <main className="min-w-0 space-y-6 py-1 lg:py-2">{children}</main>
      </div>
      {!admin ? (
        <div className="fixed inset-x-4 bottom-4 z-20 flex items-center justify-between rounded-[1.5rem] border border-white/70 bg-white/88 px-4 py-3 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0e1020]/88 lg:hidden">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Quick Access</p>
            <p className="text-sm font-medium text-slate-900 dark:text-white">Open your workspace faster</p>
          </div>
          <Button asChild className="h-10 rounded-2xl bg-[#6C47FF] px-4 text-white hover:bg-[#5a38ef]">
            <Link href="/app/dashboard">Launch App</Link>
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export function ShellHeader({
  eyebrow,
  title,
  description,
  badge,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="glass-panel flex flex-col gap-4 rounded-[2rem] border border-white/70 bg-white/76 p-5 dark:border-white/10 dark:bg-white/6 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">{eyebrow}</p>
        <h1 className="mt-3 font-heading text-2xl font-semibold text-slate-950 dark:text-white sm:text-3xl">{title}</h1>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-300">{description}</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {actions}
        {badge ? <Badge className="rounded-full bg-[#6C47FF] px-3 py-1 text-white">{badge}</Badge> : null}
        <Avatar size="lg">
          <AvatarFallback className="bg-[#6C47FF]/10 text-[#6C47FF]">MC</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export function StatCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <Card className="glass-panel border-white/70 bg-white/76 py-0 dark:border-white/10 dark:bg-white/6">
      <CardHeader className="px-5 pt-5">
        <CardDescription className="text-sm text-slate-500 dark:text-slate-400">{label}</CardDescription>
        <CardTitle className="font-heading text-3xl font-semibold text-slate-950 dark:text-white">{value}</CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5 text-sm text-slate-500 dark:text-slate-300">{detail}</CardContent>
    </Card>
  );
}

export function InlineBackButton() {
  return (
    <Button
      asChild
      variant="ghost"
      className="h-10 rounded-2xl px-4 text-slate-700 dark:text-slate-100 dark:hover:bg-white/10"
    >
      <Link href="/">
        <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
        Back to home
      </Link>
    </Button>
  );
}



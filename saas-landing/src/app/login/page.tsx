import Link from "next/link";

import { AuthForm } from "@/components/saas/auth-form";

export default function LoginPage() {
  return (
    <main className="auth-grid min-h-screen place-items-center px-6 py-16">
      <div className="grid w-full max-w-6xl gap-10 lg:grid-cols-[0.95fr_0.8fr] lg:items-center">
        <div className="hidden lg:block">
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Login</p>
          <h1 className="mt-4 font-heading text-5xl font-semibold tracking-tight text-slate-950">
            Re-enter the workspace without losing the product feel.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
            This auth surface is intentionally styled to match the public site and the app shell, so the transition feels continuous.
          </p>
          <p className="mt-6 text-sm text-slate-500">
            Need the full funnel? <Link href="/register" className="text-[#6C47FF] hover:text-[#5a38ef]">Create an account</Link>.
          </p>
        </div>
        <AuthForm mode="login" />
      </div>
    </main>
  );
}

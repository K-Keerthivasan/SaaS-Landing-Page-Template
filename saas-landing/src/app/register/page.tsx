import Link from "next/link";

import { AuthForm } from "@/components/saas/auth-form";

export default function RegisterPage() {
  return (
    <main className="auth-grid min-h-screen place-items-center px-6 py-16">
      <div className="grid w-full max-w-6xl gap-10 lg:grid-cols-[0.95fr_0.8fr] lg:items-center">
        <div className="hidden lg:block">
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Register</p>
          <h1 className="mt-4 font-heading text-5xl font-semibold tracking-tight text-slate-950">
            Stand up a new SaaS workspace in one polished flow.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
            Typed validation is already wired in with React Hook Form and Zod, so this page is ready to connect to your auth provider.
          </p>
          <p className="mt-6 text-sm text-slate-500">
            Already set up? <Link href="/login" className="text-[#6C47FF] hover:text-[#5a38ef]">Login instead</Link>.
          </p>
        </div>
        <AuthForm mode="register" />
      </div>
    </main>
  );
}

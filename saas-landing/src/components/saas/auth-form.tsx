"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

const registerSchema = loginSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters."),
});

type LoginValues = z.infer<typeof loginSchema>;
type RegisterValues = z.infer<typeof registerSchema>;

function AuthCard({
  title,
  description,
  children,
  footer,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <Card className="glass-panel w-full max-w-md border-white/70 bg-white/82 py-0 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
      <CardHeader className="px-8 pt-8">
        <p className="text-xs uppercase tracking-[0.32em] text-[#64748B]">K2 Orbit</p>
        <CardTitle className="font-heading text-3xl font-semibold text-slate-950">{title}</CardTitle>
        <CardDescription className="text-sm text-slate-500">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-8 pb-8">
        <div className="grid gap-3 sm:grid-cols-2">
          <Button variant="outline" className="h-11 rounded-2xl border-slate-200 bg-white text-sm">
            Continue with Google
          </Button>
          <Button variant="outline" className="h-11 rounded-2xl border-slate-200 bg-white text-sm">
            Continue with GitHub
          </Button>
        </div>
        <div className="relative text-center text-xs uppercase tracking-[0.25em] text-slate-400">
          <span className="relative z-10 bg-white/80 px-3">Or continue with email</span>
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-slate-200" />
        </div>
        {children}
        <p className="text-center text-sm text-slate-500">{footer}</p>
      </CardContent>
    </Card>
  );
}

function LoginFormFields() {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "maya@northstarcloud.com", password: "demo-password" },
  });

  return (
    <form onSubmit={form.handleSubmit(async () => undefined)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm text-slate-700">
          Email
        </Label>
        <Input id="email" className="h-11 rounded-2xl bg-white/80 text-sm" {...form.register("email")} />
        {form.formState.errors.email ? (
          <p className="text-sm text-rose-500">{form.formState.errors.email.message}</p>
        ) : null}
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="text-sm text-slate-700">
            Password
          </Label>
          <Link href="/register" className="text-sm text-[#6C47FF] hover:text-[#5a38ef]">
            Forgot password?
          </Link>
        </div>
        <Input
          id="password"
          type="password"
          className="h-11 rounded-2xl bg-white/80 text-sm"
          {...form.register("password")}
        />
        {form.formState.errors.password ? (
          <p className="text-sm text-rose-500">{form.formState.errors.password.message}</p>
        ) : null}
      </div>
      <Button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="h-11 w-full rounded-2xl bg-[#6C47FF] text-sm text-white hover:bg-[#5a38ef]"
      >
        Sign In
      </Button>
    </form>
  );
}

function RegisterFormFields() {
  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "Maya Chen",
      email: "maya@northstarcloud.com",
      password: "demo-password",
    },
  });

  return (
    <form onSubmit={form.handleSubmit(async () => undefined)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm text-slate-700">
          Full name
        </Label>
        <Input id="name" className="h-11 rounded-2xl bg-white/80 text-sm" {...form.register("name")} />
        {form.formState.errors.name ? (
          <p className="text-sm text-rose-500">{form.formState.errors.name.message}</p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm text-slate-700">
          Email
        </Label>
        <Input id="email" className="h-11 rounded-2xl bg-white/80 text-sm" {...form.register("email")} />
        {form.formState.errors.email ? (
          <p className="text-sm text-rose-500">{form.formState.errors.email.message}</p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm text-slate-700">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          className="h-11 rounded-2xl bg-white/80 text-sm"
          {...form.register("password")}
        />
        {form.formState.errors.password ? (
          <p className="text-sm text-rose-500">{form.formState.errors.password.message}</p>
        ) : null}
      </div>
      <Button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="h-11 w-full rounded-2xl bg-[#6C47FF] text-sm text-white hover:bg-[#5a38ef]"
      >
        Create Account
      </Button>
    </form>
  );
}

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  if (mode === "register") {
    return (
      <AuthCard
        title="Create your workspace"
        description="Spin up a realistic SaaS account flow with typed validation."
        footer={
          <>
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-[#6C47FF] hover:text-[#5a38ef]">
              Login
            </Link>
          </>
        }
      >
        <RegisterFormFields />
      </AuthCard>
    );
  }

  return (
    <AuthCard
      title="Welcome back"
      description="Use the mock credentials to explore the template UI."
      footer={
        <>
          Need an account?{" "}
          <Link href="/register" className="font-medium text-[#6C47FF] hover:text-[#5a38ef]">
            Register
          </Link>
        </>
      }
    >
      <LoginFormFields />
    </AuthCard>
  );
}

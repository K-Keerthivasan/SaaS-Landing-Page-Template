"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  monthly: number;
  annual: number;
  description: string;
  cta: string;
  highlight: boolean;
  features: string[];
};

export function PricingBlock({
  plans,
  compact = false,
}: {
  plans: Plan[];
  compact?: boolean;
}) {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Label
          htmlFor="billing"
          className={cn("text-sm text-slate-500 dark:text-slate-400", !annual && "text-slate-900 dark:text-white")}
        >
          Monthly
        </Label>
        <Switch id="billing" checked={annual} onCheckedChange={setAnnual} />
        <Label
          htmlFor="billing"
          className={cn("text-sm text-slate-500 dark:text-slate-400", annual && "text-slate-900 dark:text-white")}
        >
          Annual
        </Label>
        <Badge
          variant="outline"
          className="rounded-full border-[#6C47FF]/20 bg-[#6C47FF]/8 px-3 text-[#6C47FF] dark:border-[#6C47FF]/30 dark:bg-[#6C47FF]/16 dark:text-[#c7baff]"
        >
          Save 17%
        </Badge>
      </div>
      <div className={cn("grid gap-6 lg:grid-cols-3", compact && "xl:grid-cols-3")}>
        {plans.map((plan) => {
          const price = annual ? plan.annual : plan.monthly;

          return (
            <Card
              key={plan.name}
              className={cn(
                "glass-panel border-white/70 bg-white/72 py-0 shadow-none dark:border-white/10 dark:bg-white/6",
                plan.highlight &&
                  "border-[#6C47FF]/25 bg-[linear-gradient(180deg,rgba(108,71,255,0.10),rgba(255,255,255,0.84))] dark:border-[#6C47FF]/30 dark:bg-[linear-gradient(180deg,rgba(108,71,255,0.18),rgba(255,255,255,0.05))]"
              )}
            >
              <CardHeader className="px-6 pt-6">
                {plan.highlight ? (
                  <Badge className="mb-4 w-fit rounded-full bg-[#6C47FF] px-3 py-1 text-white">
                    Most Popular
                  </Badge>
                ) : null}
                <CardTitle className="font-heading text-2xl dark:text-white">{plan.name}</CardTitle>
                <CardDescription className="text-sm text-slate-500 dark:text-slate-300">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6">
                <div className="mb-6 flex items-end gap-2">
                  <span className="font-heading text-5xl font-semibold text-slate-950 dark:text-white">
                    ${price}
                  </span>
                  <span className="pb-1 text-sm text-slate-500 dark:text-slate-300">per seat / month</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#6C47FF]/10 text-xs text-[#6C47FF] dark:bg-[#6C47FF]/18 dark:text-[#c7baff]">
                        +
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button
                  className={cn(
                    "h-11 w-full rounded-2xl text-sm",
                    plan.highlight
                      ? "bg-[#6C47FF] text-white hover:bg-[#5a38ef]"
                      : "bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                  )}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

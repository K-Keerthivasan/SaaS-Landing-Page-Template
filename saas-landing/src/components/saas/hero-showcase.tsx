"use client";

import { motion } from "framer-motion";

import { heroMetrics } from "@/lib/mock-data";

export function HeroShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-5xl"
    >
      <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(108,71,255,0.22)_0%,_rgba(108,71,255,0)_72%)]" />
      <div className="glass-panel relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/68 p-3 shadow-[0_30px_90px_rgba(108,71,255,0.12)] dark:border-white/10 dark:bg-white/4 sm:p-4">
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(108,71,255,0.12),transparent)]" />
        <div className="grid gap-4 lg:grid-cols-[1.35fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="rounded-[1.5rem] border border-white/60 bg-white/80 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/6 sm:p-5"
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#64748B] dark:text-slate-400">Live Workspace</p>
                <h3 className="mt-2 font-heading text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">Revenue cockpit</h3>
              </div>
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#F97316]/70" />
                <span className="h-3 w-3 rounded-full bg-[#6C47FF]/70" />
                <span className="h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-600" />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[1.25rem] bg-[linear-gradient(135deg,rgba(108,71,255,0.96),rgba(82,51,213,0.92))] p-5 text-white">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/75">Expansion forecast</p>
                  <p className="mt-4 text-3xl font-semibold sm:text-4xl">$62,400</p>
                  <p className="mt-2 text-sm text-white/80">Pipeline converted from usage signals and lifecycle nudges.</p>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-[1.25rem] border border-slate-200/80 bg-slate-50/85 p-4 dark:border-white/10 dark:bg-white/6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">MRR acceleration</p>
                        <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">+14.2%</p>
                      </div>
                      <div className="flex h-16 items-end gap-1">
                        {[34, 48, 42, 58, 75, 68, 92].map((bar, index) => (
                          <span
                            key={index}
                            className="w-3 rounded-full bg-[linear-gradient(180deg,#A38BFF,#6C47FF)]"
                            style={{ height: `${bar}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[1.25rem] border border-slate-200/80 bg-white/90 p-4 dark:border-white/10 dark:bg-white/6">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-xs text-slate-500 dark:text-slate-400">Workflow velocity</p>
                      <p className="text-xs font-medium text-[#6C47FF] dark:text-[#c7baff]">12 sequences live</p>
                    </div>
                    <div className="space-y-2">
                      {["Onboarding", "Renewals", "Winback"].map((item, index) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#6C47FF]" />
                          <div className="h-2 flex-1 rounded-full bg-slate-100 dark:bg-white/10">
                            <div
                              className="h-2 rounded-full bg-[linear-gradient(90deg,#6C47FF,#C3B5FF)]"
                              style={{ width: `${76 - index * 18}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {heroMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + index * 0.08, duration: 0.45 }}
                    className="rounded-[1.1rem] border border-slate-200/80 bg-white/75 p-4 dark:border-white/10 dark:bg-white/6"
                  >
                    <p className="text-xs text-slate-500 dark:text-slate-400">{metric.label}</p>
                    <p className="mt-2 font-heading text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid gap-4"
          >
            <div className="rounded-[1.5rem] border border-white/60 bg-white/80 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/6">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">AI Priorities</p>
              <div className="mt-5 space-y-3">
                {[
                  ["Northstar Cloud", "Expansion intent: 92"],
                  ["Signal Forge", "Renewal risk: 78"],
                  ["Helio AI", "Activation lag: 64"],
                ].map(([name, detail]) => (
                  <div key={name} className="rounded-[1rem] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/6">
                    <p className="font-medium text-slate-900 dark:text-white">{name}</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-[#6C47FF]/20 bg-[linear-gradient(180deg,rgba(108,71,255,0.08),rgba(255,255,255,0.82))] p-5 dark:border-[#6C47FF]/24 dark:bg-[linear-gradient(180deg,rgba(108,71,255,0.18),rgba(255,255,255,0.05))]">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Operator Notes</p>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Teams use K2 Orbit to see who is expanding, who is drifting, and what to do next without jumping across five disconnected tools.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

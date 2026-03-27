"use client";

import Image from "next/image";
import { useState } from "react";

const DEMO_CONFIG = {
  backUrl: "https://k2digitalmedia.ca",
  brandName: "K2 Digital Media",
  logoUrl: "/Logo.png",
};

function ExternalLink({
  href,
  className,
  children,
  ariaLabel,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

export function DemoBanner() {
  const [isOpen, setIsOpen] = useState<boolean | "auto">("auto");
  const panelIsOpen = isOpen === "auto" ? undefined : isOpen;

  function handleToggle() {
    if (isOpen === "auto") {
      setIsOpen(window.innerWidth < 640);
      return;
    }

    setIsOpen((value) => !value);
  }

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[99999] border-b border-[#2fa8c7]/25 bg-[linear-gradient(90deg,#0b1224,#0d1a30)] px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/60 sm:px-4 sm:py-[7px] sm:text-[11px]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center sm:flex-nowrap">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2fa8c7] shadow-[0_0_12px_#2fa8c7] animate-[k2pulse_2s_ease-in-out_infinite]" />
          <span>This is a demo site built by</span>
          <ExternalLink
            href={DEMO_CONFIG.backUrl}
            className="border-b border-[#2fa8c7]/40 font-bold tracking-[0.14em] text-[#2fa8c7] transition hover:text-white"
          >
            {DEMO_CONFIG.brandName}
          </ExternalLink>
          <span className="hidden text-white/25 sm:inline">|</span>
          <ExternalLink
            href={DEMO_CONFIG.backUrl}
            className="rounded-full border border-[#2fa8c7]/35 px-3 py-1 text-[9px] font-semibold tracking-[0.16em] text-white/65 transition hover:border-[#2fa8c7]/80 hover:text-white sm:text-[10px]"
          >
            Go Back
          </ExternalLink>
        </div>
      </div>

      <div className="pointer-events-none fixed inset-x-3 bottom-20 z-[99998] sm:inset-x-auto sm:bottom-auto sm:right-0 sm:top-1/2 sm:translate-y-[-50%]">
        <div className="pointer-events-auto flex items-end justify-end sm:items-center">
          <div
            id="k2-demo-panel"
            className={[
              "overflow-hidden border border-[#2fa8c7]/25 bg-[linear-gradient(135deg,#080f1e,#0d1a30)] text-white shadow-[-4px_0_24px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out",
              "sm:rounded-l-[1rem] sm:border-r-0",
              panelIsOpen === true && "max-h-[260px] w-full rounded-3xl px-5 py-5 opacity-100 sm:w-[220px] sm:rounded-r-none sm:px-[18px] sm:py-5",
              panelIsOpen === false && "max-h-0 w-0 border-transparent px-0 py-0 opacity-0 sm:w-0",
              isOpen === "auto" && "max-h-0 w-0 border-transparent px-0 py-0 opacity-0 sm:max-h-[260px] sm:w-[220px] sm:rounded-r-none sm:border-[#2fa8c7]/25 sm:px-[18px] sm:py-5 sm:opacity-100",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-hidden={panelIsOpen === false}
          >
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#2fa8c7]/20 bg-[#2fa8c7]/8">
                <Image src={DEMO_CONFIG.logoUrl} alt={DEMO_CONFIG.brandName} width={44} height={44} className="h-11 w-11 object-contain" />
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[#2fa8c7]/30 bg-[#2fa8c7]/10 px-3 py-1 text-[9px] uppercase tracking-[0.16em] text-[#2fa8c7]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2fa8c7] shadow-[0_0_10px_#2fa8c7] animate-[k2pulse_2s_ease-in-out_infinite]" />
                Demo Site
              </div>
              <p className="text-sm leading-6 text-white/65">
                This site is a live demo built by <strong className="font-semibold text-white">{DEMO_CONFIG.brandName}</strong>.
              </p>
              <ExternalLink
                href={DEMO_CONFIG.backUrl}
                className="block w-full rounded-full bg-[linear-gradient(135deg,#2fa8c7,#1d7a99)] px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_4px_14px_rgba(47,168,199,0.3)] transition hover:scale-[0.98] hover:opacity-90"
              >
                Back to K2DM
              </ExternalLink>
            </div>
          </div>

          <button
            type="button"
            onClick={handleToggle}
            className="ml-2 flex h-12 items-center justify-center rounded-full border border-[#2fa8c7]/35 bg-[#0d1a30] px-4 text-[10px] uppercase tracking-[0.18em] text-[#2fa8c7] transition hover:bg-[#2fa8c7]/15 sm:ml-0 sm:h-auto sm:rounded-l-xl sm:rounded-r-none sm:border-r-0 sm:px-2 sm:py-4 sm:[writing-mode:vertical-rl]"
            aria-expanded={panelIsOpen ?? true}
            aria-controls="k2-demo-panel"
            aria-label={(panelIsOpen ?? true) ? "Collapse demo panel" : "Expand demo panel"}
          >
            <span className="mr-2 text-base leading-none sm:mr-0 sm:mb-2">{(panelIsOpen ?? true) ? "›" : "‹"}</span>
            Demo
          </button>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-[99997] hidden border-t border-[#2fa8c7]/15 bg-[rgba(8,15,30,0.96)] px-4 py-2 text-[10px] uppercase tracking-[0.1em] text-white/40 backdrop-blur-xl sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3">
          <Image src={DEMO_CONFIG.logoUrl} alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain opacity-70" aria-hidden="true" />
          <span>Demo by</span>
          <ExternalLink href={DEMO_CONFIG.backUrl} className="font-bold text-[#2fa8c7] transition hover:underline">
            {DEMO_CONFIG.brandName}
          </ExternalLink>
          <span className="text-white/15">|</span>
          <ExternalLink href={DEMO_CONFIG.backUrl} className="text-white/45 transition hover:text-white">
            Visit Main Site
          </ExternalLink>
        </div>
      </div>
    </>
  );
}

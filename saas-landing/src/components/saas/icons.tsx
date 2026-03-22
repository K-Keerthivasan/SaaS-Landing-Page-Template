import type { SVGProps } from "react";

function IconBase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function SparkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Z" />
      <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" />
    </IconBase>
  );
}

export function LayersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
      <path d="m4 12.5 8 4.5 8-4.5" />
      <path d="m4 17 8 4 8-4" />
    </IconBase>
  );
}

export function ChartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 19h16" />
      <path d="M7 15V9" />
      <path d="M12 15V5" />
      <path d="M17 15v-3" />
    </IconBase>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 3 5 6v5c0 4.5 2.8 8.6 7 10 4.2-1.4 7-5.5 7-10V6l-7-3Z" />
    </IconBase>
  );
}

export function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <path d="M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M21 21v-2a4 4 0 0 0-3-3.9" />
      <path d="M16 3.2a4 4 0 0 1 0 7.6" />
    </IconBase>
  );
}

export function BoltIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" />
    </IconBase>
  );
}

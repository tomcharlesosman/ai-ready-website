import { HTMLAttributes } from "react";

export default function RealEstateIcon({
  fill = "var(--heat-100)",
  innerFillColor = "var(--background-base)",
  ...attrs
}: HTMLAttributes<HTMLOrSVGElement> & {
  innerFillColor?: string;
  fill?: string;
}) {
  return (
    <svg
      {...attrs}
      height="28"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* House icon for real estate */}
      <path
        d="M12 2L2 7v11h6v-6h8v6h6V7l-10-5z"
        fill={fill}
        stroke={fill}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

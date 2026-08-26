import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

type ContactCardProps = {
  href: string;
  label: string;
  value: string;
  icon: ReactNode;
  external?: boolean;
  ariaLabel: string;
};

export function ContactCard({
  href,
  label,
  value,
  icon,
  external = false,
  ariaLabel,
}: ContactCardProps) {
  return (
    <a
      href={href}
      className="contact-card anim-contact"
      aria-label={ariaLabel}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <span className="contact-icon" aria-hidden="true">
        {icon}
      </span>
      <span className="contact-copy">
        <p className="contact-label">{label}</p>
        <p className="contact-value">{value}</p>
      </span>
      <span className="contact-arrow" aria-hidden="true">
        <ChevronRight size={18} strokeWidth={2} />
      </span>
    </a>
  );
}

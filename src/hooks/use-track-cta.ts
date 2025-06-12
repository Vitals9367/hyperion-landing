import { usePostHog } from "posthog-js/react";
import { usePathname } from "next/navigation";

type CTALocation =
  | "hero"
  | "header"
  | "contact"
  | "services"
  | "lead-magnet"
  | "prometheus"
  | "hermes"
  | "hestia";

export function useTrackCTA() {
  const posthog = usePostHog();
  const pathname = usePathname();

  const trackCTAClick = (location: CTALocation) => {
    posthog.capture("cta_button_clicked", {
      location,
      path: pathname,
      button_text: "Book Your Free Strategy Call",
      timestamp: new Date().toISOString(),
    });
  };

  return { trackCTAClick };
}

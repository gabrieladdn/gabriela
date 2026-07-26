declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "5513982007343";
export const WHATSAPP_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ?? `https://wa.me/${WHATSAPP_PHONE}`;

export const trackWhatsAppConversion = (url?: string) => {
  if (typeof window == "undefined") return;
  
  if (typeof window.gtag_report_conversion === "function") {
    window.gtag_report_conversion(url);
  } else if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-18347937410/iMSKCJHH89YcEIKd_axE",
    });
  }
};

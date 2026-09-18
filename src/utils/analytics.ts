/**
 * Google Analytics GA4 Helper
 * Measurement ID: G-HYLLNWR706
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = 'G-HYLLNWR706';

/**
 * Sends a custom conversion / interaction event to GA4
 */
export function trackGAEvent(action: string, params: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      ...params,
      send_to: GA_MEASUREMENT_ID,
    });
  }
}

/**
 * Tracks lead clicks on "Tenho interesse" buttons
 */
export function trackInterestClick(buttonLocation: string, extraData: Record<string, any> = {}) {
  trackGAEvent('lead_interest_click', {
    event_category: 'conversion',
    event_label: buttonLocation,
    value: 1,
    ...extraData,
  });
  // Standard GA4 recommended event for lead generation
  trackGAEvent('generate_lead', {
    currency: 'BRL',
    value: 1,
    location_id: buttonLocation,
  });
}

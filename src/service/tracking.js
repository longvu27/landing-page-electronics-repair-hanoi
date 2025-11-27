export const gaEvent = ({ eventName }) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {});
  }
};

// export const trackingCallNow = () => {
//   gaEvent({ eventName: "call_now" });
// }


export function trackingCallNow() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17631756339/-SQ1CJur9ccbELOAvddB',
      value: 1.0,
      currency: 'VND'
    });
  }

}
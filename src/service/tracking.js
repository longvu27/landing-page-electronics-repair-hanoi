export const gaEvent = ({ eventName }) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {});
  }
};

export const trackingCallNow = () => {
  gaEvent({ eventName: "call_now" });
}
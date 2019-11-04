/**
 * React Bing Tracking Module
 *
 * @package react-tracking-bing
 * @author Alexander Barge <alexander.barge@gmail.com>
 */

const tracker = window.uetq || [];

export function initialize(newTrackerId) {
  /* eslint-disable */
  (function(w, d, t, r, u) {
    var f, n, i;
    (w[u] = w[u] || []),
      (f = function() {
        var o = { ti: newTrackerId };
        (o.q = w[u]), (w[u] = new UET(o)), w[u].push('pageLoad');
      }),
      (n = d.createElement(t)),
      (n.src = r),
      (n.async = 1),
      (n.onload = n.onreadystatechange = function() {
        var s = this.readyState;
        (s && s !== 'loaded' && s !== 'complete') ||
          (f(), (n.onload = n.onreadystatechange = null));
      }),
      (i = d.getElementsByTagName(t)[0]),
      i.parentNode.insertBefore(n, i);
  })(window, document, 'script', '//bat.bing.com/bat.js', 'uetq');
  /* eslint-enable */
}

export function getTracker() {
  return tracker;
}

export function trackPageview() {
  tracker.push('pageLoad');
}

export function trackEvent(
  eventAction = '',
  eventCategory = '',
  eventLabel = '',
  eventValue = '',
) {
  tracker.push('event', eventAction, {
    event_category: eventCategory,
    event_label: eventLabel,
    event_value: eventValue,
  });
}

export default {
  initialize,
  getTracker,
  trackPageview,
  trackEvent,
};

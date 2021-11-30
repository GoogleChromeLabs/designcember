(function() {
  const trackEvent = ({action, category, label, value}) => {
    gtag('event', action, {
      'event_category': category,
      'event_label': label,
      'value': value
    })
  }

  const trackClick = (e) => {
    const el = e.target.closest('.ga-event');
    if (!el) {
      return;
    }
    const data = {
      action: 'click',
      category: el.dataset.gaCategory || 'click-event',
      label: el.dataset.gaLabel,
    }
    trackEvent(data)
  }

  const trackDay = (e) => {
    const el = e.target.closest('.day');
    if (!el) {
      return;
    }
    const data = {
      action: 'hover',
      category: 'day-hover',
      label: el.id,
    }
    trackEvent(data)
  }

  window.addEventListener('load', (event) => {
    document.addEventListener('click', trackClick);
    document.querySelectorAll('.day').forEach(
      el => el.addEventListener('mouseenter', trackDay)
    )
  })
})()

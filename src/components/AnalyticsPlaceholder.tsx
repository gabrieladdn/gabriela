import React from 'react'

export default function AnalyticsPlaceholder() {
  if (!process.env.NEXT_PUBLIC_ANALYTICS_ID) {
    return null
  }

  return <div data-analytics-provider="generic" data-analytics-id={process.env.NEXT_PUBLIC_ANALYTICS_ID} hidden />
}

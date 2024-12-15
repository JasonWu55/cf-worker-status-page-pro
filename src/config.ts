import type { Config } from './types'

export const config: Config = {
  settings: {
    title: 'Status Page Pro',
    url: 'https://cf-worker-status-page-pro-production.yunsii.workers.dev',
    displayDays: 90,
    collectResponseTimes: true,
  },
  monitors: [],
  monitorsCsvUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQICaNJaA6OJB67d21KMp8zH_eKO0vyomfeipoBaZ-1YXENp5uCWbdpNaej9-z40moM0FY9CCsLdxNN/pub?output=csv',
}

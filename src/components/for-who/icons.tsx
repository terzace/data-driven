import type { ReactNode } from 'react'
import type { ForWhoIcon } from '../../constants'

const PATHS: Record<ForWhoIcon, ReactNode> = {
  sprout: (
    <>
      <path d="M12 21v-9" />
      <path d="M12 13c0-4-3-6-7-6 0 4 3 6 7 6z" fill="currentColor" fillOpacity="0.2" />
      <path d="M12 11c0-3.5 2.5-6 7-6 0 3.5-2.5 6-7 6z" fill="currentColor" fillOpacity="0.2" />
    </>
  ),
  cap: (
    <>
      <path d="M2 9.5 12 5l10 4.5-10 4.5z" fill="currentColor" fillOpacity="0.2" />
      <path d="M6 12v4.2c0 1.4 2.7 2.8 6 2.8s6-1.4 6-2.8V12" />
      <path d="M22 9.5V15" />
    </>
  ),
  growth: (
    <>
      <path d="M3 4v16h18" />
      <path d="m7 15 4-4 3 3 6-7" />
      <path d="M15.5 7H20v4.5" />
    </>
  ),
  target: (
    <>
      <circle cx="11" cy="13" r="8" />
      <circle cx="11" cy="13" r="4.5" fill="currentColor" fillOpacity="0.2" />
      <circle cx="11" cy="13" r="1" fill="currentColor" />
      <path d="m12 12 8-8" />
      <path d="M16.5 4H20v3.5" />
    </>
  ),
}

function ForWhoIconSvg({ name }: { name: ForWhoIcon }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  )
}

export default ForWhoIconSvg

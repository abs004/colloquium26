type IconProps = { size?: number; className?: string };

export function FacebookIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 22v-8.5h2.9l.4-3.4h-3.3V7.9c0-1 .3-1.6 1.7-1.6h1.8V3.3C16.7 3.2 15.6 3 14.4 3c-2.6 0-4.4 1.6-4.4 4.5v2.6H7v3.4h3v8.5h3.5z" />
    </svg>
  );
}

export function InstagramIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.9 3H22l-7.4 8.4L23.3 21h-6.9l-5.4-6.5L4.7 21H1.6l7.9-9L1 3h7.1l4.9 5.9L18.9 3zm-1.2 16.2h1.9L7.4 4.7H5.4l12.3 14.5z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm7 0h3.8v1.6h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.66 4.78 6.11V21h-4v-5.3c0-1.26-.02-2.87-1.75-2.87-1.76 0-2.03 1.37-2.03 2.78V21h-4V9.5z" />
    </svg>
  );
}

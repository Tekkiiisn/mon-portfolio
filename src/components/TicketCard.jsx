export default function TicketCard({ children, className = '', tilt = 'rotate-1', tear = true }) {
  return (
    <div className="relative">
      <div
        className={`absolute inset-0 translate-x-2 translate-y-2 bg-[var(--paper-dark)] border-2 border-[var(--ink)] ${tilt}`}
        aria-hidden="true"
      ></div>
      <div className={`ticket relative border-2 border-[var(--ink)] ${tear ? 'tear-bottom' : ''} ${className}`}>
        {children}
      </div>
    </div>
  );
}

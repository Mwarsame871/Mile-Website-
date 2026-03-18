import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import mileLogo from '../../assets/mile-logo.png'
import { ContentWidth } from '../layout/ContentWidth'
import { cn } from '../../lib/cn'
import { navLinks } from '../../config/navigation'

function getLinkClassName({ isActive }: { isActive: boolean }) {
  return cn(
    'inline-flex items-center rounded-soft px-3 py-2 text-sm font-medium transition-colors duration-200',
    isActive
      ? 'bg-brand-muted/20 text-semantic-textPrimary'
      : 'text-semantic-textSecondary hover:bg-brand-almond/45 hover:text-semantic-textPrimary',
  )
}

export function SiteNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-semantic-borderStrong/30 bg-brand-smoke/95">
      <div className="px-5 md:px-8">
        <ContentWidth className="space-y-0">
          <div className="flex h-16 items-center justify-between">
            <NavLink
              to="/"
              className="inline-flex items-center gap-3 rounded-soft px-1 py-1.5 text-semantic-textPrimary"
              onClick={() => setIsOpen(false)}
            >
              <img
                src={mileLogo}
                alt="MILE logo"
                className="h-9 w-9 rounded-full border border-semantic-borderSoft bg-semantic-canvas p-0.5"
              />
              <span className="text-base font-semibold tracking-[0.01em]">
                MILE College Guide
              </span>
            </NavLink>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
              {navLinks.map((item) => (
                <NavLink key={item.to} to={item.to} className={getLinkClassName}>
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-soft border border-semantic-borderStrong/30 text-semantic-textSecondary transition-colors hover:bg-brand-muted/15 hover:text-semantic-textPrimary md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
            >
              <span className="relative h-4 w-5">
                <span
                  className={cn(
                    'absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-200',
                    isOpen ? 'top-1.5 rotate-45' : '',
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 top-1.5 block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200',
                    isOpen ? 'opacity-0' : 'opacity-100',
                  )}
                />
                <span
                  className={cn(
                    'absolute bottom-0 left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-200',
                    isOpen ? 'bottom-2 -rotate-45' : '',
                  )}
                />
              </span>
            </button>
          </div>

          <div
            className={cn(
              'overflow-hidden border-t border-semantic-borderStrong/30 bg-brand-almond/18 transition-all duration-200 md:hidden',
              isOpen ? 'max-h-96 py-3 opacity-100' : 'max-h-0 py-0 opacity-0',
            )}
          >
            <nav className="grid gap-1 pb-2" aria-label="Mobile primary">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={getLinkClassName}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </ContentWidth>
      </div>
    </header>
  )
}

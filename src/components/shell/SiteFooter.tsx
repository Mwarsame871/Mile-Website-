import { NavLink } from 'react-router-dom'
import { navLinks } from '../../config/navigation'
import { ContentWidth } from '../layout/ContentWidth'

export function SiteFooter() {
  return (
    <footer className="border-t border-semantic-borderStrong/30 bg-brand-almond/22">
      <div className="px-5 py-8 md:px-8 md:py-10">
        <ContentWidth className="space-y-0">
          <div className="grid gap-8 border border-semantic-borderStrong/35 bg-brand-smoke p-6 md:grid-cols-3 md:p-7">
            <div className="space-y-3">
              <p className="text-base font-semibold text-semantic-textPrimary">
                MILE College Guide
              </p>
              <p className="type-muted max-w-prose">
                A warm, practical platform helping refugee students navigate college
                pathways with clarity, dignity, and community support.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-semantic-textPrimary">Quick Links</p>
              <nav className="grid gap-2" aria-label="Footer quick links">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className="text-sm text-semantic-textSecondary transition-colors hover:text-semantic-textPrimary"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-semantic-textPrimary">Support Directory</p>
              <p className="type-muted">
                Use the Get Help page to find trusted organizations, advisors, offices,
                and programs.
              </p>
              <p className="type-muted">
                Always verify details with official websites and sources.
              </p>
            </div>
          </div>
        </ContentWidth>
      </div>
    </footer>
  )
}

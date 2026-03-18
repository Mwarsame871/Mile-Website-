import { Outlet } from 'react-router-dom'
import { ContentWidth } from '../layout/ContentWidth'
import { SiteFooter } from './SiteFooter'
import { SiteNavbar } from './SiteNavbar'

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-semantic-canvas">
      <SiteNavbar />
      <main className="px-5 py-8 md:px-8 md:py-12">
        <ContentWidth>
          <Outlet />
        </ContentWidth>
      </main>
      <SiteFooter />
    </div>
  )
}

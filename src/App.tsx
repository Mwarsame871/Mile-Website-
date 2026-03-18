import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/shell/SiteLayout'
import { DocumentsLegalPage } from './pages/DocumentsLegalPage'
import { FinancialAidPage } from './pages/FinancialAidPage'
import { GetHelpPage } from './pages/GetHelpPage'
import { HomePage } from './pages/HomePage'
import { ResourcesPage } from './pages/ResourcesPage'
import { StartHerePage } from './pages/StartHerePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="start-here" element={<StartHerePage />} />
        <Route path="financial-aid" element={<FinancialAidPage />} />
        <Route path="documents-legal" element={<DocumentsLegalPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="get-help" element={<GetHelpPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppShell from './layout/AppShell'
import SentenceBuilder from './screens/sentence-builder/SentenceBuilder'
import CompoundWords from './screens/compound-words/CompoundWords'
import Numbers from './screens/numbers/Numbers'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<SentenceBuilder />} />
          <Route path="wortbau" element={<CompoundWords />} />
          <Route path="zahlen" element={<Numbers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

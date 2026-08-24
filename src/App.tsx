import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppShell from './layout/AppShell'
import SentenceBuilder from './screens/sentence-builder/SentenceBuilder'
import CompoundWords from './screens/compound-words/CompoundWords'
import Numbers from './screens/numbers/Numbers'
import Alphabet from './screens/alphabet/Alphabet'
import WordFamily from './screens/word-family/WordFamily'
import Vocabulary from './screens/vocabulary/Vocabulary'
import House from './screens/house/House'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<SentenceBuilder />} />
          <Route path="wortbau" element={<CompoundWords />} />
          <Route path="zahlen" element={<Numbers />} />
          <Route path="aussprache" element={<Alphabet />} />
          <Route path="wortfamilie" element={<WordFamily />} />
          <Route path="wortschatz" element={<Vocabulary />} />
          <Route path="zuhause" element={<House />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

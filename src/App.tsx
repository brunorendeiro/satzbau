import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppShell from './layout/AppShell'
import SentenceBuilder from './screens/sentence-builder/SentenceBuilder'
import CompoundWords from './screens/compound-words/CompoundWords'
import Numbers from './screens/numbers/Numbers'
import Alphabet from './screens/alphabet/Alphabet'
import WordFamily from './screens/word-family/WordFamily'
import Vocabulary from './screens/vocabulary/Vocabulary'
import House from './screens/house/House'
import Emergency from './screens/emergency/Emergency'
import Games from './screens/games/Games'
import Conversations from './screens/conversations/Conversations'

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
          <Route path="notfall" element={<Emergency />} />
          <Route path="gespraeche" element={<Conversations />} />
          <Route path="spiele" element={<Games />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

import PayoutPage from './pages/PayoutPage'
import Header from './ui/Header'
import Sidebar from './ui/Sidebar'
import { Stack } from '@mui/material'

const App = () => {
  return (
    <Stack direction='row'>
      <Sidebar />
      <Stack>
        <Header />
        <PayoutPage />
      </Stack>
    </Stack>
  )
}

export default App

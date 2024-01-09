import Header from './ui/Header'
import Sidebar from './ui/Sidebar'
import { Stack } from '@mui/material'

const App = () => {
  return (
    <Stack direction='row'>
      <Sidebar />
      <Stack>
        <Header />
      </Stack>
    </Stack>
  )
}

export default App

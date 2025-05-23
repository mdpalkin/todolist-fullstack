import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/app.tsx'
import {HeroUIProvider} from '@heroui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </QueryClientProvider>
)

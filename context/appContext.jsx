import { createContext, useState } from 'react'

export const AppContext = createContext({ data: null, setData: () => {} })

export default function AppProvider({ children }) {
  const [data, setData] = useState(null)
  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  )
}

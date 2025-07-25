import reactLogo from './assets/react.svg'
import { useState,useEffect } from 'react'
import ThemeBtn from './componets/ThemeBtn'
import Card from './componets/Card'
import { ThemeProvider } from './context/theme'

import viteLogo from '/vite.svg'

function App() {
const [themeMode, setTheme] = useState('light');
const lightTheme = () => setTheme('light');
const darkTheme = () => setTheme('dark');

useEffect(()=>{
document.querySelector('html').classList.remove('light', 'dark');
document.querySelector('html').classList.add(themeMode);
},[themeMode]
)
  return (
<ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App

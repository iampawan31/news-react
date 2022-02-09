import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Category from './components/Category'
import Header from './components/Header'
import TopHeadlines from './components/TopHeadlines'

const GEO_URL = `https://api.ipregistry.co/?key=${process.env.REACT_APP_GEO_API_KEY}`

const App = () => {
  const [currentCountryCode, setCurrentCountryCode] = useState('in')
  const [currentTime, setCurrentTime] = useState<string>('')

  const getCurrentCountryCode = async () => {
    const { data } = await axios.get(GEO_URL)
    if (data) {
      setCurrentCountryCode(data?.location?.country?.code)
      setCurrentTime(
        new Date(data?.time_zone?.current_time).toLocaleTimeString('en-US')
      )
    } else {
      setCurrentCountryCode('in')
    }
  }

  useEffect(() => {
    getCurrentCountryCode()
  }, [])

  return (
    <div className="bg-alternate h-full text-primary">
      <Header currentTime={currentTime} />
      <div className="container mx-auto py-40">
        <div className="flex space-x-6">
          <Routes>
            <Route
              path="/category/:category"
              element={<Category currentCountry={currentCountryCode} />}
            />
            <Route
              path="/"
              element={<TopHeadlines currentCountry={currentCountryCode} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App

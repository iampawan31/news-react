import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Category from './components/Category'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import TopHeadlines from './components/TopHeadlines'
import axios from 'axios'

const GEO_URL = `https://api.ipregistry.co/?key=${process.env.REACT_APP_GEO_API_KEY}`

const App = () => {
  const [currentCountryCode, setCurrentCountryCode] = useState('in')

  const getCurrentCountryCode = async () => {
    const { data } = await axios.get(GEO_URL)
    if (data) {
      setCurrentCountryCode(data?.location?.country?.code)
    } else {
      setCurrentCountryCode('in')
    }
  }

  useEffect(() => {
    getCurrentCountryCode()
  }, [])

  return (
    <Router>
      <div className="bg-alternate h-full text-primary py-10">
        <div className="container mx-auto">
          <div className="flex space-x-6">
            <div className="flex w-1/5">
              <Sidebar />
            </div>
            <div className="flex flex-col w-4/5">
              <Header />
              <Switch>
                <Route path="/category/:category" children={<Category />} />
                <Route
                  path="/"
                  children={
                    <TopHeadlines currentCountry={currentCountryCode} />
                  }
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App

import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Topic from './components/Topic'
import Header from './components/Header'
import TopHeadlines from './components/TopHeadlines'
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar'

const GEO_URL = `https://api.ipregistry.co/?key=${process.env.REACT_APP_GEO_API_KEY}`

const App = () => {
  const [currentCountryCode, setCurrentCountryCode] = useState('in')
  const loaderRef = useRef<LoadingBarRef>(null)
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

  const startLoader = () => {
    if (loaderRef) {
      loaderRef?.current?.continuousStart(0, 10000)
    }
  }

  const completeLoader = () => {
    if (loaderRef) {
      loaderRef?.current?.complete()
    }
  }

  return (
    <div className="bg-alternate h-full text-primary">
      <LoadingBar color="#1b74e4" height={5} shadow ref={loaderRef} />
      <Header />
      <div className="container mx-auto py-20 sm:py-40">
        <div className="flex space-x-6">
          <Routes>
            <Route
              path="/topic/:topic"
              element={
                <Topic
                  currentTime={currentTime}
                  startLoader={startLoader}
                  completeLoader={completeLoader}
                />
              }
            />
            <Route
              path="/"
              element={
                <TopHeadlines
                  currentTime={currentTime}
                  currentCountry={currentCountryCode}
                  startLoader={startLoader}
                  completeLoader={completeLoader}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App

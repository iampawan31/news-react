import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Category from './components/Category'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import TopHeadlines from './components/TopHeadlines'

const App = () => {
  return (
    <Router>
      <div className="bg-alternate h-screen text-primary py-10">
        <div className="container mx-auto">
          <div className="flex space-x-6">
            <div className="flex w-60">
              <Sidebar />
            </div>
            <div className="flex-grow">
              <Header />
              <TopHeadlines />
              <Switch>
                <Route path="/category/:category" children={<Category />} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App

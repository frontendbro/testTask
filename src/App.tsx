import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import PostsPage from './pages/PostsPage'
import FormPage from './pages/FormPage'
import { SWRConfig } from 'swr'
import { MyFetcher } from './helpers/fetcher'

const App = () => {
  return (
    <SWRConfig value={{ fetcher: MyFetcher }}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<PostsPage />} />
            <Route path="/form" element={<FormPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </SWRConfig>
  )
}

export default App

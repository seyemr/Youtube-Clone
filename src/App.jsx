import Header from "./components/Header"
import Feed from "./pages/Feed"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import VideoDetail from "./pages/VideoDetail"
// eslint-disable-next-line no-unused-vars
import loading from "../src/assets/loading10.gif"
import SearchResults from "./pages/SearchResults"
function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Feed />}/>
          <Route path="/watch/:videoId" element ={<VideoDetail/>} />
          <Route path="/results" element={<SearchResults/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

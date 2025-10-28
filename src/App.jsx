import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header.jsx/Header'
import {Wrapper} from './components/Wrapper'
import MainPage from './components/MainPage/MainPage'
import TopPage from './components/TopPage/TopPage'
import RandomPage from './components/RandomPage/RandomPage'
import FindPage from './components/FindPage/FindPage'

export default function App(){
  return (
    <BrowserRouter>
      <Wrapper>
        <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/top' element={<TopPage/>}/>
          <Route path='/random' element={<RandomPage/>}/>
          <Route path='/find' element={<FindPage/>}/>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  )
}
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login, Signup, Home, Test } from './pages'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useLocation } from 'react-router-dom'

const App = () => {
    const location = useLocation()
    return (
        <TransitionGroup>
            <CSSTransition timeout={1000} classNames="fade" key={location.key}>
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    )
}
export default App

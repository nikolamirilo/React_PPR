import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, logIn, logOut } from "../redux/actions"

const Home = () => {
    const counter = useSelector((state) => state.counter)
    const isLogged = useSelector((state) => state.isLogged)
    const [timesClicked, setTimesClicked] = useState(0)
    const dispatch = useDispatch()
    return (
        <div className="home">
            <h1>Counter {counter}</h1>
            <button
                style={{ width: "3rem", fontSize: "2rem" }}
                onClick={() => {
                    dispatch(decrement(5))
                }}
            >
                -
            </button>
            <button
                style={{ width: "3rem", fontSize: "2rem" }}
                onClick={() => {
                    dispatch(increment(5))
                }}
            >
                +
            </button>
            <h3>
                {isLogged ? <h1>Logged In</h1> : <h1>Logged out</h1>} {timesClicked}
            </h3>
            <button
                onClick={() => {
                    setTimesClicked(timesClicked + 1)

                    if (timesClicked % 2 === 0) {
                        dispatch(logIn())
                    } else if (timesClicked % 2 === 1) {
                        dispatch(logOut())
                    }
                }}
            >
                Log In
            </button>
        </div>
    )
}

export default Home

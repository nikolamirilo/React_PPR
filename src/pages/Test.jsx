import React, { useState } from 'react'
import { Modal } from '../components'

const Test = () => {
    const [clicked, setClicked] = useState(false)
    return (
        <div
            className="d-flex align-items-center justify-content-center bg-primary"
            style={{ height: '100vh', display: 'static' }}
        >
            <button
                className="btn btn-warning"
                onClick={() => {
                    setClicked(true)
                }}
                style={{ display: clicked === true && 'none' }}
            >
                Open Modal
            </button>
            {clicked === true ? (
                <div className="modal-container" style={{ display: clicked === false && 'none' }}>
                    <Modal
                        closeModal={() => {
                            setClicked(false)
                        }}
                    />
                </div>
            ) : null}
        </div>
    )
}

export default Test

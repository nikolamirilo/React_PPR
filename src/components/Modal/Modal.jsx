import React from 'react'

const Modal = (props) => {
    return (
        <div className="user-form">
            <div className="top-content">
                <div className="header">
                    <h3>Edit Profile</h3>
                    <button className="btn btn-warning" onClick={props.closeModal}>
                        X
                    </button>
                </div>
                <div className="user-panel">
                    <div className="user-image">User Image</div>
                    <div className="panel-buttons">
                        <button className="btn btn-warning">Remove</button>
                        <button className="btn btn-warning">Change</button>
                    </div>
                </div>
            </div>
            <form action="submit">
                <div className="input">
                    <label htmlFor="">First Name</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label htmlFor="">Last Name</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label htmlFor="">Password</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label htmlFor="">Address</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label htmlFor="">City</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label htmlFor="">Country</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label htmlFor="">Gender</label>
                    <input type="text" />
                </div>
            </form>
        </div>
    )
}

export default Modal

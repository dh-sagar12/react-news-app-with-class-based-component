import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <>
            <div className="text-center " style={{height: '50vh', marginTop: '25vh'}} >
                <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
                </div>
            </div>
            </>
        )
    }
}

export default Spinner

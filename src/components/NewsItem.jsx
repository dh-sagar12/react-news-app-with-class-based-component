import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {  
        let {title, description, imgUrl, newsLink} = this.props

        return (
            <>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={imgUrl}  height='200' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsLink} className="btn btn-outline-warning">Read More</a>
                        </div>
                    </div>

            </>
        )
    }
}

export default NewsItem



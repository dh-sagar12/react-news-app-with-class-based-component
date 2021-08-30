import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsLink, publishedDate, source } = this.props
        let time = new Date(publishedDate)

        return (
            <>
                <div className="card" >
                    <img src={imgUrl} height='200' className="card-img-top" alt="..." />
                    <div className="card-body">
                        <span className="badge bg-dark">Source: {source?source:'Unknown'}</span>
                        <h6 className="card-title">{title}</h6>
                        <p className='text-muted'>{time.toLocaleString()}</p>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer" href={newsLink} className="btn btn-outline-dark" target='_blank'>Read More</a>
                    </div>
                </div>

            </>
        )
    }
}

export default NewsItem



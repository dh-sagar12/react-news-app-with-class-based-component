import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

// import RecipeReviewCard from './NewsItem'

export class News extends Component {
    static defaultProps={
        country: 'in',
        pageSize: 21,
        category: 'general'

    }

    static protoTypes ={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        } 
    }

    async componentDidMount() {
       this.updateNews()

    }


    updateNews = async ()=>{
        const url = (`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`)
        this.setState({
            loading: true
        })
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ 
            articles: parsedData.articles ,
            totalResults: parsedData.totalResults,
            loading: false

        })

    } 
    handleNext= async ()=>{
        this.setState({
            page: this.state.page +1
        })
      this.updateNews()
    }
    
    handlePrevious = async ()=>{
       this.setState({
           page: this.state.page -1
       })
       this.updateNews()
    }

    render() {
        return (
            <>
                <div className='container my-4 ' >
                    <h2 className=' border-bottom border-2 mb-4 text-center'>NEWS MONKEE- TOP {this.props.category.toUpperCase()} HEADLINES</h2>
                {this.state.loading && <Spinner/>}
                    <div className="row justify-content-center" >
                        {!this.state.loading && this.state.articles.map((elem, index) => {
                            return <div className="col-sm-6 col-md- col-xl-3 mb-3 ms-3" key={index} >
                                <NewsItem title={elem.title} description={elem.description} imgUrl={!elem.urlToImage ? 'https://i.imgur.com/pnWiGV5.jpg' : elem.urlToImage} newsLink={elem.url} publishedDate={elem.publishedAt}/>
                            </div>
                        })}

                    </div>
                </div>
                <div className="container justify-content-between d-flex my-4">
                    <button disabled={this.state.page <= 1} className="btn btn-outline-dark " onClick={this.handlePrevious}>&larr; Previous </button>
                    <button disabled ={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}className="btn btn-outline-dark " onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </>

        )
    }
}

export default News

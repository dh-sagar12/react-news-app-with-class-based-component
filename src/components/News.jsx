import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

// import RecipeReviewCard from './NewsItem'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 21,
        category: 'general'

    }

    static protoTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

    async componentDidMount() {
        this.updateNews()

    }


    updateNews = async () => {
        const url = (`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`)
        this.props.setProgress(10)
        this.setState({
            loading: true
        })
        this.props.setProgress(30)
        let data = await fetch(url)
        this.props.setProgress(50)
        let parsedData = await data.json()
        this.props.setProgress(70)
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false

        })
        this.props.setProgress(100)
        this.props.setProgress(0)

    }


    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        })
        const url = (`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`)
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),

        })
    }

    render() {
        return (
            <>
                <div className=' my-4 ' >
                    <h2 className=' border-bottom border-2 mb-4 text-center'>NEWS MONKEE- TOP {this.props.category.toUpperCase()} HEADLINES</h2>
                    {this.state.loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />}
                        endMessage={
                            <p style={{ textAlign: "center" }}>
                                <b>YOU'RE DONE</b>
                            </p>
                        }
                    >
                        <div className="container-fluid">
                            <div className="row justify-content-center" >
                                {this.state.articles.map((elem, index) => {
                                    return <div className="col-sm-6 col-md-4 col-xl-3  mb-3 mx-3" key={index} >
                                        <NewsItem title={elem.title} description={elem.description} imgUrl={!elem.urlToImage ? 'https://i.imgur.com/pnWiGV5.jpg' : elem.urlToImage} newsLink={elem.url} publishedDate={elem.publishedAt} source={elem.source.name} />
                                    </div>
                                })}

                            </div>
                        </div>


                    </InfiniteScroll>
                </div>
            </>

        )
    }
}

export default News

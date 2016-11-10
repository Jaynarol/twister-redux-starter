import React, { Component, PropTypes } from 'react'
import Tweet from './Tweet'

class TweetList extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const mockTweets = [
      {id: 1, name: 'Nova', username: 'jaynarol', tweetText: 'Hello', timestamp: 1234},
      {id: 2, name: 'Nova', username: 'jaynarol', tweetText: 'Again', timestamp: 5678}
    ]
    this.props.fetchTweetsSuccess(mockTweets)
  }

  render(){
    return (
        <div className={'tweet-list'}>
          {this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />)}
        </div>
    )
  }

}

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.object)
}

TweetList.defaultProps = {
  tweets: [],
}

export default TweetList

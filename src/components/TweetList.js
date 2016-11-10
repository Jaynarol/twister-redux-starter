import React, { Component, PropTypes } from 'react'
import Tweet from './Tweet'

class TweetList extends Component {

  componentDidMount(){
    const username = this.props.ownerUsername || 'jaynarol'
    this.props.fetchTweets(username)
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

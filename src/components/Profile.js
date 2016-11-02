import React, { Component, PropTypes } from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileDetail from './ProfileDetail'
import ProfileFollow from './ProfileFollow'

class Profile extends Component {
  componentDidMount() {
    this.props.fetchProfile(this.props.fetchingUsername)
    if (!this.props.isOwnProfile) {
      this.props.fetchFollowStatus(this.props.authUsername, this.props.username)
    }
  }

  componentDidUpdate() {
    this.props.fetchProfile(this.props.fetchingUsername)
    if (!this.props.isOwnProfile) {
      this.props.fetchFollowStatus(this.props.authUsername, this.props.username)
    }
  }

  toggleFollow() {}

  render() {
    const showProfileFollow = this.props.isOwnProfile ? '' :
      <ProfileFollow
        isFollowing={this.props.isFollowing}
        handleToggleFollow={this.toggleFollow}
      />

    return (
      <div className="profile">
        <ProfileHeader name={this.props.name} username={this.props.username} />
        <ProfileDetail
          numTweets={this.props.numTweets}
          numFollowers={this.props.numFollowers}
          numFollowings={this.props.numFollowings}
        />
        { showProfileFollow }
      </div>
    )
  }
}

Profile.propTypes = {
  authUsername: PropTypes.string,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  numTweets: PropTypes.number.isRequired,
  numFollowers: PropTypes.number.isRequired,
  numFollowings: PropTypes.number.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  isOwnProfile: PropTypes.bool.isRequired,
  fetchingUsername: PropTypes.string.isRequired,
  fetchProfile: PropTypes.func.isRequired,
  fetchFollowStatus: PropTypes.func.isRequired,
}

export default Profile

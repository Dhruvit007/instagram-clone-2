import {Component} from 'react'
import './index.css'

class Post extends Component {
  render() {
    return (
      <div className="post-container">
        <div>
          <div className="profile-pic-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/instagram-mini-project/users/instagram-mini-project-user-1-img.png"
              alt="hhh"
              className="profile-pic"
            />
          </div>
          <p>Leslie Alexander</p>
        </div>
      </div>
    )
  }
}

export default Post

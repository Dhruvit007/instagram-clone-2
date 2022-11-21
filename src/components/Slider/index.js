import React, {Component} from 'react'
import Slider from 'react-slick'

/* Add css to your project */
import './index.css'

const companyLogosData = [
  {
    id: 'd14af630-5d22-4bfb-85dd-bb507b139b82',
    url:
      'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/stories/instagram-mini-project-story-1-img.png',
  },
  {
    id: 'd14af630-5d22-4bfb-85dd-bb507b139b82',
    url:
      'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/stories/instagram-mini-project-story-1-img.png',
  },
  {
    id: 'd14af630-5d22-4bfb-85dd-bb507b139b82',
    url:
      'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/stories/instagram-mini-project-story-1-img.png',
  },
  {
    id: 'd14af630-5d22-4bfb-85dd-bb507b139b82',
    url:
      'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/stories/instagram-mini-project-story-1-img.png',
  },
  {
    id: 'd14af630-5d22-4bfb-85dd-bb507b139b82',
    url:
      'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/stories/instagram-mini-project-story-1-img.png',
  },
  {
    id: 'd14af630-5d22-4bfb-85dd-bb507b139b82',
    url:
      'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/stories/instagram-mini-project-story-1-img.png',
  },
  {
    id: 'd14af630-5d22-4bfb-85dd-bb507b139b82',
    url:
      'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/stories/instagram-mini-project-story-1-img.png',
  },
  {
    id: 'd14af630-5d22-4bfb-85dd-bb507b139b82',
    url:
      'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/stories/instagram-mini-project-story-1-img.png',
  },
  {
    id: 'd14af630-5d22-4bfb-85dd-bb507b139b82',
    url:
      'https://assets.ccbp.in/frontend/react-js/instagram-mini-project/stories/instagram-mini-project-story-1-img.png',
  },
]

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
}

class ReactSlick extends Component {
  renderSlider = () => (
    <Slider {...settings}>
      {companyLogosData.map(eachLogo => {
        const {id, url} = eachLogo
        return (
          <div className="slick-item" id="custom-story-style" key={id}>
            <div className="image-story-container">
              <img className="logo-image" src={url} alt="company logo" />
            </div>
            <p className="story-user-name">name</p>
          </div>
        )
      })}
    </Slider>
  )

  render() {
    return (
      <div className="main-container">
        <div className="slick-container">{this.renderSlider()}</div>
      </div>
    )
  }
}

export default ReactSlick

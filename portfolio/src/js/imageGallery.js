
const el = React.createElement;



class imageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: 1 };
  }

  render() {
    if (this.state.liked == 2) {
      return el('button', {onClick: () => this.setState({ liked: 3 }) },
      React.createElement('img', {src: "../css/img/barako.png", alt: 'Barako'}));
    }

    if (this.state.liked == 3) {
      return el('button', {onClick: () => this.setState({ liked: 1 }) },
      React.createElement('img', {src: '../css/img/mainarea.png', alt: 'Main Area'}));
    }

    return el(
      'button',
      { onClick: () => this.setState({ liked: 2 }) },
      React.createElement('img', {src: '../css/img/plantspider.png', alt: 'Plant Spider'}));
  }
}

const galleryContainer = document.querySelector('#gallery_container');
ReactDOM.render(el(imageGallery), galleryContainer);
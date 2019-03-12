import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      images: []
    }
  }

  componentDidMount(){
    fetch('https://www.instagram.com/explore/tags/casade28/?__a=1')
      .then((response) => {
        return response.json();
      }).then((result) => {
        this.setState({images: result.graphql.hashtag.edge_hashtag_to_media.edges});
      });
  }

  renderImages(){
    return(
      this.state.images.map((image) => {
        return (
          <img key={image.node.id} className="images" src={image.node.display_url} />
        )
      })
    )
  }

  render() {
    return (
      <div className="App">
        <h3>Postem imagens no Instagram com a #casade28 para testar</h3>
        {this.renderImages()}
      </div>
    );
  }
}

export default App;

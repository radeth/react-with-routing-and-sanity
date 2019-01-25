import React, { Component } from "react";
import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: "jslptlpf",
  dataset: "production",
  useCDN: true
});

class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    client.fetch('*[_type == "post"]').then(posts => this.setState({ posts }));
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          {this.state.posts.map(post => (
            <li key={post._id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;

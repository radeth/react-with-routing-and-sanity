import React, { Component } from "react";
import sanityClient from "@sanity/client";
import { Link } from "react-router-dom"
const client = sanityClient({
  projectId: "jslptlpf",
  dataset: "production",
  useCdn: true
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
            {console.log(this.state.posts)}
          {this.state.posts.map((post)=>{
              let path = `/post/${post._id}`
              return(
                  <li key={post._id}><Link to={path}>{post.title}</Link></li>
              )
          })}
        </ul>
      </div>
    );
  }
}

export default Home;

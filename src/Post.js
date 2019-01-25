import React, { Component } from "react";
import sanityClient from "@sanity/client";
const client = sanityClient({
    projectId: "jslptlpf",
    dataset: "production",
    useCdn: true
  });
class Post extends Component {
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
                <h1>Post</h1>
                {/* {console.log(this.props.match.params.id)} */}
                {this.state.posts.map(post=>{
                    if(post._id===this.props.match.params.id){
                      return <p>{post.body[0].children[0].text}</p>
                    }
                })}
            </div>
        );
    }
}

export default Post;
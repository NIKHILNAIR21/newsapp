import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h4>NewsMonkey -Top headlines</h4>
        <div className="row">
          <div className="col md-4">
            <NewsItem title="MY NEWS" description="First news " />
          </div>
          <div className="col md-4">
            <NewsItem title="MY NEWS" description="First news " />
          </div>
          <div className="col md-4">
            <NewsItem title="MY NEWS" description="First news " />
          </div>
          <div className="col md-4">
            <NewsItem title="MY NEWS" description="First news " />
          </div>
          <div className="col md-4">
            <NewsItem title="MY NEWS" description="First news " />
          </div>
          <div className="col md-4">
            <NewsItem title="MY NEWS" description="First news " />
          </div>
          <div className="col md-4">
            <NewsItem title="MY NEWS" description="First news " />
          </div>
          <div className="col md-4">
            <NewsItem title="MY NEWS" description="First news " />
          </div>
        </div>
      </div>
    );
  }
}

export default News;

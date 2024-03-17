import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Sep 26, 2021"
          text="5 social media apps you should be paying attention to"
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Sep 26, 2021"
          text="How to reach out for guest posts to increase your SEO authority"
        />
        <Article
          imgUrl={blog03}
          date="Sep 26, 2021"
          text="How to create an effective content plan for your social media accounts"
        />
        <Article
          imgUrl={blog04}
          date="Sep 26, 2021"
          text="How to increase your Facebook reach by over 200% with this simple trick"
        />
        <Article
          imgUrl={blog05}
          date="Sep 26, 2021"
          text="How to grow your sales with AI Tools"
        />
      </div>
    </div>
  </div>
);

export default Blog;

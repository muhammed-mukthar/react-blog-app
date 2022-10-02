import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sr</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores
        minus est quae, omnis, ad natus eveniet dolorum, officia laboriosam quod
        optio ea non doloremque porro? Natus maiores veritatis architecto.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores
        minus est quae, omnis, ad natus eveniet dolorum, officia laboriosam quod
        optio ea non doloremque porro? Natus maiores veritatis architecto.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores
        minus est quae, omnis, ad natus eveniet dolorum, officia laboriosam quod
        optio ea non doloremque porro? Natus maiores veritatis architecto.
      </p>
    </div>
  );
}

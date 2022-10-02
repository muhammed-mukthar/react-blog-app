import "./Singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostedit">
            <i className="SinglePostIcon  fa-regular fa-pen-to-square"></i>
            <i className="SinglePostIcon  fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostinfo">
          <span className="SinglePostAuthor">
            Autor: <b>Mukthar</b>
          </span>
          <span className="SinglePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          exercitationem nam magni esse maiores quod alias in saepe odit. Id
          quaerat fugit in non quasi minima fuga maiores at dolores.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          exercitationem nam magni esse maiores quod alias in saepe odit. Id
          quaerat fugit in non quasi minima fuga maiores at dolores.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          exercitationem nam magni esse maiores quod alias in saepe odit. Id
          quaerat fugit in non quasi minima fuga maiores at dolores.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          exercitationem nam magni esse maiores quod alias in saepe odit. Id
          quaerat fugit in non quasi minima fuga maiores at dolores.
        </p>
      </div>
    </div>
  );
}

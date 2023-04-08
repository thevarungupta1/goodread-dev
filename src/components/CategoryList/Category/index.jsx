import { Link } from "react-router-dom";
const Category = (props) => {
  const { catId, catName } = props.data;
  return (
    <div class="col-sm-3">
      <Link to='/book'>
      <div class="card">
        <img
          src="https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/134557216-no-thumbnail-image-placeholder-for-forums-blogs-and-websites.jpg?ver=6"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{catName}</h5>
        </div>
      </div>
      </Link>
    </div>
  );
};
export default Category;

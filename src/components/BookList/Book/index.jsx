import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux-module/actions/cart-action';
const Book = (props) => {
  const { title, image } = props.data;
  const dispatch = useDispatch()

  const onClickHandler = () => {
    dispatch(addToCart(props.data))
  }

  return (
    <div class="col-sm-3">
      <div class="card">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text"></p>
          <button onClick={onClickHandler} class="btn btn-dark btn-block">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Book;

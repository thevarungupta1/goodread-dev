import BookData from "../../data/book";
import Book from "./Book";

const BookList = () => {
  return (
    <div>
      <h2 className="text-center">All Books</h2>
      <div class="row">
        {BookData.map((book) => (
          <Book data={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;

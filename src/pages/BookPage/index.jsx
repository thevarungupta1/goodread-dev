import Navbar from '../../components/Navbar'
import BookList from '../../components/BookList'

const BookPage = () => {
    return (
     <>
        <Navbar />
        <div className="container">
            <BookList />
        </div>
     </>
    )
}
export default BookPage;
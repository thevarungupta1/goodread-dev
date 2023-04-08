import Category from "./Category";

const CategoryList = () => {
  const items = [
    { catId: 1, catName: "Fiction" },
    { catId: 2, catName: "History" },
    { catId: 3, catName: "Science" },
    { catId: 4, catName: "External Affairs" },
  ];

  return (
    <div>
      <h2 className="text-center">All Categories</h2>
      <div class="row">
        {
            items.map((category) => <Category data={ category } />)
        }
      </div>
    </div>
  );
};
export default CategoryList;

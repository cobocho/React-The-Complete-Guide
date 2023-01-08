import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    title: "Book",
    price: 6,
    description: "This is a first product - amazing!",
    id: "p1",
  },
  {
    title: "Milk",
    price: 4,
    description: "Super Milk",
    id: "p2",
  },
];

const Products = (props) => {
  const ProductItemContent = DUMMY_PRODUCT.map((product) => {
    return (
      <ProductItem
        title={product.title}
        price={product.price}
        description={product.description}
        id={product.id}
        key={product.id}
      />
    );
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{ProductItemContent}</ul>
    </section>
  );
};

export default Products;

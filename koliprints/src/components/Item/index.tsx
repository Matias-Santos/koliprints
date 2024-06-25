import "./styles.scss";

export default function Item({
  title,
  image,
  imageAlt,
  description,
  price,
  discount,
  rating,
  freeShipping,
  options,
}: {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  price: number;
  discount: number;
  rating: number;
  freeShipping: boolean;
  options: { title: string; options: string[] }[];
}) {
  const handlePurchase = () => {
    console.log(
      `Purchasing item with options: null` //!TODO
    );
  };

  return (
    <div className="item">
      <img src={image} alt={imageAlt} className="product-image" />
      <p className="title">{title}</p>
      {Array.from({ length: Math.floor(rating) }).map(() => (
        <img
          src="https://cdn-icons-png.flaticon.com/512/16746/16746024.png"
          alt="Rating star"
          className="rating-img"></img>
      ))}
      <p className="item-desc">{description}</p>
      {price > discount && discount > 0 ? (
        <>
          <p className="price-discounted">${price}</p>
          <p className="discount">${discount}</p>
        </>
      ) : (
        <p className="price">${price}</p>
      )}
      {freeShipping ? (
        <div className="free-shipping">
          <p>Free Shipping</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/252/252851.png"
            alt="Lightning bolt image"
            className="free-shipping-img"></img>
        </div>
      ) : null}
      <div className="atc-button">
        <button onClick={handlePurchase} className="button">
          Add to cart
        </button>
      </div>
    </div>
  );
}

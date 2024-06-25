import { useState, useEffect, useRef } from "react";

import Item from "../Item";
import { ItemT } from "../../types/itemT.type";
import { itemsMock } from "../../mocks/itemsMock";
import "./styles.scss";

export default function Carousel() {
  const [items, setItems] = useState<ItemT[]>([]);
  useEffect(() => {
    setItems(itemsMock);
    console.log(itemsMock);
  }, []);

  const handleOnTapLeft = () => {};
  const handleOnTapRight = () => {};

  return (
    <div className="carousel" id="carouselId">
      <button onClick={handleOnTapLeft}>
        <img className="buttonLeft"></img>
      </button>
      {items.map((i) => (
        <Item
          key={`${i.title}-filter`}
          title={i.title}
          image={i.image}
          imageAlt={i.imageAlt}
          description={i.description}
          price={i.price}
          discount={i.discount}
          rating={i.rating}
          freeShipping={i.freeShipping}
          options={i.options}
        />
      ))}
      <button onClick={handleOnTapRight}>
        <img className="buttonLeft"></img>
      </button>
    </div>
  );
}

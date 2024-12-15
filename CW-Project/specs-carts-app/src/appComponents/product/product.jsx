import { useEffect } from 'react';
import { useMyContext } from "../contextApi/context"
import ImageCard from "../home/imgCard"
import ProductCard from "./prodcutCard"


const data = [
    {
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13037-f-im-rect-way-ace-crl-ue-trt-c6-eyeg_g_0532.jpg",
    beds: 3,
    title: "LensKart Air",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
  },
    {
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13037-f-im-rect-way-ace-crl-ue-trt-c6-eyeg_g_0532.jpg",
    beds: 3,
    title: "LensKart Air",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
  },
    {
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13037-f-im-rect-way-ace-crl-ue-trt-c6-eyeg_g_0532.jpg",
    beds: 3,
    title: "LensKart Air",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
  },
    {
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13037-f-im-rect-way-ace-crl-ue-trt-c6-eyeg_g_0532.jpg",
    beds: 3,
    title: "LensKart Air",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
  },
    {
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13037-f-im-rect-way-ace-crl-ue-trt-c6-eyeg_g_0532.jpg",
    beds: 3,
    title: "LensKart Air",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
  },
    {
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13037-f-im-rect-way-ace-crl-ue-trt-c6-eyeg_g_0532.jpg",
    beds: 3,
    title: "LensKart Air",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
  },
    {
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-full-rim-rectangle-lenskart-air-classic-la-e15019-c3-eyeglasses_g_8694_09_09_2022.jpg",
    beds: 3,
    title: "LensKart Air",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
  },
    {
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-full-rim-rectangle-lenskart-air-classic-la-e15019-c3-eyeglasses_g_8694_09_09_2022.jpg",
    beds: 3,
    title: "LensKart Air",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
  },
    {
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-full-rim-rectangle-lenskart-air-classic-la-e15019-c3-eyeglasses_g_8694_09_09_2022.jpg",
    beds: 3,
    title: "LensKart Air",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
  },
    {
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-full-rim-rectangle-lenskart-air-classic-la-e15019-c3-eyeglasses_g_8694_09_09_2022.jpg",
    beds: 3,
    title: "LensKart Air",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
  },
    {
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-full-rim-rectangle-lenskart-air-classic-la-e15019-c3-eyeglasses_g_8694_09_09_2022.jpg",
    beds: 3,
    title: "LensKart Air",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
  },
    {
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-full-rim-rectangle-lenskart-air-classic-la-e15019-c3-eyeglasses_g_8694_09_09_2022.jpg",
    beds: 3,
    title: "LensKart Air",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
  },
    {
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/gunmetal-blue-full-rim-rectangle-vincent-chase-sleek-steel-vc-e14937-c1-eyeglasses_g_3184_7_22_22.jpg",
    beds: 3,
    title: "LensKart Air",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
  },
    {
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/gunmetal-blue-full-rim-rectangle-vincent-chase-sleek-steel-vc-e14937-c1-eyeglasses_g_3184_7_22_22.jpg",
    beds: 3,
    title: "LensKart Air",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
  },
    {
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/gunmetal-blue-full-rim-rectangle-vincent-chase-sleek-steel-vc-e14937-c1-eyeglasses_g_3184_7_22_22.jpg",
    beds: 3,
    title: "LensKart Air",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
  },
    {
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/gunmetal-blue-full-rim-rectangle-vincent-chase-sleek-steel-vc-e14937-c1-eyeglasses_g_3184_7_22_22.jpg",
    beds: 3,
    title: "LensKart Air",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
  },
    {
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/gunmetal-blue-full-rim-rectangle-vincent-chase-sleek-steel-vc-e14937-c1-eyeglasses_g_3184_7_22_22.jpg",
    beds: 3,
    title: "LensKart Air",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
  },
    {
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/peyush-bansal-shark-tank-graphite-full-rim-lenskart-hustlr-eyeglasses_img_9717_14march24.jpg",
    beds: 3,
    title: "LensKart Air",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
  },
    {
    imageUrl: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/peyush-bansal-shark-tank-graphite-full-rim-lenskart-hustlr-eyeglasses_img_9717_14march24.jpg",
    beds: 3,
    title: "LensKart Air",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
  },
]
function Product() {
  let { cart, setCart } = useMyContext();

  // Function to add an item to the cart
  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, item];
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Store updated cart in local storage
      alert("Item added to cart");
      return updatedCart;
    });
  };

  // Retrieving the cart from local storage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // Parse and set the cart
    }
  }, [setCart]); // Add setCart to the dependency array

  return (
    <>
      <ImageCard url={"https://static1.lenskart.com/media/desktop/img/3-dec-24/Home-harmony-desktop-extra500-plp-1.png"} />
      <div>
        <div className="heading-container"></div>
        <div className="product-container">
          {data.map((item, i) => (
            <ProductCard
              key={i}
              url={item.imageUrl}
              title={item.title}
              price={item.formattedPrice}
              reviewCount={item.reviewCount}
              rating={item.rating}
              onAddToCart={() => handleAddToCart(item)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Product


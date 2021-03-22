import React from 'react';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
          <div className="checkout__left">
            <img 
                className="checkout__ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
            />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>Click "Add to Basket" under the item you want to put in your basket.</p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {/*  List of all the products for checkout */}
                    {basket?.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}
          </div>
          {basket.length > 0 && (
              <div className="checkout__right">
                <Subtotal />
              </div>
              )}
        </div>
    );
}

export default Checkout

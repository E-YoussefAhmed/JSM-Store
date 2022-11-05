import React, { useEffect, useRef } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from "react-hot-toast";
import Success from "../pages/success";
import Link from "next/link";

const Paypal = ({ subtotal, close }) => {
  const total = subtotal * 1.02;
  const paypal = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, error) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "JSM Store",
                amount: {
                  currency_code: "USD",
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          toast.success(`Purchase completed successfully`);
          location.href = `${location.protocol}//${location.host}/success`;
        },
        onError: (err) => {
          console.log(err);
          toast.error(`Purchase uncompleted`);
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div className="paypal-page">
      <div className="paypal-container">
        <div className="receipt">
          <h2>Shipping Cart</h2>
          <p>
            Subtotal: <span>${subtotal}</span>
          </p>
          <p>
            Shipping fee: <span>FREE</span>
          </p>
          <p>
            Tax: <span>${(subtotal * 0.02).toFixed(2)}</span>
          </p>
          <h4>
            Order Total: <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <div className="paypal-button" ref={paypal}></div>
        <div className="close-btn">
          <button
            type="button"
            className="remove-item-p"
            onClick={() => close(false)}
          >
            <TiDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paypal;

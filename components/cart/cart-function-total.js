import React from "react";
import style from "./cart.module.scss";
import { FaRegCheckCircle } from "react-icons/fa";
export default function CartTotal() {
  return (
    <div className={`${style.r_cart_total} pixel-border-purple bg-purple`}>
      <div className={style.col_cart_total}>
        <div>
          <span>商品小計</span>
          <span>800</span>
        </div>
        <div>
          <span>點數折抵</span>
          <span>0</span>
        </div>
        <hr />
        <div>
          <span>總計</span>
          <span>$7730</span>
        </div>
      </div>
    </div>
  );
}

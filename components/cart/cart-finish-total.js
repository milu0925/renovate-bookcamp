import React from "react";
import style from "./cart.module.scss";
import { FaRegCheckCircle } from "react-icons/fa";
export default function CartFinishTotal() {
  return (
    <div className={`${style.r_cart_total} pixel-border-purple bg-purple`}>
      <div className={style.col_cart_user}>
        <div>
          <span>購買人</span>
          <span>筠筠</span>
        </div>
        <div>
          <span>電話</span>
          <span>098252315</span>
        </div>
        <div>
          <span>地址</span>
          <span>高雄市鳳山區峰城路123號</span>
        </div>
      </div>
      <div className={style.col_cart_total_finish}>
        <FaRegCheckCircle />
        商品共<span className="bg-dark-purple">5</span>項
      </div>
      <div className={style.col_cart_total_finish}>
        <FaRegCheckCircle />
        付款方式<span className="bg-dark-purple">linepay</span>
      </div>
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

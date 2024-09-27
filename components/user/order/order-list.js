import React, { useEffect, useState } from "react";
import style from "../user.module.scss";
import { FaUser } from "react-icons/fa";
import { read_all_order } from "@/hooks/call-api";
import Pagination from "@/components/pagination";
import { useRouter } from "next/router";
export default function OrderList() {
  const [orderdata, setOrderdata] = useState([]);
  useEffect(() => {
    getdata();
  }, [getdata]);
  const getdata = async () => {
    const data = await read_all_order();
    if (data?.message === "success") {
      setOrderdata(data.data);
    }
  };

  // 目前頁面
  const [ctPage, setctPage] = useState(1);
  // 每頁顯示資料數量
  const PerPage = 5;
  // 計算顯示資料的範圍
  const indexOfLastItem = ctPage * PerPage; //當前頁最後一筆資料的索引。
  const indexOfFirstItem = indexOfLastItem - PerPage; //當前頁第一筆資料的索引。
  const currentOrders = orderdata.slice(indexOfFirstItem, indexOfLastItem); // 拆分好分頁的顯示物

  // 前往單頁明細
  const router = useRouter();
  const handleDetail = async (id) => {
    router.push(`/user/order/${id}`);
  };
  // 前往付款畫面
  const handlePay = async (url) => {
    router.push(url);
  };
  return (
    <>
      <div
        className={`${style.col_user_order} bg-color-purple pixel-border-purple`}
      >
        <div
          className={`${style.user_title_block} ${style.user_edit_information_title}`}
        >
          <div>
            <FaUser />
            <span>我的訂單</span>
          </div>
          <div></div>
        </div>
        <div className={`${style.user_order_content}`}>
          <div className={`${style.user_content_list} ${style.title_color}`}>
            <div>訂單編號</div>
            <div>訂單日期</div>
            <div>消費金額</div>
            <div>付款方式</div>
            <div>訂單狀態</div>
            <div>其他</div>
          </div>
          {currentOrders.map((v) => (
            <div key={v.o_id} className={style.user_content_list}>
              <div>{v.o_id}</div>
              <div>{v.o_create_date}</div>
              <div>{v.total}</div>
              <div>{v.pay === 1 ? "linepay" : "貨到付款"}</div>
              <div>{v.o_status === 1 ? "已付款" : "未付款"}</div>
              <div className={style.fn_group}>
                <button
                  className={style.view_detail}
                  onClick={() => {
                    handleDetail(v.o_id);
                  }}
                >
                  查看明細
                </button>
                {v.pay === 1 && v.o_status === 0 ? (
                  <button
                    className={style.go_pay}
                    onClick={() => {
                      handlePay(v.linepay_url);
                    }}
                  >
                    前往付款
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
        <Pagination
          total={orderdata}
          ctPage={ctPage}
          setctPage={setctPage}
          PerPage={PerPage}
        />
      </div>
    </>
  );
}

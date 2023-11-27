"use client";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThreeCircles } from "react-loader-spinner";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const handlesendUrlByEmail = async (
    given_name,
    family_name,
    email,
    invoice_pdf
  ) => {
    try {
      const templateParams = {
        to_name: `${given_name} ${family_name}`,
        from_name: "Your Name", // Replace with your name
        from_email: process.env.NEXT_PUBLIC_EMAILJS_From_Email_KEY, // Replace with your email
        to_email: email,
        invoice_link: invoice_pdf,
      };
 
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"  ,  process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY,process.env.NEXT_PUBLIC_EMAIL_SECRET_KEY,
  process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY)
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY,
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_SECRET_KEY
      );

      console.log("Email sent:", response.text);
    } catch (error) {
      console.error("Error sending email:", error.text);

    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/adminOrder");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data);
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  const lastFiveTransactions = orders?.adminOrders?.slice(-9).reverse().map((item) => {
    const transaction = {}; // Initialize 'transaction' object for each item

    const transactionId = item.userOrderPaymentInfoDetails[0]?.transactionId;
    const paidAmount = Math.trunc(item.userOrderPaymentInfoDetails[0]?.amount_total);
    const CustomerName = item.usersIdDetails[0]?.given_name;
    transaction.id = transactionId;
    transaction.paidAmount = paidAmount;
    transaction.CustomerName = CustomerName;
    return transaction; // Return 'transaction' object for each item
  });

  const dayRevenueCollection = {}; // Initialize 'dayRevenueCollection' object outside of the map

  const dailyCollection = orders?.adminOrders?.map((item  ) => {
    const date = item.userOrderPaymentInfoDetails[0]?.orderDate.slice(0, item.userOrderPaymentInfoDetails[0]?.orderDate.indexOf("T"));
    const revenue = Math.trunc(item.userOrderPaymentInfoDetails[0]?.amount_total);

     const count = item?.userOrderedProductDetails[0]?.products.length;

    if (dayRevenueCollection[date]) {
      dayRevenueCollection[date].revenue += revenue;
      dayRevenueCollection[date].count += count;
    } else {
      dayRevenueCollection[date] = {
        date,
        revenue,
        count: count,
      };
    }

    return dayRevenueCollection[date]; // Return the updated dayRevenueCollection for each item
  });
  dailyCollection ? sessionStorage.setItem('dailyRevenueArray', JSON.stringify(dailyCollection)) : console.log("dailyCollection is not available. Data not stored in sessionStorage.");
  lastFiveTransactions ? sessionStorage.setItem('lastFiveTransactions', JSON.stringify(lastFiveTransactions)) : console.log("lastFiveTransactions is not available. Data not stored in sessionStorage.");


if(loading) return (<div className="d-flex justify-content-center align-items-center vh-100"><ThreeCircles/></div>)  
  return (
       <>
        <div>
          <div className="container-fluid  ">
            <div className="table-responsive-lg   ">

              <table className="table table-hover table-dark table-bordered table-striped">
                <thead   >
                  {/* border border-3 border-info */}
                  {/* d-none d-sm-none d-md-inline d-lg-inline */}
                  <tr>
                    <th className="text-center align-middle d-none col-md-2 d-md-table-cell">DATE</th>
                    <th className="text-center align-middle col-md-5">Product Title</th>
                    <th className="text-center align-middle col-md-1">Quantity</th>
                    <th className="text-center align-middle d-none d-md-table-cell">TOTAL_AMOUNT</th>
                    <th className="text-center align-middle d-none d-md-table-cell">RECIPIENT</th>
                    <th className="text-center align-middle">FINAL_PAYMENT</th>
                    <th className="text-center align-middle">INVOICE</th>
                  </tr>

                </thead>

                <tbody>
                  {orders?.adminOrders?.map((item, ind) => (
                    <tr key={ind}>
                      <td className="align-middle  d-none text-center d-md-table-cell">
                        {item.userOrderPaymentInfoDetails[0]?.orderDate.slice(0, item.userOrderPaymentInfoDetails[0]?.orderDate.indexOf("T"))}
                      </td>

                      <td colSpan="2">
                        <table className="table  table-hover table-white table-bordered  ">
                          <tbody>
                            {item.userOrderedProductDetails[0]?.products.map(
                              (product, p_index) => (
                                <tr key={p_index} className="mt-4 ">
                                  <td className="text-center align-middle small">
                                    {product?.title.slice(0, 50)}
                                  </td>
                                  <td className="text-center align-middle bg-primary">
                                    {product?.quantity}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </td>
                      <td className="text-center align-middle d-none d-md-table-cell ">
                        ₹{Math.trunc(item.userOrderPaymentInfoDetails[0]?.amount_total)}
                      </td>
                      {/* <td><button className="btn btn-danger align-middle">Pending</button></td> */}
                      <td className="small fw-light text-center align-middle d-none d-md-table-cell">
                        {`${item.userAddressDetails[0]?.street}, ${item.userAddressDetails[0]?.city}, ${item.userAddressDetails[0]?.pincode}, ${item.userAddressDetails[0]?.mobileNumber}, ${item.userAddressDetails[0]?.email}, ${item.userAddressDetails[0]?.country}, ${item.userAddressDetails[0]?.state}`}
                      </td>
                      <td className="text-center align-middle">
                        <button className="btn btn-success">
                          {item.userOrderPaymentInfoDetails[0]?.FinalPaymentStatus.substring(
                            item.userOrderPaymentInfoDetails[0]?.FinalPaymentStatus.lastIndexOf(
                              "."
                            ) + 1
                          )}
                        </button>
                      </td>
                      <td className="text-center align-middle">
                        <button
                          className="btn btn-warning"
                          onClick={() => handlesendUrlByEmail(
                            item.usersIdDetails[0]?.given_name,
                            item.usersIdDetails[0]?.family_name,
                            item.usersIdDetails[0]?.email,
                            item.userOrderPaymentInfoDetails[0]?.Invoice_url
                          )}
                        >
                          Send
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </>
 

  );
};

export default Orders;

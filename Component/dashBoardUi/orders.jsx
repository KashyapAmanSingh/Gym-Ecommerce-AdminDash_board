"use client";
import React, {  useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

// emailjs.send;
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
   // const sendEmail = async () => {
  //   try {
  //     const templateParams = {
  //       to_name: "Recipient Name",
  //       from_name: "Your Name",
  //       from_email: "arbalaji457@gmail.com",
  //        to_email: "itsevolution7@gmail.com",
  //       invoice_link: "https://your-invoice-link.com",
  //     };

  //     const response = await  emailjs.send(
  //       "service_3m51kkn",
  //       "template_ueu00mc",
  //       templateParams,
  //       "x6kK401MTrP5n9G7U"
  //     );

  //     console.log("Email sent___________________________________!!!!!!!!!!!!*****************:", response.text);
  //     return response; // If you want to return something
  //   } catch (error) {
  //     console.error("Error sending email:", error.text);
  //     throw error; // Throw the error if you want to handle it outside
  //   }
  // };

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
        from_email: "arbalaji457@gmail.com", // Replace with your email
        to_email: email,
        invoice_link: invoice_pdf,
      };

      const response = await emailjs.send(
        "service_3m51kkn",
        "template_ueu00mc",
        templateParams,
        "x6kK401MTrP5n9G7U"
      );

      console.log("Email sent:", response.text);
      // Do something after sending the email if needed
    } catch (error) {
      console.error("Error sending email:", error.text);
      // Handle errors here
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


  const dayRevenueCollection = {};
  orders?.adminOrders?.map((item, ind) => {
    const date = item.userOrderPaymentInfoDetails[0].orderDate.slice(0, item.userOrderPaymentInfoDetails[0].orderDate.indexOf("T"));
    const revenue = Math.trunc(item.userOrderPaymentInfoDetails[0].amount_total);

    console.log(item?.userOrderedProductDetails[0]?.products.length,"--------------------------------")
    const  count=item?.userOrderedProductDetails[0]?.products.length;
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
    
    const dayRevenueArray = Object.entries(dayRevenueCollection).map(([date, data]) => {
      const { revenue, count } = data;
      return {
        date,
        revenue,
      count,
      };
    });
    

    sessionStorage.setItem('dayRevenueArray', JSON.stringify(dayRevenueArray));
    console.log("✨ ✨ ✨ ✨ ✨ ✨ ✨ ✨  ======================>>>>>>>>>>>>>dayRevenueArray dayRevenueArray ", dayRevenueArray )

  });
  // console.log("😘😘😘😘😘😘😘😘😘😘😘😘 ======================>>>>>>>>>>>>>dayRevenueCollection dayRevenueCollection", dayRevenueCollection)

  return (
    <>
      <div>
        <div className="container-fluid mt-3">
          <div className="table-responsive-lg">
            {/* table-dark */}
            <table className="table table-hover table-dark table-bordered table-striped">
              <thead>
                <tr>
                  <th className="text-center align-middle">DATE</th>
                  <th className="text-center align-middle">Title</th>
                  <th className="text-center align-middle">Quantity</th>

                  <th className="text-center align-middle">TOTAL_AMOUNT </th>
                  <th className="text-center align-middle">RECIPIENT</th>
                  <th className="text-center align-middle">FINAL_PAYMENT</th>
                  <th className="text-center align-middle">INVOICE</th>
                </tr>
              </thead>

              <tbody>
                {orders?.adminOrders?.map((item, ind) => (
                  <tr key={ind}>
                    <td className="align-middle">
                      {item.userOrderPaymentInfoDetails[0].orderDate}
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
                    <td className="text-center align-middle ">
                      ₹{Math.trunc(item.userOrderPaymentInfoDetails[0].amount_total)}
                    </td>
                    {/* <td><button className="btn btn-danger align-middle">Pending</button></td> */}
                    <td className="small fw-light text-center align-middle">
                      {`${item.userAddressDetails[0].street}, ${item.userAddressDetails[0].city}, ${item.userAddressDetails[0].pincode}, ${item.userAddressDetails[0].mobileNumber}, ${item.userAddressDetails[0].email}, ${item.userAddressDetails[0].country}, ${item.userAddressDetails[0].state}`}
                    </td>
                    <td className="text-center align-middle">
                      <button className="btn btn-success">
                        {item.userOrderPaymentInfoDetails[0].FinalPaymentStatus.substring(
                          item.userOrderPaymentInfoDetails[0].FinalPaymentStatus.lastIndexOf(
                            "."
                          ) + 1
                        )}
                      </button>
                    </td>
                    <td className="text-center align-middle">
                      <button
                        className="btn btn-warning"
                        onClick={() => handlesendUrlByEmail(
                          item.usersIdDetails[0].given_name,
                          item.usersIdDetails[0].family_name,
                          item.usersIdDetails[0].email,
                          item.userOrderPaymentInfoDetails[0].Invoice_url
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

//show orders of the current order titiel may be one image,payment.address,user icon onclick user detail payment sttus and final status

{
  /* <th className="text-center align-middle">DISCOUNT</th> */
}

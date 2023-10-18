// pages/api/admin/getAllAdminOrders.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import mongoose from "mongoose";

export async function GET() {
  try {
    await connectMongoDB();

 
    const adminOrdersWithDetails = await mongoose.connection
      .collection("adminorders")
      .aggregate([
        {
          $lookup: {
            from: "useraddresses",
            localField: "userAddress",
            foreignField: "_id",
            as: "userAddressDetails",
          },
        },
        {
          $lookup: {
            from: "orderpaymentinfos",
            localField: "orderPaymentInfo",
            foreignField: "_id",
            as: "userOrderPaymentInfoDetails",
          },
        },
        {
          $lookup: {
            from: "orderedproductdetails",
            localField: "orderedProductDetail",
            foreignField: "_id",
            as: "userOrderedProductDetails",
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "usersIdDetails",
          },
        },
      ])
      .toArray();

    console.log(
      "Admin Orders with Details~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~:",
      adminOrdersWithDetails
    );

    return NextResponse.json({
      message: "Fetched successfully",
      adminOrders: adminOrdersWithDetails,
    });
  } catch (error) {
    console.error("Error fetching admin orders:", error);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}

console.log(
  "___________________________________________________________________________________________________________________________________________________"
);

// // const AdminOrder = mongoose.model("adminorders");

// //    const adminOrdersFromCollection = await mongoose.connection.collection("adminorders").find({})
// // const AdminOrder = mongoose.model('AdminOrder');

// const AdminOrder = await AdminOrder.find({});
// // const AdminOrder = mongoose.model('adminorders');

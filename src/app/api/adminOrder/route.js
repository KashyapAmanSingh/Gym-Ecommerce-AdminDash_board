// pages/api/admin/getAllAdminOrders.js

import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import mongoose from "mongoose";

export async function GET() {
  try {
    await connectMongoDB();

    const adminOrder = await mongoose.connection
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
        {
          $sort: { orderDate: -1 }  
        },
      ])
      .toArray();

    return NextResponse.json({
      message: "Fetched successfully",
      adminOrders: adminOrder,
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

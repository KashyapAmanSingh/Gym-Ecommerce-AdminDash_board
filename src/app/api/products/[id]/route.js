import connectMongoDB from "../../../../../libs/mongodb";

import { NextResponse } from "next/server";
import Product from "../../../../../models/product";
  
export async function PUT(request, { params }) {
  const { id } = params;
  const {
     title,
     description,  
    price,
    stock,
    discount,
    offers,
    category,
    brand,
    seller,
    size,
    model,
    ratings,
    tags,
    legalDisclaimer,
    manufacturingInfo,
    dateAdded } = await request.json();
  await connectMongoDB();
  await Product.findByIdAndUpdate(id, {
    title,
    description,  
   price,
   stock,
   discount,
   offers,
   category,
   brand,
   seller,
   size,
   model,
   ratings,
   tags,
   legalDisclaimer,
   manufacturingInfo,
   dateAdded
  });
  return NextResponse.json(
    { message: "Updated successfully" },
    { status: 200 }
  );
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const product = await Product.findOne({ _id: id });
  return NextResponse.json({ product }, { status: 200 });
}

import connectMongoDB from "../../../../../libs/mongodb";
import Topic from "../../../../../models/topic";
import { NextResponse } from "next/server";


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
  await Topic.findByIdAndUpdate(id, {
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
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}

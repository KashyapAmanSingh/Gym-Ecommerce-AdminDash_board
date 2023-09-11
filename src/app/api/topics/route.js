import connectMongoDB from "../../../../libs/mongodb";
import Topic from "../../../../models/topic";
import { NextResponse } from "next/server";
  
export async function POST(request) {

  const {
    title,
    description,
    price,
    stock,
    discount,
    offers,
    category,
    subcategory,
    brand,
    seller,
    size,
    model,
    ratings,
    is_featured,
    tags,
    legalDisclaimer,
    manufacturingInfo,
    images,
    dateAdded,
  } = await request.json();
  await connectMongoDB();

  try {
     await Topic.create({
      title,
      description,
      price,
      stock,
      discount,
      offers,
      category,
      subcategory,
      brand,
      seller,
      size,
      model,
      ratings,
      is_featured,
      tags,
      legalDisclaimer,
      manufacturingInfo,
      images,
      dateAdded,
    });

     return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  } catch (error) {
     console.error(error);
    return NextResponse.error("Failed to create the topic", { status: 500 });
  }
}
export async function GET() {

  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics }, { status: 201 });
}

export async function DELETE(request) {

  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}

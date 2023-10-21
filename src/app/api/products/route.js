import connectMongoDB from "../../../../libs/mongodb";
 
import { NextResponse } from "next/server";
import Product from "../../../../models/product";
  
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
     await Product.create({
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

     return NextResponse.json({ message: "Product Created" }, { status: 201 });
  } catch (error) {
     console.error(error);
    return NextResponse.error("Failed to create the Product", { status: 500 });
  }
}
export async function GET() {
  await connectMongoDB();
  const products = await Product.find();
  return NextResponse.json({ products  }, { status: 201 });
}

export async function DELETE(request) {

  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: "Product deleted" }, { status: 200 });
}

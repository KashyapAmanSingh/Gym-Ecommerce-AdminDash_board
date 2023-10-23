import React from "react";
import Link from "next/link";
import Image from "next/image";
import notfoundimg from "../../public/notfoundimg.svg";
 export default function NotFound() {
  return (
    <div className="">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12  mb-0 mt-0 d-flex flex-column justify-content-center align-items-center vh-80">
          <h1 className="mt-5 mb-2 text-dark text-center fw-bold fs-2 text-info">
  Oops! It appears you have entered the admin Dashboard&apos;s mystical realm.
</h1>
 

            <Image
              priority
              src={notfoundimg}
              height={650}
              width={650}
              alt="Follow us on Twitter"
            />
          </div>
        </div>
        <Link
          className="d-flex flex-column justify-content-center align-items-center mt-0 mb-1"
          href="/"
        >
          Click To Go To Home
        </Link>
      </div>
    </div>
  );
}
import Image from 'next/image'
import React from 'react'
import logInFirst from "../../public/logInFirst.jpg"
export default function Home() {
  return (
    <>
      <p className="fw-bold text-center text-muted fs-1 mt-4 mb-2   ">
        Please First sign in first to get access!
      </p>
      <div className="  ">
        <Image
          src={logInFirst}
          alt='please Sign First to  get access'
          height={600}
          width={650}
          className="p-0  border border-2 border-muted  rounded mx-auto d-block"
        />
      </div>
    </>
  );

}

"use client"
import React, { useEffect, useState } from 'react';
import Removebtn from './Removebtn';
import { FcEditImage } from 'react-icons/fc';
import Link from 'next/link';
import   { Loader1 } from './Progress';

const getTopics = async () => {
  try {
    const apiPort = process.env.NEXT_PUBLIC_API_PORT || 3000;  
    const apiUrl = `http://localhost:${apiPort}/api/topics`;
    const res = await fetch(apiUrl, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics", error);
  }
}

export default function TopicList() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const { topics } = await getTopics();
        setTopics(topics);
      } catch (error) {
        console.error("Error loading topics", error);
      }
    };

    fetchTopics();
  }, []);
   return (
    <>
      {topics.map((value) => (   

        <div className='container-fluid mt-3 mb-4' key={value._id}>
          <div className='row'>
            <div className='d-flex'>
              <h2 className='fw-bold '>Topic Title: {value.title}</h2>

              <Removebtn id={value._id} />
              <div>
                <Link href={`/editTopic/${value._id}`}>
                  <FcEditImage /> Edit
                </Link>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='d-flex'>
              <h2 className='fw-bold ml-5'>Topic Description: {value.description}</h2>
              {
 value.images.length > 0 &&
 value.images.map((image, i) => {
   return (
     <img
       key={i}
       src={image}
       style={{ height: '150px', width: '200px' }}
       alt={`Image for ${value.title}`}
     />
   );
 })
 
}

            </div>
          </div>
        </div>
      ))}
      <div className='d-flex justify-content-center align-items-center'>    <Loader1/>       </div>
    </>
  );
}

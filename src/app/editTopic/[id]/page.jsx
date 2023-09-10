"use client";
import React from 'react';
import EditTopicForm from '../../../../Component/EditTopicForm';
 



const getTopicById = async (id) => {
  try {
    const apiPort = process.env.NEXT_PUBLIC_API_PORT || 3000;
    const apiUrl = `http://localhost:${apiPort}/api/topics/${id}`; 

    const res = await fetch(apiUrl, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch the topic');
    }
    const data = await res.json();
    console.error('data fetching topic:', data);
    return data;
  } catch (error) {
    console.error('Error fetching topic:', error);
    throw error;
  }
}



const editTopic = async ({ params }) => {
  const { id } = params;

  try {
    const { topic } = await getTopicById(id);
    if (topic) {
      
      return  <EditTopicForm topic={topic} id={id}/>;
    } else {
      return <div>Error: Topic not found for this ID</div>;
    }
  } catch (error) {
    console.error('Error editing topic:', error);
  }
}


export default editTopic;

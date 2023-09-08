import React from 'react'
import Removebtn from './Removebtn'
import { FcEditImage } from 'react-icons/fc';
import Link from 'next/link';

const TopicList = () => {
    return (<>
        <div className='container-fluid  '>
            <div className='row'>
                <div className='d-flex '>

                    <h2   className='fw-bold '>Topic Title</h2>
                    <Removebtn />
                    <div >            
                    <Link href={'/editTopic/123'}><FcEditImage /> Edit</Link> </div>
                    <div>

                    </div>

                </div>

            </div>
            <div className='row'>
                <div className='d-flex  '>
                    <h2  className='fw-bold ml-5'>Topic Description</h2>
                
                </div>
            </div>
        </div>
    </>
    )
}

export default TopicList
import React from 'react'

const EditTopicForm = () => {
  return (
    <div>
    <form>
    <input type="text" placeholder='Topic Title' />
    <br/>
        <input type="text" placeholder='Topic Description' />
  <br/>
  <button  className='btn btn-info mt-1'>Update topics</button>
    </form>
</div>
  )
}

export default EditTopicForm
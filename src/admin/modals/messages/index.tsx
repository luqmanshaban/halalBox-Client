import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Messages = () => {
  const [messages, setMessages] = useState([])

  const fetchEmails = async() => {
    try {
      const response = await axios.get('https://halalbox.cyclic.app/api/messages')
      setMessages(response.data.email)
      
    } catch (error) {
      console.error(error);
      
    }
  }

  const deleteEmail = async(id: string) => {
    try {
      await axios.delete(`https://halalbox.cyclic.app/api/messages/${id}`)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchEmails()
  },[])
  return (
    <div>
      <table className='w-full p-5 border border-black m-5 font-sans'>
        <thead className='w-full border border-gray-500 p-2 rounded-md'>
          <tr>
            <th className='border border-gray-800 p-2'>Names</th>
            <th className='border border-gray-800 p-2'>Email</th>
            <th className='border border-gray-800 p-2'>Subject</th>
            <th className='border border-gray-800 p-2'>Message</th>
            <th className='border border-gray-800 p-2'>Reply</th>
          </tr>
        </thead>
        <tbody>
          {
            messages.map((message: any, id) => (
              <tr key={id}>
                <td className='border border-gray-800 p-2 text-center'>{message.names}</td>
                <td className='border border-gray-800 p-2 text-center'>{message.email}</td>
                <td className='border border-gray-800 p-2 text-center'>{message.subject}</td>
                <td className='border border-gray-800 p-2 text-center'>{message.message}</td>
                <td className='border border-gray-800 p-2 text-center text-blue-700 font-bold underline' onClick={() => deleteEmail(message._id)}><a href={`mailto:${message.email}`}>Respond</a></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Messages
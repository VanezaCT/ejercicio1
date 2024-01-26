import React from 'react'

export default function loginForm() {
     
    const initialData={
        user:'',
        name: '',
        email:'',
        password: ''
    }
    
const [data, setData] = useState(initialData);

  return (
    <div>loginForm</div>
  )
}

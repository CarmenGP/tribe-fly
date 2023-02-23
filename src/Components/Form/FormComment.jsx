import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const url = 'https://.railway.app/api/comments'

const FormComment = () => {

    // estados de cada input del formulario
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [email, setEmail] = useState('');

    // redirecciona
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        
        await axios.post(url, {
            name : name, 
            email : email,
            comment: comment,
        })
       navigate('/')
    }


  return (
   <> <form onSubmit={store} >
            <div className='mb-3'>
                <label className='form-label'> Nombre</label>
                <input 
                value={name} 
                onChange={(e)=> setName(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> Correo eléctronico </label>
                <input 
                value={email} 
                onChange={(e)=> setEmail(e.target.value)} 
                type="text"  className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'> Correo eléctronico </label>
                <input 
                value={comment} 
                onChange={(e)=> setComment(e.target.value)} 
                type="text"  className='form-control'
                />
            </div>
            <button type="submit" className='btn btn-success'>Enviar</button>
        </form>
   </>
  )
}

export default FormComment
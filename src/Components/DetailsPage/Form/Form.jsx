import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Form.css';

function FormUpload() {
   /*  const [previewImage, setPreviewImage] = useState(null); */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [availability, setAvailability] = useState('');


/*   const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    const imageReader = new FileReader();

    imageReader.onload = () => {
      setPreviewImage(imageReader.result);
    };

    if (selectedImage) {
      imageReader.readAsDataURL(selectedImage);
    }
  };
 */
  const handleNameChange = (event) => {
    setName(event.target.value);

  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  }

  const handleSubmit = (event) => {
    event.prevetDefault();
    let newExpe = { name, email, message, availability};
    console.log(newExpe);
   /*  expeHandler.addProduct(newExpe); */
  }


  return (
    <Form onSubmit={handleSubmit}>
    {/*   <Form.Group className="mb-3">
        <Form.Label>Imagen:</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e)}
        />
        {previewImage && (
          <img src={previewImage} alt="Vista previa de la imagen" />
        )}
      </Form.Group>  */}

      <div className="mx-auto" style={{ width: '80%' }}>
      <Form.Group className='col-md-6'>
        <Form.Label htmlFor="textInput">Nombre:</Form.Label>
        <Form.Control
          id="textInput"
          value={name}
          onChange={handleNameChange}
          placeholder="Añadir nombre" />
      </Form.Group>

      
      <Form.Group className='col-md-6'>
            <Form.Label htmlFor="textInput">Email:</Form.Label>
            <Form.Control
              id="textInput"
              value={email}
              onChange={handleEmailChange}
              placeholder="Añadir Email" />
      </Form.Group>
      

      <Form.Group className='col-md-6'>
        <Form.Label htmlFor="textInput">Comentario:</Form.Label>
        <Form.Control
          id="textInput"
          value={message}
          onChange={handleMessageChange}
          placeholder="Añadir Comentario" />
      </Form.Group>

      <Form.Group className='col-md-6'>
        <Form.Label htmlFor="num Input">Consultar disponibilidad:</Form.Label>
        <Form.Control
          id="num Input"
          value={availability}
          pattern="[0-9,.]*"
          onChange={handleAvailabilityChange}
          placeholder="Consultar disponibilidad" />
      </Form.Group>
</div>

      <Button variant="primary" type="submit">
        Send
      </Button>
      
    </Form>

  );
}

export default FormUpload;

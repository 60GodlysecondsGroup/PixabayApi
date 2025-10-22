"use client"
import { useRef, useState } from "react";

export default function Home() {
  const [images, setImages] = useState([]);
  const imgRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const img = imgRef.current.value;
      const res = await fetch(`/api/info?q=${img}`);
      const data = await res.json();
      setImages(data);
    } catch (error) {
      console.error(error);
      alert("Error al obtener las imágenes");
    }
  };

  const handleImageClick = async (imgUrl, tags, user) => {
    try {
      const response = await fetch('/api/info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: user, // Ahora usamos el nombre del usuario de Pixabay
          imgUrl: imgUrl,
          tags: tags
        })
      });
      
      if (response.ok) {
        alert('Imagen guardada exitosamente!');
      }
    } catch (error) {
      console.error('Error al guardar la imagen:', error);
    }
  };
  
  return (
    <div className=" min-h-screen text-white p-6 flex flex-col items-center justify-center " style={{ backgroundImage: `url('fondo.gif')`, backgroundSize: 'cover' }} >
      <form onSubmit={handleSubmit} className="mb-6">
        <label className="mr-2  ">Buscar:</label>
        <input
          ref={imgRef}
          type="text"
          className="text-white p-1 rounded border border-gray-600 bg-gray-800 focus:outline-none focus:border-blue-500"
          placeholder="ej. cats"
        />
        <button type="submit" className="ml-2 bg-blue-600 px-4 py-1 rounded hover:bg-blue-700">
          Buscar
        </button>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.isArray(images) && images.length > 0 ? (
          images
            .filter(img => img && img.webformatURL)
            .map(img => (
              <div key={img.id}>
                <img
                  key={img.id}
                  src={img.webformatURL}
                  alt={img.tags}
                  className="rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => handleImageClick(img.webformatURL, img.tags, img.user)}
                />
              </div>
            ))
        ) : (
          <p className="text-gray-400 col-span-full text-center mt-6">
            No se encontraron imágenes.
          </p>
        )}
      </div>
    </div>
  );
}

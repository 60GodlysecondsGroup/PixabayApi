import { postImg } from "@/services/img.service.js";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = (searchParams.get("q") || "nature").trim();

    const res = await fetch(
      `https://pixabay.com/api/?key=${process.env.api_pixa}&q=${encodeURIComponent(query)}&image_type=photo`
    );
     const data = await res.json();
        //Obtener Solo las imagenes
        const newData = data.hits;
        //Array con busquedas con Ban
        const searchWithBan = [
            "poor", "black", "poor black", "black poor", "negro", "gente fea", "ugly people",
            "negros", "black poor people", "poor people", "negros pobres", "pobres", "pobresa",
            "vagabundos", "vagabundo", "vagabundos pobres", "vagabundo negro", "vagabundo negro",
            "homeless", "homeless people", "homeless man", "homeless woman", "homeless couple",
            
            ];
        //Convertir la query a minusculas (Para Coincidir con los datos dentro del array)
        let lowerQuery = query.toLowerCase();
        //Sí la busqueda coincide con las busquesdas con ban
        if(searchWithBan.includes(lowerQuery)){
            //Array de Tags Prohibidos
            const tagsProhibidos = [
                "man", "african man", "black man", "poor","poor children", 
                "woman", "old man", "homeless man", "pobresa",
                "person", "female", "male", "homeless", "black couple",
                "baby", "child", "kid", "children", "african", "beggars", "beggar",
                "negros", "white and negro", "indians", "africa", "poverty", "poor people"
            ];
            /*
            Pasos:
                1. Recorrer cada imagen
                2. recorrer cada tag contenido en la imagen
                    3. verificar Sí existe algún tag coincidente con los tagsProhibidos
                    4. Eliminar la imagen Sí hubo almenos una coincidencia
            */
            //Recorrer cada imagen y su indice Correspondiente
            newData.forEach((img, index)=>{
                //img.tags -> String con tags ("hola, arroz, papa, casa")
                //Crear un array de los tags -> ["hola", "arroz", "papa", "casa"]
                const tags = img.tags.split(", ");
                //array.includes(value) -> Saber sí algun valor dentro del array coincide con el tag que está siendo recorrido
                //array.some(tag => ...) -> Obtener true Sí almenos alguno contiene ese valor 
                let res = tags.some(tag => tagsProhibidos.includes(tag));
                //Sí es true, eliminar del array dicho objeto
                if(res) delete newData[index];
            })

            //Retornar Respuesta Normal
            return Response.json(newData);
        }
        
        //Retornar Respuesta de Data depurada
        return Response.json(newData);
            
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify(error), {status:500})    
    }
    
}

export async function POST(req) {
  try {
    const { userName, imgUrl, tags } = await req.json();
    const result = await postImg(userName, imgUrl, tags);
    return new Response(JSON.stringify({ msg: result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}

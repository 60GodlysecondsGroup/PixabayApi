# 📦 Proyecto API Pixabay + MongoDB

Este proyecto permite consumir imágenes desde la **API de Pixabay** y almacenarlas en una base de datos **MongoDB** mediante un endpoint tipo `POST`.

---

## 🚀 Instalación

```bash
npm install dotenv mongodb
```

---

## ⚙️ Configuración del entorno

Crea un archivo llamado `.env.local` en la raíz del proyecto con el siguiente contenido:

```bash
db_url=mongodb+srv://<usuario>:<contraseña>@cluster0.tomdldz.mongodb.net/?retryWrites=true&w=majority
api_pixa=<tu_api_key_de_pixabay>
```
---

## 📡 Endpoints

### **POST /api/info**

**Descripción:**
Guarda en la base de datos la información básica de una imagen obtenida desde la API de Pixabay.

**Cuerpo del request (`body`):**

| Campo      | Descripción                                              | Ejemplo                                   |
| ---------- | -------------------------------------------------------- | ----------------------------------------- |
| `userName` | Nombre del autor de la imagen. Se obtiene de `img.user`. | `"nhudaibnumukhtar"`                      |
| `imgUrl`   | URL de la imagen. Se obtiene de `img.webformatURL`.      | `"https://pixabay.com/get/g400ac3d1e..."` |

---

## 🧩 Ejemplo de respuesta del GET a Pixabay

A continuación se muestra un fragmento del JSON retornado por la API de Pixabay.
Los campos que debes tomar para tu `POST` están marcados con comentarios.

```json
[
  {
    "id": 3169476,
    "pageURL": "https://pixabay.com/photos/cat-black-animal-pet-hair-star-3169476/",
    "type": "photo",
    "tags": "cat, black, animal, pet, hair, nature, star, black and white, hairy",
    "previewURL": "https://cdn.pixabay.com/photo/2018/02/21/05/17/cat-3169476_150.jpg",
    "webformatURL": "https://pixabay.com/get/g400ac3d1ef281493024921119cbad5bfda6cf3552ca51de111ee8ba8f823a1d2c64dd60da44b028daa2e8661f772d8e42b7ff0e3ab1702b67635df5bad24319c_640.jpg", 
    "user": "nhudaibnumukhtar"
  },
  {
    "id": 6899543,
    "pageURL": "https://pixabay.com/photos/fire-flame-match-burn-smoke-6899543/",
    "type": "photo",
    "tags": "fire, flame, match, burn, smoke",
    "previewURL": "https://cdn.pixabay.com/photo/2021/12/28/15/19/fire-6899543_150.jpg",
    "webformatURL": "https://pixabay.com/get/g300b9e22601c7f271c4ee0e37e65cf9f780928c65f738a1d815a67b56bbe74e64b7ad4753f7746ebd69b888c6d6cdb115eeb1057f6102d05aeca39ab5f390aa1_640.jpg",  
    "user": "B33th0ven"
  }
]
```

👉 En este caso, los valores para enviar serían:

```json
{
  "userName": "B33th0ven",
  "imgUrl": "https://pixabay.com/get/g300b9e22601c7f271c4ee0e37e65cf9f780928c65f738a1d815a67b56bbe74e64b7ad4753f7746ebd69b888c6d6cdb115eeb1057f6102d05aeca39ab5f390aa1_640.jpg"
}
```

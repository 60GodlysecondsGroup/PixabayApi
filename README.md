npm install dotenv mongodb

usar: .env.local

Para el cuerpo del Endpoint api/info POST :
    userName -> Lo Obtienen del get, especificamente de img.user
    imgUrl -> Lo Obtienen del get, especificamente de img.webformatURL

Ejemplo del get:
    [
        {
            "id": 3169476,
            "pageURL": "https://pixabay.com/photos/cat-black-animal-pet-hair-star-3169476/",
            "type": "photo",
            "tags": "cat, black, animal, pet, hair, nature, star, black and white, hairy",
            "previewURL": "https://cdn.pixabay.com/photo/2018/02/21/05/17/cat-3169476_150.jpg",
            "previewWidth": 150,
            "previewHeight": 99,
            "webformatURL": "https://pixabay.com/get/g400ac3d1ef281493024921119cbad5bfda6cf3552ca51de111ee8ba8f823a1d2c64dd60da44b028daa2e8661f772d8e42b7ff0e3ab1702b67635df5bad24319c_640.jpg", **<-- Toman ese**
            "webformatWidth": 640,
            "webformatHeight": 426,
            "largeImageURL": "https://pixabay.com/get/gb2e776b740b62fb593ac19a5c47109613ef83d3253d04c1af8c686a0ba97fe6c5c5e75c95e3ac6ddbfb5307fd9d5cffb39e3c12a044a5a05d6ff0235dca6dceb_1280.jpg",
            "imageWidth": 6000,
            "imageHeight": 4000,
            "imageSize": 5218606,
            "views": 301405,
            "downloads": 217835,
            "collections": 944,
            "likes": 1046,
            "comments": 116,
            "user_id": 8022978,
            "user": "nhudaibnumukhtar",  **<-- Toman ese**
            "userImageURL": "https://cdn.pixabay.com/user/2018/02/13/04-18-26-952_250x250.jpg",
            "noAiTraining": false,
            "isAiGenerated": false,
            "isGRated": true,
            "isLowQuality": false,
            "userURL": "https://pixabay.com/users/8022978/"
        },
        {
            "id": 6899543,
            "pageURL": "https://pixabay.com/photos/fire-flame-match-burn-smoke-6899543/",
            "type": "photo",
            "tags": "fire, flame, match, burn, smoke, black wallpaper, black, fire, fire, fire, fire, fire, smoke, black wallpaper, black wallpaper",
            "previewURL": "https://cdn.pixabay.com/photo/2021/12/28/15/19/fire-6899543_150.jpg",
            "previewWidth": 100,
            "previewHeight": 150,
            "webformatURL": "https://pixabay.com/get/g300b9e22601c7f271c4ee0e37e65cf9f780928c65f738a1d815a67b56bbe74e64b7ad4753f7746ebd69b888c6d6cdb115eeb1057f6102d05aeca39ab5f390aa1_640.jpg",  **<-- Toman ese**
            "webformatWidth": 427,
            "webformatHeight": 640,
            "largeImageURL": "https://pixabay.com/get/g9d8a1780c821b169882ef41f9b815ae00974a288657c9d2e4fd2932e8497ca78965a0a14d8a976755f054ea4d3f1e66d77c6f95997c580bcb245c9edafe01ef6_1280.jpg",
            "imageWidth": 3553,
            "imageHeight": 5329,
            "imageSize": 1891889,
            "views": 73569,
            "downloads": 65904,
            "collections": 121,
            "likes": 94,
            "comments": 12,
            "user_id": 8655781,
            "user": "B33th0ven",  **<-- Toman ese**
            "userImageURL": "",
            "noAiTraining": false,
            "isAiGenerated": false,
            "isGRated": true,
            "isLowQuality": false,
            "userURL": "https://pixabay.com/users/8655781/"
        }
]
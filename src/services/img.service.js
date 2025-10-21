import clientPromise from "@/lib/db.js";

export const postImg = async(username, imgUrl, tags) => {
    const client = await clientPromise;
    const db = client.db("Pixabay");

    const result = await db.collection("images").insertOne({
        username,
        imgUrl,
        tags
    });

    return result;
}
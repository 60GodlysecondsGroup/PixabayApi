import clientPromise from "@/lib/db.js";

export const postImg = async(username, imgUrl) => {
    const client = await clientPromise;
    const db = client.db("Pixabay");

    const result = await db.collection("images").insertOne({
        username,
        imgUrl
    });

    return result;
}
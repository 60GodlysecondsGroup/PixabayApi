import { MongoClient } from "mongodb";
//Url de Conexion
const uri = process.env.db_url;

const options = {};
//Crear Conexion
const client = new MongoClient(uri, options);
//Crear Cliente con capacidad de realizar promesas
const clientPromise = client.connect();
//Exportar Cliente
export default clientPromise;

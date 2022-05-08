import mongoose from "mongoose";

mongoose.connect("mongodb://admin:admin@dreamteam-shard-00-00.hkwve.mongodb.net:27017,dreamteam-shard-00-01.hkwve.mongodb.net:27017,dreamteam-shard-00-02.hkwve.mongodb.net:27017/dbQuadra?ssl=true&replicaSet=atlas-14jv6p-shard-0&authSource=admin&retryWrites=true&w=majority");

const db = mongoose.connection;

export default db;
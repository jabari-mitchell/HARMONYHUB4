"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const uri = "mongodb+srv://fouzaanshaiknissar:qQOLcuH4JLfugPx5@hrmonyhubevents.qfjtfs3.mongodb.net/?retryWrites=true&w=majority&appName=HrmonyhubEvents";
const client = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);
//# sourceMappingURL=MongoDBCURD.js.map
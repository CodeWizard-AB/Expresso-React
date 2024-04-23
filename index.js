/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// * middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = mongodb;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kmw7lj5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function run() {
	try {
		// Connect the client to the server	(optional starting in v4.7)
		await client.connect();
		const coffeeCollection = client
			.db("CoffeeDB")
			.collection("CoffeeCollection");
		const userCollection = client.db("CoffeeDB").collection("UserCollection");

		// * COFFEE RELATED API -
		app.post("/coffees", async (req, res) => {
			const result = await coffeeCollection.insertOne(req.body);
			res.send(result);
		});

		app.get("/coffees", async (req, res) => {
			const cursor = await coffeeCollection.find().toArray();
			res.send(cursor);
		});

		app.get("/coffees/:id", async (req, res) => {
			const query = { _id: new ObjectId(req.params.id) };
			const result = await coffeeCollection.findOne(query);
			res.send(result);
		});

		app.delete("/coffees/:id", async (req, res) => {
			const query = { _id: new ObjectId(req.params.id) };
			const result = await coffeeCollection.deleteOne(query);
			res.send(result);
		});

		app.put("/coffees/:id", async (req, res) => {
			const filter = { _id: new ObjectId(req.params.id) };
			const options = { upsert: true };
			const updated = {
				$set: req.body,
			};
			const result = await coffeeCollection.updateOne(filter, updated, options);
			res.send(result);
		});

		// * USER RELATED API -
		app.post("/user", async (req, res) => {
			const result = await userCollection.insertOne(req.body);
			res.send(result);
		});

		app.get("/user", async (req, res) => {
			const result = await userCollection.find().toArray();
			res.send(result);
		});

		// Send a ping to confirm a successful connection
		// await client.db("admin").command({ ping: 1 });
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
	} finally {
		// Ensures that the client will close when you finish/error
		// await client.close();
	}
}
run().catch(console.dir);

app.listen(port, () => {
	console.log("Coffee server is running on port ", port);
});

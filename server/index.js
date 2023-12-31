const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cors());

// Connect MongoDB

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ufgx0zu.mongodb.net/?retryWrites=true&w=majority`;

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

    // collections
    const projectsCollection = client.db("seequenzeDB").collection("projects");

    // Projects Routes
    app.get("/api/v1/projects", async (req, res) => {
      try {
        const result = await projectsCollection.find().toArray();
        res.send(result);
      } catch (err) {
        res.status(400).send;
      }
    });
    app.get("/api/v1/projects/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await projectsCollection.findOne(query);
        res.send(result);
      } catch (err) {
        res.status(400).send;
      }
    });
    app.post("/api/v1/create-projects", async (req, res) => {
      try {
        const project = req.body;
        const result = await projectsCollection.insertOne(project);
        res.send(result);
      } catch (err) {
        res.send(res.status(400).send);
      }
    });

    app.patch("/api/v1/update-project/:id", async (req, res) => {
      try {
        const id = req.params.id;
        console.log(id);
        const UpdatedProject = req.body;
        const filter = { _id: new ObjectId(id) };
        const updatedDoc = {
          $set: {
            photo: UpdatedProject?.photo,
            projectName: UpdatedProject?.projectName,
          },
        };
        const result = await projectsCollection.updateOne(filter, updatedDoc);
        res.send(result);
      } catch (err) {
        res.status(400).send;
      }
    });

    app.delete("/api/v1/delete-project/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await projectsCollection.deleteOne(query);
        res.send(result);
      } catch (err) {
        res.status(400).send;
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log("Server is listening on port ", port);
});

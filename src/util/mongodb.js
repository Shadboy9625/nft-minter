import mongoose from 'mongoose';

const connection = {};

async function connectToDatabase() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect("mongodb+srv://shadabkalim375:fP17ibi71i6ZY71R@cluster0.i0qxyeq.mongodb.net/dogecapital?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
  console.log('MongoDB Connected');

  return connection;
}

export default connectToDatabase;

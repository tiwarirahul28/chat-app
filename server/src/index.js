import { createServer } from "http"; // Corrected spelling from createSever to createServer
import { Server } from "socket.io";
import { v4 as uuidv4 } from "uuid";

const httpServer = createServer(); // Corrected spelling from createSever to createServer
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000", // Removed trailing slash from origin URL
    methods: ["GET", "POST"],
  },
});

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("Invalid Username")); // Corrected spelling from Invaild to Invalid
  }
  socket.username = username;
  socket.userId = uuidv4();
  next();
});

io.on("connection", async (socket) => {
  const users = [];
  for (let [id, socket] of io.of("/").sockets) {
    users.push({
      userId: id,
      username: socket.username,
    });
  }
  socket.emit("users", users);
  socket.emit("session", { userId: socket.userId, username: socket.username });
  socket.broadcast.emit("user connected", {
    userId: socket.userId,
    username: socket.username,
  });

  socket.on("new message", (message) => {
    // Broadcast the new message to other clients
    socket.broadcast.emit("new message", {
      userId: socket.userId,
      username: socket.username,
      message: message,
    });
  });
});

console.log("Listening to the server...");
httpServer.listen(process.env.PORT || 4000);

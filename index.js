import http from "http";
import { Server } from "socket.io";
import app from "./app.js";
// import orderSocket from "./sockets/order.socket.js";

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

// Socket.IO
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
// orderSocket(io);

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

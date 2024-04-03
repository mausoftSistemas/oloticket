import { Server as SocketIO } from "socket.io";
import { Server } from "http";
import AppError from "../errors/AppError";
import { logger } from "../utils/logger";
import User from "../models/User";

let io: SocketIO;

export const initIO = (httpServer: Server): SocketIO => {
  io = new SocketIO(httpServer, {
    cors: {
      origin: process.env.FRONTEND_URL
    }
  });

  io.on("connection", async socket => {
    logger.info("Cliente Conectado");
    const { userId } = socket.handshake.query;

    if (userId && userId !== "undefined" && userId !== "null") {
      const user = await User.findByPk(userId);
      if (user) {
        user.online = true;
        await user.save();
      }
    }

    socket.on("joinChatBox", (ticketId: string) => {
      logger.info("Un cliente se unió a un canal de tickets");
      socket.join(ticketId);
    });

    socket.on("joinNotification", () => {
      logger.info("Un cliente se unió al canal de notificación");
      socket.join("notification");
    });

    socket.on("joinTickets", (status: string) => {
      logger.info(`Un cliente se unió ${status} a un canal de tickets`);
      socket.join(status);
    });
  });
  return io;
};

export const getIO = (): SocketIO => {
  if (!io) {
    throw new AppError("Socket IO no inicializado");
  }
  return io;
};

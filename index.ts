import http, { Server } from 'http'
import express from 'express';
import config from './app/config';

const app = express()
let server: Server;


const initServer = async (): Promise<void> => {
  try {
    (await import('./app/utils')).default({ app });

    server = http.createServer(app).listen(config.app.port, () => {
      console.log(`🚀 Server is running at http://localhost:${config.app.port}`);
    });

    server.on('error', (error) => {
      console.error(`❌ Server Error: ${error.message}`);
      process.exit(1);
    });

    process.on('SIGTERM', gracefulShutdown);
    process.on('SIGINT', gracefulShutdown);

  } catch (error) {
    console.error(`❌ Failed to start server: ${error}`);
    process.exit(1);
  }
};

const gracefulShutdown = () => {
  console.log('🔄 Gracefully shutting down...');
  if (server) {
    server.close((err) => {
      if (err) {
        console.error(`❌ Error during shutdown: ${err.message}`);
        process.exit(1);
      }
      console.log('✅ Server shutdown complete.');
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
};

initServer()
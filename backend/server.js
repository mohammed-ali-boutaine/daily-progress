
/*
 *  Importing Modules
*/
import e from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from 'express-rate-limit';
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
/**
 * 
 *  Importing App Modules
 */
import connectToMongoDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";

/**
 *  App config
 */
dotenv.config();
const app = e();
const port = process.env.PORT || 5000;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
/**
 *  Middelwares
 */
app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors())
app.use(helmet());
app.use(limiter);

app.use(
  helmet({
    contentSecurityPolicy: false, 
    frameguard: { action: 'deny' }, // Prevent clickjacking
    referrerPolicy: { policy: 'no-referrer' }, // Control the Referer header
  })
);


/**
 *  Connecting to database and port
 */

connectToMongoDB();

app.use("/api/users", userRoutes);

app.get('/test', (req, res) => {
  res.status(200).json({message:"api is running"});
});
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {

  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}
/**
 *  Errors Middelwares
 */
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`server running in ${port}`);
});




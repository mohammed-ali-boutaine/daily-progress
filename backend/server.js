
/*
 *  Importing Modules
*/
import e from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
/**
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
/**
 *  Middelwares
 */
app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 *  Connecting to database and port
 */

connectToMongoDB();

app.use("/api/users", userRoutes);




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




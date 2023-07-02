import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import activityRoutes from "./routes/activityRoute.js"
import commentRoutes from "./routes/commentRoute.js"
import replyRoutes from "./routes/replyRoute.js"
import likeRoutes from "./routes/linkRoute.js"
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/activity',activityRoutes);
app.use('/api/v1/comment',commentRoutes);
app.use('/api/v1/reply',replyRoutes);
app.use('/api/v1/like',likeRoutes);
/* app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes); */

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
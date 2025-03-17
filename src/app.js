import cookieParser from "cookie-parser";
import createError from "http-errors";
import express from "express";
import logger from "morgan";

import indexRouter from "./routes/index.js";
import './clients/db.mysql.js'
import './migrate.js'

const app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());

app.use('/', indexRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.status(err.status >= 500 || !err.status ? 422 : err.status).json({
    status: 'error',
    message: err.message,
    errors: err.errors,
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server starting on ${port}`);
});

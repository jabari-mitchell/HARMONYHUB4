import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, '/client/Content/style.css')));
app.use(express.static(path.join(__dirname, '/client/Data/')));
app.use(express.static(path.join(__dirname, '/client/assets/images/')));
app.use(express.static(path.join(__dirname, '/client/Script/')));

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use('/', indexRouter);
app.use('/users', usersRouter);




export default app;

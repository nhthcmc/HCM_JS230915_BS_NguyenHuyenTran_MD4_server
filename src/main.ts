import express from 'express'
const app = express();

import dotEnv from 'dotenv';
dotEnv.config()

import cors from 'cors'
app.use(cors())

import bodyParser from 'body-parser';
app.use(bodyParser.json())

import Router from './routes'
app.use(Router)

app.listen(3000, () => {
    console.log(`Server is running on ${process.env.HOST}:${process.env.PORT}`);
})
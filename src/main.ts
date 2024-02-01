import express from 'express'
const app = express();

import cors from 'cors'
app.use(cors())

import bodyParser from 'body-parser';
app.use(bodyParser.json())

import Router from './routes'
app.use('/api', Router)

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000/api/v1`);
})
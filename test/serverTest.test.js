const initializeMongoServer = require('./mongoConfigTesting');

const index = require('../routes/index');

const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/', index);

beforeAll(initializeMongoServer());

test('index route works', done => {
    request(app)
    .get('/get_char')
})
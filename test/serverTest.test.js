// this may be wrong
const index = require('../routes/index');

const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/', index);

test('index route works', done => {
    request(app)
    .get('/get_char')
    .expect('Content-Type', /json/)
    .expect({ name: 'twewy'})
    .expect(200, done)
})
const initializeMongoServer = require('./mongoConfigTesting');
const populateTestDB = require('../populatedb/populateTestDb')

const index = require('../routes/index');

const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/', index);

beforeAll(() => {
    initializeMongoServer();
    populateTestDB();
});

test('getting characters', async() => {
    const response = await request(app)
    .get('/get_char')
    .set('Accept', 'application/json')

    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(3);
    // expect(response.body).toEqual([]);

})
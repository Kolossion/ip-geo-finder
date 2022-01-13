const request = require('supertest');
const app = require('./app');

test("Retrieve Lat/Long with valid IP", async () => {
    const ip = "8.8.8.8";
    const res = await request(app.callback()).get(`/location/${ip}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('latitude')
    expect(res.body).toHaveProperty('longitude')
})

test("Return 400 on invalid IP format", async () => {
    const wrongVals = ["8.8.8", "8", "hello", "3.2.a.3"];
    wrongVals.forEach(async (wrongVal) => {
        const res = await request(app.callback()).get(`/location/${wrongVal}`);

        expect(res.status).toBe(400);
        expect(res.text).toBe('Improper IP address format (IPv4)')
    });
})

test("Return 500 on IP not in database", async () => {
    const ip = "192.168.1.1";
    const res = await request(app.callback()).get(`/location/${ip}`);

    expect(res.status).toBe(404);
    expect(res.text).toBe(`The address ${ip} is not in the database`)
})
  
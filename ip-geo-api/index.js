require('dotenv').config()
const Koa = require('koa');
const router = require('@koa/router');
const Reader = require('@maxmind/geoip2-node').Reader;

const app = new Koa();

const r = router();
r.get('/location/:ip', async (ctx, next) => {
    /* https://w3resource.com/javascript/form/ip-address-validation.php */
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const testIp = ctx.params.ip;

    if (!ipRegex.test(testIp)) {
        ctx.throw(400, 'Improper IP address format')
    }

    const reader = await Reader.open('./geodb/GeoLite2-City.mmdb')

    let err = null
    try {
        const readRes = reader.city(testIp);
        const { latitude, longitude } = readRes.location
        ctx.body = { latitude, longitude }
    } catch(error) {
        err = 'lol'
    }
    next(err)
})

app.use(r.routes())
app.listen(3000);
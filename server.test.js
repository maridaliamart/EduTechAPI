const app = require('./server')
const {sequelize} = require('./db')
const request = require('supertest')
const seed = require('./seed')

describe('EndPoints', () => {
    const testUser = { username: "testdummy", password: "password" }
    let registerResponse
    let loginResponse

    beforeAll(async () => {
        await sequelize.sync({ force: true })
        await seed()
        registerResponse = await request(app)
            .post('/register')
            .send(testUser)
            .catch(err => console.error(err));
        loginResponse = await request(app)
            .post('/login')
            .send(testUser)
            .catch(err => console.error(err));
    })

    describe('GET /', () => {
        it('should return html', async () => {
            const registerResponse = await request(app).get('/');
            expect(registerResponse.status).toBe(200);
            expect(registerResponse.text).toBe('<h1>Welcome to Loginopolis!</h1><p>Log in via POST /login or register via POST /register</p>');
        });
    })

})
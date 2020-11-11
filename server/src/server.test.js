import app from './server'
import request from 'supertest'

describe('GET /', () => {
    afterAll((done) => {
        app.close(done)
    })

    test('health check endpoint returns', () => {
        return request(app).get('/').expect(200)
    })
})

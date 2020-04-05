import request from 'supertest';
import { app } from '../src/main';

describe('GET /estabelecimento', () => {});

describe('CRUD estabelecimento', () => {
  const estabelecimento = {
    name: 'Bug burgger',
  };

  let estabelecimento_id = '';
  it('create estabelecimento', async () => {
    const res = await request(app)
      .post('/estabelecimento')
      .set('Accept', 'application/json')
      .send(estabelecimento);
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject(estabelecimento);

    estabelecimento_id = res.body._id;
  });

  it('get the estabelecimento', (done) => {
    request(app)
      .get(`/estabelecimento/${estabelecimento_id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('update estabelecimento', async () => {
    const res = await request(app)
      .put(`/estabelecimento/${estabelecimento_id}`)
      .send({ ...estabelecimento, name: 'Big Bugger' });
    expect(res.status).toBe(200);
  });
  it('delete estabelecimento', async () => {
    const res = await request(app)
      .delete(`/estabelecimento/${estabelecimento_id}`)
      .set('Accept', 'application/json');
    expect(res.status).toBe(200);
  });
});

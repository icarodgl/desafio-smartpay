import request from 'supertest';
import { app } from '../src/main';

describe('GET /produto', () => {});

describe('CRUD produto', () => {
  const produto = {
    name: 'buerger',
  };

  let produto_id = '';
  it('create produto', async () => {
    const res = await request(app)
      .post('/produto')
      .set('Accept', 'application/json')
      .send(produto);
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject(produto);

    produto_id = res.body._id;
  });

  it('get the produto', (done) => {
    request(app)
      .get(`/produto/${produto_id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('update produto', async () => {
    const res = await request(app)
      .put(`/produto/${produto_id}`)
      .send({ ...produto, name: 'Big bugguer' });
    expect(res.status).toBe(200);
  });
  it('delete produto', async () => {
    const res = await request(app)
      .delete(`/produto/${produto_id}`)
      .set('Accept', 'application/json');
    expect(res.status).toBe(200);
  });
});

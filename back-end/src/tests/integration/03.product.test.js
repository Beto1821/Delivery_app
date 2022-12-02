const Sinon = require('sinon');
const { Product } = require('../../database/models');
const { productsMock } = require('./mocks/productMock');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const { tokenMock, userMock } = require('./mocks/userMock');
const jwt = require('jsonwebtoken');

chai.use(chaiHttp);

const { expect } = chai;

describe('Tests all routes on /products', () => {
  beforeEach(() => {
    Sinon.stub(Product, 'findAll').resolves(productsMock);
    Sinon.stub(jwt, 'verify').resolves({ payload: userMock.customer });
  });

  afterEach(() => {
    Product.findAll.restore();
    jwt.verify.restore();
  });

  describe('Tests GET /products', () => {
    it('Should successfully return all products', async () => {
      const result = await chai
        .request(app)
        .get('/products')
        .set('Authorization', tokenMock);

      expect(jwt.verify.calledOnce).to.be.true;
      expect(result.status).to.equal(200);
      expect(result.body).to.deep.equal(productsMock);
    });

    it('Should return an error when not receiving a token', async () => {
      const result = await chai.request(app).get('/products');

      expect(result.status).to.equal(401);
      expect(result.body).to.deep.equal({
        message: 'Authorization token not found!',
      });
    });
  });
});

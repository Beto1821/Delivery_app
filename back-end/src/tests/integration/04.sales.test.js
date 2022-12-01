const Sinon = require('sinon');
const { User, SaleProduct, Product, Sale } = require('../../database/models');
const { userMock, tokenMock } = require('./mocks/userMock');
const { productsMock } = require('./mocks/productMock');
const { createSaleMock, getByIdMock } = require('./mocks/saleMock');
const jwt = require('jsonwebtoken');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('Tests all routes on /sales', () => {
  beforeEach(() => {
    Sinon.stub(User, 'findByPk').resolves(userMock.seller);
    Sinon.stub(SaleProduct, 'bulkCreate').resolves();
    Sinon.stub(Product, 'findAll').resolves(productsMock);
    Sinon.stub(Sale, 'create').resolves(createSaleMock.dbResponse);
    Sinon.stub(Sale, 'findByPk').resolves(getByIdMock.dbResponse);
    Sinon.stub(jwt, 'verify').returns({ payload: userMock.customer });
  });

  afterEach(() => {
    User.findByPk.restore();
    SaleProduct.bulkCreate.restore();
    Product.findAll.restore();
    Sale.create.restore();
    Sale.findByPk.restore();
    jwt.verify.restore();
  });

  describe('Tests POST /sales', () => {
    const validInput = {
      sellerId: 2,
      totalPrice: 9.7,
      deliveryAddress: 'Av. Marechal Rondon',
      deliveryNumber: '149',
      products: [
        {
          id: 1,
          quantity: 3,
        },
        {
          id: 2,
          quantity: 2,
        },
        {
          id: 3,
          quantity: 1,
        },
      ],
    };

    it('Should allow the customer to place an order', async () => {
      const response = await chai
        .request(app)
        .post('/sales')
        .set('Authorization', tokenMock)
        .send(validInput);

      expect(response.status).to.equal(201);
      expect(response.body).to.deep.equal(getByIdMock.apiResponse);
    });

    it("Shouldn't allow the user to place an order without a token", async () => {
      const response = await chai.request(app).post('/sales').send(validInput);

      expect(response.status).to.equal(401);
      expect(response.body).to.deep.equal({
        message: 'Authorization token not found!',
      });
    });

    it("Shouldn't allow the user to place an order for himself", async () => {
      jwt.verify.returns({ payload: userMock.seller });

      const response = await chai
        .request(app)
        .post('/sales')
        .set('Authorization', tokenMock)
        .send(validInput);

      expect(response.status).to.equal(422);
    });

    it("Shouldn't allow the user to place an order for someone that isn't a seller", async () => {
      User.findByPk.resolves(userMock.admin);

      const response = await chai
        .request(app)
        .post('/sales')
        .set('Authorization', tokenMock)
        .send(validInput);

      expect(response.status).to.equal(422);
      expect(response.body).to.deep.equal({
        message: 'Invalid seller',
      });
    });

    it("Shouldn't allow the user to place an order for someone that doesn't exist", async () => {
      User.findByPk.resolves(undefined);

      const response = await chai
        .request(app)
        .post('/sales')
        .set('Authorization', tokenMock)
        .send(validInput);

      expect(response.status).to.equal(422);
      expect(response.body).to.deep.equal({
        message: 'Invalid seller',
      });
    });

    it("Shouldn't allow the user to place an order for a product that doesn't exist", async () => {
      Product.findAll.resolves(productsMock.splice(1));

      const response = await chai
        .request(app)
        .post('/sales')
        .set('Authorization', tokenMock)
        .send(validInput);

      expect(response.status).to.equal(422);
      expect(response.body).to.deep.equal({
        message: 'Some of the provided products do not exist',
      });
    });
  });

  describe('Tests GET /sales/:id', () => {
    it('Should successfully return a sale by id', async () => {
      const response = await chai
        .request(app)
        .get('/sales/1')
        .set('Authorization', tokenMock);

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(getByIdMock.apiResponse);
    });

    it('Should return a error when the requested sale does not exist', async () => {
      Sale.findByPk.resolves(undefined);
      const response = await chai
        .request(app)
        .get('/sales/1')
        .set('Authorization', tokenMock);

      expect(response.status).to.equal(404);
      expect(response.body).to.deep.equal({
        message: 'Sale not found',
      });
    });
  });
});

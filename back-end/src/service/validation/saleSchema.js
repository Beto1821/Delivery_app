const Joi = require('joi');

const newSaleSchema = Joi.object({
  sellerId: Joi.number().min(1).required(),
  totalPrice: Joi.number().min(0).required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.string().required(),
  products: Joi.array()
    .items(
      Joi.object({
        id: Joi.number().min(1).required(),
        quantity: Joi.number().min(1).required(),
      }),
    )
    .required(),
});

module.exports = {
  newSaleSchema,
};

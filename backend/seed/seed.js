const mongoose = require("mongoose");
const faker = require("faker");
const Customer = require("../models/customer");
const Product = require("../models/product");
const Sales = require("../models/sales");

mongoose.connect("mongodb://localhost:27017/salesdb");

const seed = async () => {
  await Customer.deleteMany();
  await Product.deleteMany();
  await Sales.deleteMany();

  const customers = [];
  for (let i = 0; i < 10; i++) {
    customers.push({ name: faker.name.findName(), region: faker.address.city(), type: i % 2 ? "Business" : "Individual" });
  }
  const savedCustomers = await Customer.insertMany(customers);

  const products = [];
  for (let i = 0; i < 10; i++) {
    products.push({ name: faker.commerce.productName(), category: faker.commerce.department(), price: faker.commerce.price() });
  }
  const savedProducts = await Product.insertMany(products);

  const sales = [];
  for (let i = 0; i < 50; i++) {
    const customer = savedCustomers[Math.floor(Math.random() * savedCustomers.length)];
    const product = savedProducts[Math.floor(Math.random() * savedProducts.length)];
    const quantity = faker.datatype.number({ min: 1, max: 10 });
    sales.push({
      customerId: customer._id,
      productId: product._id,
      quantity,
      totalRevenue: quantity * product.price,
      reportDate: faker.date.between("2023-01-01", "2025-01-01"),
    });
  }
  await Sales.insertMany(sales);

  console.log("✅ Database seeded");
  process.exit();
};

seed();

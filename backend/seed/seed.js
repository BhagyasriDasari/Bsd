const mongoose = require("mongoose");
const Customer = require("../models/customer");
const Product = require("../models/product");
const Sales = require("../models/sales");

mongoose
  .connect("mongodb://localhost:27017/salesdb")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

const seedDatabase = async () => {
  try {
    await Customer.deleteMany({});
    await Product.deleteMany({});
    await Sales.deleteMany({});

    // Seed customers
    const customers = await Customer.insertMany([
      { name: "Alice", email: "alice@example.com", region: "North", type: "Individual" },
      { name: "Bob", email: "bob@example.com", region: "South", type: "Business" },
      { name: "Charlie", email: "charlie@example.com", region: "East", type: "Individual" }
    ]);

    // Seed products
    const products = await Product.insertMany([
      { name: "Laptop", category: "Electronics", price: 1200 },
      { name: "Chair", category: "Furniture", price: 150 },
      { name: "Pen", category: "Stationery", price: 5 }
    ]);

    // Seed sales
    const salesData = [
      {
        customerId: customers[0]._id,
        productId: products[0]._id,
        quantity: 2,
        totalRevenue: 2400,
        reportDate: new Date("2025-01-10"),
        region: "North"
      },
      {
        customerId: customers[1]._id,
        productId: products[1]._id,
        quantity: 5,
        totalRevenue: 750,
        reportDate: new Date("2025-02-15"),
        region: "South"
      },
      {
        customerId: customers[2]._id,
        productId: products[2]._id,
        quantity: 10,
        totalRevenue: 50,
        reportDate: new Date("2025-03-20"),
        region: "East"
      }
    ];

    await Sales.insertMany(salesData);

    console.log("✅ Database seeded!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();

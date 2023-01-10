import { createAsyncThunk } from "@reduxjs/toolkit";
import Parse from "parse/dist/parse.js";

export const serverProductsGet = createAsyncThunk(
  "products/serverProductsGet",
  async (_, { rejectWithValue }) => {
    const productsQuery = new Parse.Query('Products');
    const categoryQuery = new Parse.Query('Category');
    try {
      let serverProducts = await productsQuery.find();
      let serverCategory = await categoryQuery.find();
      let categorys = []
      let products = []

      serverCategory.map((serverCategory) => {
        let cat = {
          id: serverCategory.id,
          title: serverCategory.attributes.title
        }
        categorys.push(cat)
      })
      serverProducts.map((serverProduct) => {
        const { category, createdAt, updatedAt, ...product } = serverProduct.attributes
        product.category = serverProduct.attributes.category?.id
        product.id = serverProduct.id
        product.key = serverProduct.id
        products.push(product)
      })
      return { products, categorys };
    } catch (error) {
      return rejectWithValue(error);
    };
  }
);


export const serverProductCreate = createAsyncThunk(
  "products/serverProductCreate",
  async ({ title, price, amount }, { rejectWithValue }) => {
    let Product = new Parse.Object('Products');
    Product.set('title', title);
    Product.set('price', price);
    Product.set('amount', amount);
    try {
      await Product.save();
      console.log(Product)
      const { title } = Product
      return { title }
      return
    } catch (error) {
      return rejectWithValue(alert)
    };
  }
);


export const serverProductDelete = createAsyncThunk(
  "products/serverProductDelete",
  async ({ key, setLoadedHandler }, { rejectWithValue }) => {


    const Product = new Parse.Object('Products');
    Product.set('objectId', key);
    try {
      await Product.destroy();
      setLoadedHandler(false)
      return true;
    } catch (error) {
      setLoadedHandler(false)
      return rejectWithValue(error);
    };


  }
);
export const serverProductModify = createAsyncThunk(
  "products/serverProductModify",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const serverUser = await Parse.User.logIn(username, password);
      if (!serverUser.id) {
        throw new Error("Error");
      }
      const products = {
        username: serverUser.attributes.username,
        id: serverUser.id,
      };
      return products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

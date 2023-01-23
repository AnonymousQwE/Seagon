import { createAsyncThunk } from "@reduxjs/toolkit";
import Parse from "parse/dist/parse.js";

export const serverProductsGet = createAsyncThunk(
  "products/serverProductsGet",
  async (_, { rejectWithValue }) => {
    try {
      let serverProducts = await productsQuery.find();
      let serverCategory = await categoryQuery.find();
      let categoryList = [];
      let products = [];

      serverCategory.map((serverCategory) => {
        let cat = {
          id: serverCategory.id,
          title: serverCategory.attributes.title,
        };
        categoryList.push(cat);
        return categoryList;
      });
      serverProducts.map((serverProduct) => {
        const { category, createdAt, updatedAt, ...product } =
          serverProduct.attributes;
        product.category = serverProduct.attributes.category?.id;
        product.id = serverProduct.id;
        product.key = serverProduct.id;
        products.push(product);
        return products;
      });
      return { products, categoryList };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const serverProductCreate = createAsyncThunk(
  "products/serverProductCreate",
  async (product, { rejectWithValue }) => {
    try {
      const dataRef = await addDoc(collection(db, "products"), {
        title: product.title,
        price: +product.price,
        amount: +product.amount,
        category: "",
      });
      await Product.save();
      product.key = Product.id;
      product.id = Product.id;
      return product;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const serverProductDelete = createAsyncThunk(
  "products/serverProductDelete",
  async ({ currentProducts, key, setLoading }, { rejectWithValue }) => {
    const Product = new Parse.Object("Products");
    Product.set("objectId", key);
    try {
      await Product.destroy();
      setLoading(false);
      return currentProducts;
    } catch (error) {
      setLoading(false);
      console.log("Errod Delete Prod from Server:" + error);
      // return rejectWithValue(error);
    }
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

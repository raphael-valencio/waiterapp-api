import { Router } from 'express';
import { listCategories } from './useCases/categories/listCategories';
import { createCategory } from './useCases/categories/createCategories';

export const router = Router();

// List Categories

router.get('/categories', async (req, res) => {
  await listCategories(req, res);
});

// Create Category
router.post('/categories', async (req, res) => {
  await createCategory(req, res);
});


// List products
router.get('/products', (req, res) => {});


// Create Product
router.post('/products', (req, res) => {});


// Get Products by Category
router.get('/categories/:categoryId/products', (req, res) => {});

// List Orders
router.get('/orders', (req, res) => {});

// Create Order
router.post('/orders', (req, res) => {});


// Change Order Status
router.patch('/orders/:orderId', (req, res) => {});


// Delete Order
router.delete('/orders/:orderId', (req, res) => {});
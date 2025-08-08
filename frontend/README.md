# Inventory Manager Frontend

A modern React TypeScript frontend for the Inventory Manager application.

## Features

- 📊 Dashboard with inventory statistics
- 📦 Product management (CRUD operations)
- 🔍 Search and filter products
- 📱 Responsive design
- 🎨 Modern UI with smooth animations
- ⚡ Fast and efficient

## Technologies Used

- React 18
- TypeScript
- React Router DOM
- Axios for API communication
- CSS3 with modern styling

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Backend server running on port 8080

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx
│   │   ├── Header.tsx
│   │   ├── ProductForm.tsx
│   │   └── ProductList.tsx
│   ├── services/
│   │   └── api.ts
│   ├── types/
│   │   └── Product.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── index.css
├── package.json
└── tsconfig.json
```

## API Integration

The frontend communicates with the Spring Boot backend through REST APIs:

- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/{id}` - Update product
- `DELETE /api/products/{id}` - Delete product
- `GET /api/products/category/{category}` - Get products by category
- `GET /api/products/search?name={name}` - Search products
- `GET /api/products/low-stock?threshold={threshold}` - Get low stock products

## Features

### Dashboard
- Total products count
- Total inventory value
- Low stock items count
- Categories count
- Recent products display

### Product Management
- View all products in a grid layout
- Add new products
- Edit existing products
- Delete products
- Search products by name or description
- Filter by category
- Filter by low stock items

### Responsive Design
- Mobile-friendly interface
- Adaptive grid layouts
- Touch-friendly buttons
- Optimized for all screen sizes

## Development

### Adding New Features

1. Create new components in the `src/components/` directory
2. Add new API methods in `src/services/api.ts`
3. Define TypeScript interfaces in `src/types/`
4. Update routing in `App.tsx` if needed

### Styling

The application uses CSS classes for styling. Main styles are in:
- `src/index.css` - Global styles
- `src/App.css` - App-specific styles

### State Management

The application uses React hooks for state management:
- `useState` for local component state
- `useEffect` for side effects and API calls
- React Router for navigation state

## Deployment

To build the application for production:

```bash
npm run build
```

This creates a `build` folder with optimized production files that can be served by any static file server.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of the Inventory Manager application.



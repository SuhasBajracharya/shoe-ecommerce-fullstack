import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Blog from './pages/Blog';
import Research from './pages/Research';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminReviews from './pages/AdminReviews';

// Products
import ProductConverse from './pages/ProductConverse';
import ProductExplorer from './pages/ProductExplorer';
import ProductHiking from './pages/ProductHiking';
import ProductLeatherboots from './pages/ProductLeatherboots';
import ProductLoafers from './pages/ProductLoafers';
import ProductRunnningshoes from './pages/ProductRunnningshoes';
import ProductSlipons from './pages/ProductSlipons';
import ProductSneakers from './pages/ProductSneakers';

// Portfolio
import PortfolioIndex from './pages/PortfolioIndex';
import PortfolioAditya from './pages/PortfolioAditya';
import PortfolioOsan from './pages/PortfolioOsan';
import PortfolioTekendra from './pages/PortfolioTekendra';



function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Unprotected auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Admin routes */}
          <Route path="/admin/reviews" element={<ProtectedRoute><AdminReviews /></ProtectedRoute>} />
          
          {/* Protected routes wrapped in Layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
            <Route path="/product/:productId" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>} />
            <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
            <Route path="/research" element={<ProtectedRoute><Research /></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
            
            <Route path="/products/Converse" element={<ProtectedRoute><ProductConverse /></ProtectedRoute>} />
            <Route path="/products/explorer" element={<ProtectedRoute><ProductExplorer /></ProtectedRoute>} />
            <Route path="/products/hiking" element={<ProtectedRoute><ProductHiking /></ProtectedRoute>} />
            <Route path="/products/leatherboots" element={<ProtectedRoute><ProductLeatherboots /></ProtectedRoute>} />
            <Route path="/products/loafers" element={<ProtectedRoute><ProductLoafers /></ProtectedRoute>} />
            <Route path="/products/runnningshoes" element={<ProtectedRoute><ProductRunnningshoes /></ProtectedRoute>} />
            <Route path="/products/slipons" element={<ProtectedRoute><ProductSlipons /></ProtectedRoute>} />
            <Route path="/products/Sneakers" element={<ProtectedRoute><ProductSneakers /></ProtectedRoute>} />

            <Route path="/portfolio" element={<ProtectedRoute><PortfolioIndex /></ProtectedRoute>} />
            <Route path="/portfolio/index" element={<ProtectedRoute><PortfolioIndex /></ProtectedRoute>} />
            <Route path="/portfolio/aditya" element={<ProtectedRoute><PortfolioAditya /></ProtectedRoute>} />
            <Route path="/portfolio/osan" element={<ProtectedRoute><PortfolioOsan /></ProtectedRoute>} />
            <Route path="/portfolio/tekendra" element={<ProtectedRoute><PortfolioTekendra /></ProtectedRoute>} />
          </Route>

          {/* Catch all - redirect to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

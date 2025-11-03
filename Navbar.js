import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FiMenu, FiX, FiUser, FiShoppingCart } from 'react-icons/fi';
import AuthModal from './AuthModal';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const { currentUser, logout } = useAuth();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            <span className="logo-text">SINABRO</span>
            <span className="logo-subtitle">플러그인 솔루션</span>
          </Link>

          <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              홈
            </Link>
            <Link 
              to="/history" 
              className={`navbar-link ${isActive('/history') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              회사 소개
            </Link>
            <Link 
              to="/sales" 
              className={`navbar-link ${isActive('/sales') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              플러그인 구매
            </Link>
          </div>

          <div className="navbar-actions">
            {currentUser ? (
              <div className="user-menu">
                <div className="user-info">
                  <FiUser className="user-icon" />
                  <span className="user-name">{currentUser.displayName || '사용자'}</span>
                </div>
                <button className="btn btn-secondary" onClick={handleLogout}>
                  로그아웃
                </button>
              </div>
            ) : (
              <div className="auth-buttons">
                <button 
                  className="btn btn-secondary"
                  onClick={() => handleAuthClick('login')}
                >
                  로그인
                </button>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleAuthClick('signup')}
                >
                  회원가입
                </button>
              </div>
            )}
            
            <button 
              className="navbar-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
      />
    </nav>
  );
};

export default Navbar;

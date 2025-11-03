import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { FiShoppingCart, FiStar, FiDownload, FiShield, FiClock, FiCheck } from 'react-icons/fi';
import AuthModal from '../components/AuthModal';
import toast from 'react-hot-toast';
import './SalesScreen.css';

const SalesScreen = () => {
  const { currentUser } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const plugins = [
    {
      id: 1,
      name: 'Performance Pro',
      description: 'EQ, 리버브를 비롯한 믹싱 작업의 필수적 플러그인',
      price: 99000,
      originalPrice: 149000,
      rating: 4.9,
      reviews: 128,
      features: [
        '다양한 리버브의 멀티 기능',
        '다른 질감의 EQ를 동시에 사용 가능',
        '감각이 아닌 정확한 수치로! 수치화 플러그인',
        '무겁지 않은 플러그인'
      ],
      category: '성능 최적화',
      popular: true
    },
    {
      id: 2,
      name: 'Security Shield',
      description: '엔터프라이즈급 보안 솔루션',
      price: 199000,
      originalPrice: 299000,
      rating: 4.8,
      reviews: 95,
      features: [
        '실시간 위협 탐지',
        'DDoS 공격 방어',
        'SQL 인젝션 방지',
        'XSS 공격 차단',
        '24/7 보안 모니터링'
      ],
      category: '보안',
      popular: false
    },
    {
      id: 3,
      name: 'Analytics Plus',
      description: '고급 웹 분석 및 사용자 행동 추적',
      price: 149000,
      originalPrice: 199000,
      rating: 4.7,
      reviews: 87,
      features: [
        '실시간 사용자 분석',
        '히트맵 생성',
        '전환율 최적화',
        'A/B 테스트 도구',
        '상세한 리포트 생성'
      ],
      category: '분석',
      popular: false
    },
    {
      id: 4,
      name: 'E-commerce Suite',
      description: '온라인 쇼핑몰을 위한 종합 솔루션',
      price: 299000,
      originalPrice: 399000,
      rating: 4.9,
      reviews: 156,
      features: [
        '쇼핑카트 기능',
        '결제 시스템 통합',
        '재고 관리',
        '고객 관리 시스템',
        '배송 추적'
      ],
      category: '이커머스',
      popular: true
    },
    {
      id: 5,
      name: 'SEO Master',
      description: '검색엔진 최적화 전문 도구',
      price: 129000,
      originalPrice: 179000,
      rating: 4.6,
      reviews: 73,
      features: [
        '키워드 분석 도구',
        '메타 태그 자동 생성',
        '사이트맵 생성',
        '백링크 분석',
        'SEO 점수 모니터링'
      ],
      category: 'SEO',
      popular: false
    },
    {
      id: 6,
      name: 'Social Connect',
      description: '소셜미디어 통합 및 관리 도구',
      price: 79000,
      originalPrice: 119000,
      rating: 4.5,
      reviews: 64,
      features: [
        '소셜 로그인 지원',
        '소셜 공유 버튼',
        '소셜 피드 통합',
        '소셜 분석 도구',
        '자동 포스팅 기능'
      ],
      category: '소셜미디어',
      popular: false
    }
  ];

  const categories = ['전체', '성능 최적화', '보안', '분석', '이커머스', 'SEO', '소셜미디어'];
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const filteredPlugins = selectedCategory === '전체' 
    ? plugins 
    : plugins.filter(plugin => plugin.category === selectedCategory);

  const handlePurchase = (plugin) => {
    if (!currentUser) {
      setAuthMode('login');
      setShowAuthModal(true);
      return;
    }
    setSelectedPlan(plugin);
    setShowPaymentModal(true);
  };

  const handlePayment = async (paymentMethod) => {
    try {
      // 실제 결제 로직은 여기에 구현
      // 예: Stripe, PayPal 등과 연동
      toast.success('결제가 완료되었습니다! 플러그인을 다운로드할 수 있습니다.');
      setShowPaymentModal(false);
      setSelectedPlan(null);
    } catch (error) {
      toast.error('결제 중 오류가 발생했습니다.');
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  return (
    <div className="sales-screen">
      {/* Hero Section */}
      <section className="sales-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">프리미엄 플러그인 스토어</h1>
            <p className="hero-description">
              전문가들도 사용하는 플러그인을 
              <br />
              가볍게 만나보세요
              <br /> SINABRO가 여러분을 지원하겠습니다.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">플러그인</div>
              </div>
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">고객</div>
              </div>
              <div className="stat">
                <div className="stat-number">4.8</div>
                <div className="stat-label">평점</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-tab ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Plugins Grid */}
      <section className="plugins-section section">
        <div className="container">
          <div className="plugins-grid">
            {filteredPlugins.map((plugin) => (
              <div key={plugin.id} className={`plugin-card ${plugin.popular ? 'popular' : ''}`}>
                {plugin.popular && (
                  <div className="popular-badge">인기</div>
                )}
                
                <div className="plugin-header">
                  <h3 className="plugin-name">{plugin.name}</h3>
                  <div className="plugin-rating">
                    <FiStar className="star-icon" />
                    <span>{plugin.rating}</span>
                    <span className="reviews">({plugin.reviews}개 리뷰)</span>
                  </div>
                </div>

                <p className="plugin-description">{plugin.description}</p>

                <div className="plugin-features">
                  {plugin.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="feature-item">
                      <FiCheck className="check-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {plugin.features.length > 3 && (
                    <div className="more-features">
                      +{plugin.features.length - 3}개 더
                    </div>
                  )}
                </div>

                <div className="plugin-pricing">
                  <div className="price-info">
                    <span className="current-price">₩{formatPrice(plugin.price)}</span>
                    {plugin.originalPrice > plugin.price && (
                      <span className="original-price">₩{formatPrice(plugin.originalPrice)}</span>
                    )}
                  </div>
                  {plugin.originalPrice > plugin.price && (
                    <div className="discount">
                      {Math.round((1 - plugin.price / plugin.originalPrice) * 100)}% 할인
                    </div>
                  )}
                </div>

                <div className="plugin-actions">
                  <button
                    className="btn btn-primary btn-full"
                    onClick={() => handlePurchase(plugin)}
                  >
                    <FiShoppingCart className="btn-icon" />
                    구매하기
                  </button>
                  <button className="btn btn-secondary btn-full">
                    <FiDownload className="btn-icon" />
                    데모 보기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <h2 className="section-title">왜 SINABRO의 플러그인을 선택해야 할까요?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <FiShield />
              </div>
              <h3>안전한 결제</h3>
              <p>SSL 암호화와 안전한 
                <br />결제 시스템으로 보호받으세요.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FiClock />
              </div>
              <h3>즉시 다운로드</h3>
              <p>결제 완료 즉시 
                <br />플러그인을 다운로드하고 
                <br />설치할 수 있습니다.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FiStar />
              </div>
              <h3>품질 보장</h3>
              <p>엄격한 테스트를 거친 
                <br />고품질 플러그인만을 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
      />

      {/* Payment Modal */}
      {showPaymentModal && selectedPlan && (
        <div className="modal-overlay">
          <div className="modal payment-modal">
            <div className="modal-header">
              <h3>결제하기</h3>
              <button 
                className="modal-close"
                onClick={() => setShowPaymentModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-content">
              <div className="payment-summary">
                <h4>{selectedPlan.name}</h4>
                <div className="price-detail">
                  <span className="price">₩{formatPrice(selectedPlan.price)}</span>
                  {selectedPlan.originalPrice > selectedPlan.price && (
                    <span className="original-price">₩{formatPrice(selectedPlan.originalPrice)}</span>
                  )}
                </div>
              </div>
              
              <div className="payment-methods">
                <h4>결제 방법 선택</h4>
                <div className="payment-options">
                  <button 
                    className="payment-option"
                    onClick={() => handlePayment('card')}
                  >
                    신용카드
                  </button>
                  <button 
                    className="payment-option"
                    onClick={() => handlePayment('bank')}
                  >
                    계좌이체
                  </button>
                  <button 
                    className="payment-option"
                    onClick={() => handlePayment('paypal')}
                  >
                    PayPal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesScreen;

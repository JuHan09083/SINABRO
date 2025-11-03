import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiZap, FiShield, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi';
import './HomeScreen.css';

const HomeScreen = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-visible');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home-screen">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                혁신적인 <span className="gradient-text">플러그인 솔루션</span>으로
                <br />비즈니스를 한 단계 업그레이드하세요
              </h1>
              <p className="hero-description">
                최첨단 기술과 창의적 아이디어가 만나 만들어지는 플러그인으로
                <br />당신의 웹사이트와 애플리케이션을 더욱 강력하고 효율적으로 만들어보세요.
              </p>
              <div className="hero-buttons">
                <Link to="/sales" className="btn btn-primary btn-large">
                  플러그인 구매하기
                  <FiArrowRight className="btn-icon" />
                </Link>
                <Link to="/history" className="btn btn-secondary btn-large">
                  회사 소개 보기
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-card">
                <div className="card-icon">
                  <FiZap />
                </div>
                <h3>뛰어난 성능</h3>
                <p>최고의 입문용 EQ를 제공합니다.</p>
              </div>
              <div className="hero-card">
                <div className="card-icon">
                  <FiShield />
                </div>
                <h3>고품질의 질감감</h3>
                <p>저가형에서는 느낄 수 없는 뛰어난 질감을 제공합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <h2 className="section-title scroll-animate">왜 SINABRO를 선택해야 할까요?</h2>
          <p className="section-subtitle scroll-animate">
            우리의 플러그인은 단순한 도구가 아닙니다. 믹싱 실력의 성장의 반석입니다.
          </p>
          
          <div className="features-grid">
            <div className="feature-card scroll-animate">
              <div className="feature-icon">
                <FiTrendingUp />
              </div>
              <h3>초보자 지향성</h3>
              <p>본인의 음악에 맞는 EQ 설정을 제시합니다.</p>
            </div>
            
            <div className="feature-card scroll-animate">
              <div className="feature-icon">
                <FiUsers />
              </div>
              <h3>사용자 중심</h3>
              <p>직관적인 인터페이스로 누구나 쉽게 사용할 수 있습니다.</p>
            </div>
            
            <div className="feature-card scroll-animate">
              <div className="feature-icon">
                <FiAward />
              </div>
              <h3>품질 보장</h3>
              <p>엄격한 테스트를 거친 고품질 플러그인만을 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item scroll-animate">
              <div className="stat-number">500+</div>
              <div className="stat-label">만족한 고객</div>
            </div>
            <div className="stat-item scroll-animate">
              <div className="stat-number">50+</div>
              <div className="stat-label">플러그인 종류</div>
            </div>
            <div className="stat-item scroll-animate">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">가동률</div>
            </div>
            <div className="stat-item scroll-animate">
              <div className="stat-number">24/7</div>
              <div className="stat-label">고객 지원</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <div className="cta-content scroll-animate">
            <h2 className="cta-title">지금 시작하세요</h2>
            <p className="cta-description">
              무료 체험판으로 우리의 플러그인을 직접 경험해보세요.
              <br />30일 무료 체험 후 결정하세요.
            </p>
            <div className="cta-buttons">
              <Link to="/sales" className="btn btn-primary btn-large">
                무료 체험 시작하기
              </Link>
              <Link to="/history" className="btn btn-secondary btn-large">
                더 알아보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;

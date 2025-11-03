import React, { useEffect } from 'react';
import { FiCalendar, FiUsers, FiAward, FiTarget, FiTrendingUp, FiGlobe } from 'react-icons/fi';
import './HistoryScreen.css';

const HistoryScreen = () => {
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
  const milestones = [
    {
      year: '2025',
      title: '회사 설립',
      description: '혁신적인 플러그인 솔루션을 제공하기 위해 SINABRO를 설립했습니다.',
      icon: <FiCalendar />
    },
    {
      year: '2026',
      title: '첫 번째 플러그인 출시',
      description: '가벼운 질감의 리버브를 만들었습니다.',
      icon: <FiTarget />
    },
    {
      year: '2030',
      title: '100명 고객 달성',
      description: '첫 해에 100명의 고객을 확보하며 안정적인 성장의 기반을 마련했습니다.',
      icon: <FiUsers />
    },
    {
      year: '2035',
      title: '기술 혁신상 수상',
      description: '혁신적인 플러그인 아키텍처로 업계 기술 혁신상을 수상했습니다.',
      icon: <FiAward />
    },
    {
      year: '2036',
      title: '글로벌 진출',
      description: '아시아 태평양 지역으로 사업을 확장하며 글로벌 기업으로 성장했습니다.',
      icon: <FiGlobe />
    },
    {
      year: '2040',
      title: '500+ 고객 달성',
      description: '전 세계 500명 이상의 고객이 우리의 플러그인을 신뢰하고 있습니다.',
      icon: <FiTrendingUp />
    }
  ];

  const values = [
    {
      title: '혁신',
      description: '끊임없는 연구개발을 통해 최신 기술 트렌드를 반영한 혁신적인 솔루션을 제공합니다.',
      icon: <FiTarget />
    },
    {
      title: '신뢰',
      description: '고객과의 약속을 지키고, 투명한 소통을 통해 신뢰 관계를 구축합니다.',
      icon: <FiUsers />
    },
    {
      title: '품질',
      description: '엄격한 품질 관리 시스템을 통해 최고 수준의 제품과 서비스를 제공합니다.',
      icon: <FiAward />
    }
  ];

  return (
    <div className="history-screen">
      {/* Hero Section */}
      <section className="history-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">SINABRO의 이야기</h1>
            <p className="hero-description">
              2025년 음악을 사랑하는 청년들의 열정은 현재
              <br />혁신적인 플러그인 솔루션을 제공하는 기업 
              <br />SINABRO로 이어졌습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview section">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text scroll-animate">
              <h2 className="section-title">우리는 누구인가요?</h2>
              <p className="overview-description">
              SINABRO는 웹 개발자와 기업을 위한 혁신적인 플러그인 솔루션을 개발하는 
                기술 기업입니다. 우리의 목표는 복잡한 기술을 간단하고 사용하기 쉬운 
                도구로 만들어 비즈니스의 성장을 돕는 것입니다.
              </p>
              <p className="overview-description">
                2018년 설립 이래로 우리는 지속적인 혁신과 고객 중심의 서비스로 
                업계를 선도해왔습니다. 현재 전 세계 500명 이상의 고객이 우리의 
                플러그인을 신뢰하고 있으며, 이는 우리의 품질과 서비스에 대한 
                고객들의 신뢰를 보여줍니다.
              </p>
            </div>
            <div className="overview-stats scroll-animate">
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">년의 경험</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">만족한 고객</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">플러그인 종류</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">고객 만족도</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="company-values section">
        <div className="container">
          <h2 className="section-title scroll-animate">우리의 가치</h2>
          <p className="section-subtitle scroll-animate">
          SINABRO가 추구하는 핵심 가치들이 우리의 모든 결정과 행동을 이끕니다.
          </p>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card scroll-animate">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline section">
        <div className="container">
          <h2 className="section-title scroll-animate">우리의 여정</h2>
          <p className="section-subtitle scroll-animate">
          SINABRO의 성장과 발전의 주요 순간들을 되돌아봅니다.
          </p>
          
          <div className="timeline-container">
            {milestones.map((milestone, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} scroll-animate`}>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <div className="timeline-icon">
                    {milestone.icon}
                  </div>
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <p className="timeline-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section">
        <div className="container">
          <div className="mission-vision-content">
            <div className="mission-card scroll-animate">
              <h2 className="card-title">우리의 미션</h2>
              <p className="card-description">
                복잡한 기술을 간단하고 접근하기 쉬운 도구로 만들어 
                모든 기업이 디지털 혁신을 이룰 수 있도록 돕는 것입니다.
              </p>
            </div>
            
            <div className="vision-card scroll-animate">
              <h2 className="card-title">우리의 비전</h2>
              <p className="card-description">
                2030년까지 전 세계 1만 개 이상의 기업이 우리의 플러그인을 
                사용하여 비즈니스 성장을 달성하는 글로벌 플러그인 생태계의 
                선도 기업이 되는 것입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team section">
        <div className="container">
          <h2 className="section-title scroll-animate">우리의 팀</h2>
          <p className="section-subtitle scroll-animate">
            여러분의 음악을 아름답게 만들겠습니다.
          </p>
          
          <div className="team-stats">
            <div className="team-stat scroll-animate">
              <div className="team-stat-number">25+</div>
              <div className="team-stat-label">전문 개발자</div>
            </div>
            <div className="team-stat scroll-animate">
              <div className="team-stat-number">10+</div>
              <div className="team-stat-label">경험 연수</div>
            </div>
            <div className="team-stat scroll-animate">
              <div className="team-stat-number">100%</div>
              <div className="team-stat-label">고객 만족</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoryScreen;

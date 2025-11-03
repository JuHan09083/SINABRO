# TechCorp - 플러그인 판매 웹사이트

혁신적인 플러그인 솔루션을 제공하는 TechCorp의 공식 웹사이트입니다.

## 🚀 주요 기능

- **홈 화면**: 회사 소개 및 주요 서비스 안내
- **회사 소개**: TechCorp의 역사, 가치, 미션/비전 소개
- **플러그인 스토어**: 다양한 카테고리의 프리미엄 플러그인 판매
- **사용자 인증**: Firebase 기반 회원가입/로그인 시스템
- **결제 시스템**: 안전한 온라인 결제 기능
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화

## 🛠 기술 스택

- **Frontend**: React 18, React Router DOM
- **Styling**: CSS3, Styled Components
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Icons**: React Icons
- **Notifications**: React Hot Toast

## 📦 설치 및 실행

### 1. 프로젝트 클론
```bash
git clone <repository-url>
cd MyWebSite
```

### 2. 의존성 설치
```bash
npm install
```

### 3. Firebase 설정

1. [Firebase Console](https://console.firebase.google.com/)에서 새 프로젝트 생성
2. Authentication과 Firestore를 활성화
3. `src/firebase/config.js` 파일에서 Firebase 설정 정보 업데이트:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

### 4. 개발 서버 실행
```bash
npm start
```

브라우저에서 `http://localhost:3000`으로 접속하여 웹사이트를 확인할 수 있습니다.

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── Navbar.js       # 네비게이션 바
│   ├── Navbar.css
│   ├── AuthModal.js    # 로그인/회원가입 모달
│   └── AuthModal.css
├── contexts/           # React Context
│   └── AuthContext.js  # 인증 상태 관리
├── firebase/           # Firebase 설정
│   └── config.js
├── screens/            # 페이지 컴포넌트
│   ├── HomeScreen.js   # 홈 화면
│   ├── HomeScreen.css
│   ├── HistoryScreen.js # 회사 소개
│   ├── HistoryScreen.css
│   ├── SalesScreen.js  # 플러그인 스토어
│   └── SalesScreen.css
├── App.js              # 메인 앱 컴포넌트
├── App.css
├── index.js            # 앱 진입점
└── index.css           # 글로벌 스타일
```

## 🎨 주요 페이지

### 홈 화면 (HomeScreen)
- 회사 소개 및 주요 서비스 안내
- 특징 및 통계 정보
- CTA(Call to Action) 섹션

### 회사 소개 (HistoryScreen)
- 회사 개요 및 통계
- 핵심 가치 소개
- 회사 발전 타임라인
- 미션/비전 및 팀 소개

### 플러그인 스토어 (SalesScreen)
- 카테고리별 플러그인 필터링
- 상세한 플러그인 정보 및 가격
- 사용자 인증 기반 구매 시스템
- 결제 모달 및 결제 방법 선택

## 🔐 인증 시스템

Firebase Authentication을 사용하여 다음 기능을 제공합니다:

- 이메일/비밀번호 회원가입
- 이메일/비밀번호 로그인
- 사용자 프로필 관리
- 보안된 라우팅

## 💳 결제 시스템

현재 데모 버전으로 구현되어 있으며, 실제 운영을 위해서는 다음 결제 서비스와 연동이 필요합니다:

- Stripe
- PayPal
- 국내 PG사 (이니시스, KG모빌리언스 등)

## 📱 반응형 디자인

- **데스크톱**: 1200px 이상
- **태블릿**: 768px - 1199px
- **모바일**: 767px 이하

모든 화면 크기에서 최적화된 사용자 경험을 제공합니다.

## 🚀 배포

### 빌드
```bash
npm run build
```

### 배포 옵션
- **Netlify**: `build` 폴더를 Netlify에 업로드
- **Vercel**: GitHub 연동으로 자동 배포
- **Firebase Hosting**: Firebase CLI 사용

## 🔧 커스터마이징

### 색상 테마 변경
`src/index.css`에서 CSS 변수를 수정하여 색상을 변경할 수 있습니다:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #1a202c;
  --background-color: #f8fafc;
}
```

### 플러그인 데이터 수정
`screens/SalesScreen.js`의 `plugins` 배열을 수정하여 판매할 플러그인을 변경할 수 있습니다.

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 언제든지 연락주세요.

---

**TechCorp** - 혁신적인 플러그인 솔루션으로 비즈니스를 성장시키세요! 🚀

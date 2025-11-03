# GitHub 업로드 가이드

이 문서는 프로젝트를 GitHub에 업로드하는 방법을 안내합니다.

## 1단계: Git 설치 확인

Windows에서 Git이 설치되어 있는지 확인:

```powershell
git --version
```

Git이 설치되어 있지 않다면 [Git 공식 웹사이트](https://git-scm.com/download/win)에서 다운로드하고 설치하세요.

## 2단계: GitHub 계정 및 저장소 준비

1. [GitHub](https://github.com)에 로그인하거나 계정을 만드세요.
2. 새 저장소를 생성하세요:
   - GitHub에서 "New repository" 클릭
   - 저장소 이름 입력 (예: `MyWebSiteNew` 또는 원하는 이름)
   - Public 또는 Private 선택
   - **README, .gitignore, license 추가하지 마세요** (이미 프로젝트에 있음)
   - "Create repository" 클릭

## 3단계: 로컬 저장소 초기화 및 커밋

프로젝트 폴더에서 다음 명령어들을 순서대로 실행하세요:

```powershell
# Git 저장소 초기화
git init

# 모든 파일 추가 (build 폴더는 .gitignore에 의해 제외됨)
git add .

# 첫 번째 커밋
git commit -m "Initial commit: TechCorp 플러그인 판매 웹사이트"

# 기본 브랜치를 main으로 설정 (GitHub 기본 브랜치)
git branch -M main
```

## 4단계: GitHub에 푸시

GitHub에서 생성한 저장소의 URL을 복사한 후 (예: `https://github.com/yourusername/repository-name.git`), 다음 명령어 실행:

```powershell
# 원격 저장소 추가 (yourusername과 repository-name을 실제 값으로 변경)
git remote add origin https://github.com/yourusername/repository-name.git

# GitHub에 푸시
git push -u origin main
```

GitHub 로그인이 필요하면 브라우저에서 인증하거나 Personal Access Token을 사용하세요.

## 주의사항

- `.gitignore` 파일이 업데이트되어 있어 `node_modules`, `build` 폴더 등이 GitHub에 업로드되지 않습니다.
- Firebase 설정 파일(`src/firebase/config.js`)은 이미 플레이스홀더 값으로 되어 있어 안전하게 커밋할 수 있습니다.
- 실제 프로젝트에서는 Firebase 설정 정보를 환경 변수로 관리하는 것을 권장합니다.

## 문제 해결

### 인증 오류
GitHub 푸시 시 인증이 필요합니다:
- Personal Access Token 사용 (GitHub Settings > Developer settings > Personal access tokens)
- 또는 GitHub Desktop 같은 GUI 도구 사용

### "remote origin already exists" 오류
다음 명령어로 기존 원격 저장소를 제거 후 다시 추가:
```powershell
git remote remove origin
git remote add origin https://github.com/yourusername/repository-name.git
```

## 다음 단계

GitHub에 업로드한 후:
- GitHub Pages로 웹사이트 배포 고려
- Issues와 Projects로 프로젝트 관리
- Actions로 CI/CD 설정
- Collaborators 추가로 팀 협업


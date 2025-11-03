@echo off
echo ========================================
echo GitHub에 코드 업로드 스크립트
echo ========================================
echo.

REM Git이 설치되어 있는지 확인
git --version >nul 2>&1
if errorlevel 1 (
    echo [오류] Git이 설치되어 있지 않습니다.
    echo 다음 사이트에서 Git을 설치하세요: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo [1/5] Git 저장소 초기화 중...
if not exist .git (
    git init
    echo 저장소 초기화 완료
) else (
    echo 이미 Git 저장소입니다.
)

echo.
echo [2/5] 파일 추가 중...
git add .

echo.
echo [3/5] 커밋 생성 중...
git commit -m "Initial commit: TechCorp 플러그인 판매 웹사이트"
if errorlevel 1 (
    echo 이미 커밋된 내용이 없거나 오류가 발생했습니다.
)

echo.
echo [4/5] 브랜치를 main으로 설정 중...
git branch -M main

echo.
echo [5/5] GitHub에 연결하기
echo.
echo ========================================
echo 다음 단계:
echo 1. 아래 명령어에서 YOUR-USERNAME을 GitHub 사용자명으로 변경하세요
echo 2. REPOSITORY-NAME을 저장소 이름(SINABRO)으로 변경하세요
echo.
echo git remote add origin https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git
echo git push -u origin main
echo.
echo 예시:
echo git remote add origin https://github.com/JuHan09083/SINABRO.git
echo git push -u origin main
echo ========================================
echo.

set /p userinput="원격 저장소를 자동으로 추가하시겠습니까? (y/n): "
if /i "%userinput%"=="y" (
    set /p username="GitHub 사용자명을 입력하세요 (예: JuHan09083): "
    set /p reponame="저장소 이름을 입력하세요 (예: SINABRO): "
    
    git remote remove origin 2>nul
    git remote add origin https://github.com/%username%/%reponame%.git
    echo.
    echo 원격 저장소 추가 완료!
    echo.
    echo GitHub에 푸시하려면 다음 명령어를 실행하세요:
    echo git push -u origin main
    echo.
    set /p pushnow="지금 바로 푸시하시겠습니까? (y/n): "
    if /i "%pushnow%"=="y" (
        echo.
        echo GitHub에 푸시 중...
        git push -u origin main
        if errorlevel 1 (
            echo.
            echo 푸시 중 오류가 발생했습니다.
            echo GitHub 인증이 필요할 수 있습니다.
            echo GitHub Desktop을 사용하거나 Personal Access Token을 설정하세요.
        ) else (
            echo.
            echo 성공적으로 GitHub에 업로드되었습니다!
        )
    )
)

pause


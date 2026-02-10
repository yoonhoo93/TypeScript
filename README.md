# 📘 TypeScript Project Quick Start Guide

이 가이드는 타입스크립트 프로젝트의 초기 설정부터 컴파일, 주요 설정값까지 한 번에 파악하기 위해 작성되었습니다.

## 1. 프로젝트 초기 설정 (Setup)

터미널에서 아래 명령어를 순서대로 실행하여 환경을 구축합니다.

```bash
# 1. 프로젝트 폴더 생성 및 이동
mkdir my-typescript-app
cd my-typescript-app

# 2. npm 초기화 (package.json 생성)
npm init -y

# 3. TypeScript 설치 (개발용 의존성)
npm install typescript --save-dev

# 4. TypeScript 설정 파일(tsconfig.json) 생성
npx tsc --init


{
  "compilerOptions": {
    "target": "ES6",                          /* 컴파일될 자바스크립트 버전 */
    "module": "CommonJS",                     /* 모듈 시스템 설정 */
    "rootDir": "./src",                       /* TS 소스 파일 경로 */
    "outDir": "./dist",                       /* 컴파일된 JS 저장 경로 */
    "strict": true,                           /* 엄격한 타입 검사 활성화 */
    "esModuleInterop": true,                  /* ES 모듈과 CommonJS 간 호환성 */
    "skipLibCheck": true,                     /* 라이브러리 타입 검사 생략 (속도 향상) */
    "forceConsistentCasingInFileNames": true  /* 파일명 대소문자 구분 강제 */
  },
  "include": ["src/**/*"],                    /* 컴파일에 포함할 경로 */
  "exclude": ["node_modules"]                 /* 컴파일에서 제외할 경로 */
}
```

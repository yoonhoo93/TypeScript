# 📘 TypeScript Project Quick Start Guide

이 가이드는 타입스크립트 프로젝트의 초기 설정부터 컴파일, 주요 설정값까지 한 번에 파악하기 위해 작성함
타입스크립트는 점진적 타입시스템을 채택하고있음, 점진적타입이란건 변수를 선언할때 변수에 타입이 정의를 하지않고,
초기값을 넣어주면 알아서 타입스크립트가 초기값을 기준으로 변수의 타입을 추론한다.
예외론 함수에 매개변수에 타입을 지정하지않으면, 타입스크립트는 추론이 불가하여 오류가 발생할 확률이 높다.

## 1. 프로젝트 초기 설정 (Setup)

터미널에서 아래 명령어를 순서대로 실행하여 환경을 구축

```bash
# 1. 프로젝트 폴더 생성 및 이동
mkdir my-typescript-app
cd my-typescript-app

# 2. npm 초기화 (package.json 생성)
npm init -y

# 3. TypeScript 설치 (개발용 의존성)
npm i @types/node

# 4. TypeScript 설정 파일(tsconfig.json) 생성
npx tsc --init

# 5. 컴파일 없이 터미널에서 값 확인
npx tsx .\src\chapter5.ts  <- 예제파일 경로

# 6. Node.js 환경에서 ES 모듈(import/export)을 사용하기 위해서는 package.json에 반드시 아래 항목을 추가해야 함
{
  "name": "my-modern-ts",
  "version": "1.0.0",
  "type": "module",  /* 이 부분을 추가해야 ESM이 활성화됩니다 */
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "watch": "tsc -w"
}
}

{
  /* ===============================
     📌 TypeScript가 컴파일할 파일 범위
  =============================== */
  "include": ["src"], // src 폴더 안의 파일만 컴파일

  /* ===============================
     📌 TypeScript 컴파일 옵션
  =============================== */
  "compilerOptions": {

    "target": "esnext",                          /* 컴파일될 자바스크립트 버전 */
    "module": "esnext",                     /* 모듈 시스템 설정 */
    "rootDir": "./src",                       /* TS 소스 파일 경로 */
    "outDir": "./dist",                       /* 컴파일된 JS 저장 경로 */
    "strict": true,                           /* 엄격한 타입 검사 활성화 */
    "esModuleInterop": true,                  /* ES 모듈과 CommonJS 간 호환성 */
    "skipLibCheck": true,                     /* 라이브러리 타입 검사 생략 (속도 향상) */
    "forceConsistentCasingInFileNames": true  /* 파일명 대소문자 구분 강제 */


    /* -------------------------------
       📌 JS 문법 버전 설정
    -------------------------------- */
    "target": "ESNext",
    // 최종적으로 생성될 JS 버전
    // ESNext = 최신 문법 유지
    // (Node 최신버전 or 번들러 사용시 추천)

    "module": "ESNext",
    // 모듈 시스템 방식
    // ESNext = import/export 유지
    // CommonJS는 require 방식

    "moduleResolution": "node",
    // 모듈 경로 해석 방식 (node 스타일)

    /* -------------------------------
       📌 출력 경로 설정
    -------------------------------- */
    "outDir": "./dist",
    // 컴파일된 JS 파일이 생성될 폴더

    "rootDir": "./src",
    // TS 원본 코드의 루트 경로

    "removeComments": true,
    // 컴파일 후 JS 파일에서 주석 제거

    /* -------------------------------
       📌 타입 검사 강화 (실무 필수)
    -------------------------------- */
    "strict": true,
    // 모든 엄격 모드 활성화 (실무 필수)

    "noImplicitAny": true,
    // 타입을 지정하지 않으면 에러 발생

    "strictNullChecks": true,
    // null / undefined를 엄격하게 체크

    "noImplicitReturns": true,
    // 함수에서 반드시 return 하도록 강제

    "noFallthroughCasesInSwitch": true,
    // switch문에서 break 없이 넘어가면 에러

    /* -------------------------------
       📌 JS 호환성 관련
    -------------------------------- */
    "esModuleInterop": true,
    // CommonJS 모듈을 import 방식으로 사용 가능하게

    "allowSyntheticDefaultImports": true,
    // default export 없는 모듈도 default import 허용

    /* -------------------------------
       📌 속도 & 안정성
    -------------------------------- */
    "skipLibCheck": true,
    // node_modules 타입 검사 생략 (빌드 속도 향상)

    "forceConsistentCasingInFileNames": true,
    // 파일명 대소문자 다르면 에러 (윈도우/맥 충돌 방지)

    /* -------------------------------
       📌 소스맵 설정 (디버깅용)
    -------------------------------- */
    "sourceMap": true,
    // JS와 TS를 연결하는 맵 파일 생성 (디버깅용)

    /* -------------------------------
       📌 JSON import 허용
    -------------------------------- */
    "resolveJsonModule": true,

    /* -------------------------------
       📌 타입 정의 위치
    -------------------------------- */
    "types": ["node"]

  },

  /* ===============================
     📌 ts-node 설정 (Node에서 바로 실행시)
  =============================== */
  "ts-node": {
    "esm": true
  }
}

```

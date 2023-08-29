# 슈퍼코딩 4주 팀프로젝트(쇼핑몰)

## 🚀사용 기술 스택

<!-- 1. React, JavaScript 스택을 사용한다.
2. TypeScript, Next.js 스택을 사용한다.
3. Redux 또는 Context API를 통해 전역 상태를 관리한다.
4. 커스텀 훅을 통해 공통으로 사용하는 로직을 관리한다.
5. 스타일링은 styled-components 또는 tailwindcss 사용을 권장한다. -->

## 🚀 네이밍 규칙

- 함수명, 변수명: camelCase
- 컴포넌트, 생성자 함수, Class: PascalCase
- className: snake_case
- 컴포넌트 한개가 포함된 폴더의 경우 : PascalCase(ex. Main, Detail )
- 컴포넌트를 모아놓은 폴더의 경우 : 소문자 (ex. main, common)
- 스타일 파일명 : 컴포넌트명.styles.jsx ( ex. Main.styles.jsx )
- 다른 파트에서도 사용될 것 같은 컴포넌트는 common 폴더에서 관리( ex. Button, Input )

## 🚀 코드

- api 연결: axios로 통신
- css 적용: emotion 사용
- 코드는 최대한 함수형으로 작성

## 🚀 커밋 컨벤션

- 기능 별로 커밋(최대한 상세히)
- pull request시에는 팀원들과 이야기
- feat **#이슈번호** : 새로운 기능 추가
- fix **#이슈번호** : 버그 수정
- style **#이슈번호** : 스타일 수정
- docs **#이슈번호** : 문서 수정
- test **#이슈번호** : 테스트 코드 추가
- refactor **#이슈번호** : 코드 리펙토링

## 🚀 Git Branch 전략

- 브랜치명은 camelCase로 작성 (ex) => infiniteScroll
- main: 기준이 되는 브랜치로 제품을 배포하는 브랜치 (owner승인만 가능)
- dev: 개발 브랜치로 개발자들이 이 브랜치를 기준으로 각자 작업한 기능들을 Merge(리뷰어 2명이상 확인 후 merge가능)
- feature/해당 기능 명: 단위 기능을 개발하는 브랜치로 기능 개발이 완료되면 **dev 브랜치에 Merge**
- 기능 단위를 최대한 세분화해서 재사용성을 늘리고, 컨플릭트를 최소화
- 개발한 브랜치로 push하기 전에 꼭 fetch, pull 수행 후 컨플릭트 해결하고 push
- 참조: [https://velog.io/@kw2577/Git-branch-%EC%A0%84%EB%9E%B5]

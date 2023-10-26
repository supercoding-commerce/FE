# CLIP : Frontend

## 💻 프로젝트 소개
- 여러 쇼핑몰을 한 곳에 모아 사용자들이 좀 더 쉽게 다양한 쇼핑몰에 접근할 수 있도록 만든 쇼핑몰 사이트입니다.
<br/>

## 🧑‍🤝‍🧑 멤버
<table style="text-align: center">
<tr>
<td colspan="5">Front-End</td>
<td colspan="5">Back-End</td>
</tr>
<tr>
<td>육동영</a></td>
<td>김승규</a></td>
<td>조수빈</a></td>
<td>김희진</a></td>
<td>문지은</a></td>
<td>함다빈</a></td>
<td>문종현</a></td>
<td>민경원</a></td>
<td>유재준</a></td>
<td>김채현</a></td>
</tr>
<tr>
<td><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></td>
<td><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></td>
<td><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></td>
<td><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></td>
<td><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></td>
<td><img src="https://img.shields.io/badge/Springboot-6DB33F?style=flat-square&logo=Springboot&logoColor=white"/></td>
<td><img src="https://img.shields.io/badge/Springboot-6DB33F?style=flat-square&logo=Springboot&logoColor=white"/></td>
<td><img src="https://img.shields.io/badge/Springboot-6DB33F?style=flat-square&logo=Springboot&logoColor=white"/></td>
<td><img src="https://img.shields.io/badge/Springboot-6DB33F?style=flat-square&logo=Springboot&logoColor=white"/></td>
<td><img src="https://img.shields.io/badge/Springboot-6DB33F?style=flat-square&logo=Springboot&logoColor=white"/></td>
</table>

<br/>

## 📆 프로젝트 기간
- 2023.08 ~ 2023.09
<br/>

## 📖 사용기술 및 라이브러리
- `TypeScript`  `React` `StompJs` `Recoil`  `Axios` `Emotion`  `React-Query` 
<br/>

## 🔔 내가 참여한 주요 기능
<details>
<summary>조수빈</summary>

### 공통 컴포넌트
- 프론트엔드 개발자들과의 협업을 위한 공통 컴포넌트 개발로 개발 리소스 절약 및 컴포넌트 추상화를 적용했습니다.
- 개발 리소스를 줄이기 위해 회의를 통해 공통으로 사용되는 컴포넌트를 선별 후 맡은 공통 컴포넌트를 개발했습니다.
- 개발 리로스 절약과 컴포넌트 추상화 및 단일 책임 원칙 기반으로 클린 코드를 작성하려고 노력했습니다.

#### 1. Button 공동 컴포넌트 ([소스코드](https://github.com/cho-subin/-Clip/blob/dev/src/components/common/Button/Button.tsx))
<details>
<summary>공동 컴포넌트 과정</summary>

<img width="500" alt="스크린샷 2023-10-23 오후 6 20 57" src="https://github.com/cho-subin/-Clip/assets/100771469/58c0ce50-8706-49b1-983d-d5a17fed6557">
<br/>
<br/> <img width="477" alt="스크린샷 2023-10-23 오후 6 26 06" src="https://github.com/cho-subin/-Clip/assets/100771469/70d4a573-b716-4ff6-982b-5fdc9be8557b">

- 피그마에서 사용할 버튼들을 모아서 비슷한 모양끼리 정리 후 정리한 버튼들을 토대로 variant, size, color,width를 기준으로 추상화 계획을 세웠습니다.
<br/> 
<br/> <img width="491" alt="스크린샷 2023-10-23 오후 6 42 17" src="https://github.com/cho-subin/-Clip/assets/100771469/be6abf53-1347-464a-8cc8-501af260f714">
<br/> <img width="387" alt="스크린샷 2023-10-23 오후 6 43 27" src="https://github.com/cho-subin/-Clip/assets/100771469/fc660405-6ccf-481a-b9ea-f90d8640b609">

- 이렇게 사용할 컴포넌트에 Button 컴포넌트 import와 props로 원하는 버튼의 설정을 내려주어 컴포넌트에 요구되는 버튼을 생성할 수 있었습니다.
</details>

#### 2. Catagory 공동 컴포넌트 ([소스코드](https://github.com/cho-subin/-Clip/blob/dev/src/components/common/Category/Category.tsx))
<details>
<summary>공동 컴포넌트 과정</summary>
<img width="500" alt="스크린샷 2023-10-23 오후 6 50 37" src="https://github.com/cho-subin/-Clip/assets/100771469/c0a1b79e-5987-43bd-bb69-a04e1183a4b0">
<br/>
  
- Catagory ui는 동일하고 안의 내용과 icon이 달라지기 때문에 icon, title, onClick(클릭했을때 이동할 주소), options(category의 하위 category list)를 기준으로 추상화 계획을 세웠습니다.
<br/> 
<br/> <img width="287" alt="스크린샷 2023-10-23 오후 7 08 00" src="https://github.com/cho-subin/-Clip/assets/100771469/02db9d8b-9ed4-4ffa-a8b7-b724634b6772">
<br/> <img width="287" alt="스크린샷 2023-10-23 오후 7 09 26" src="https://github.com/cho-subin/-Clip/assets/100771469/b0aa976f-0294-4c05-97ce-a700cac11649">

- 이렇게 사용할 컴포넌트에 category 컴포넌트 import와 props로 원하는 상위, 하위 카테고리의 설정을 내려주어 컴포넌트에 요구되는 카테고리들을 생성할 수 있었습니다.
</details>

### 모바일 퍼스트 ui
<img width="576" alt="스크린샷 2023-10-23 오후 7 29 57" src="https://github.com/cho-subin/Clip/assets/100771469/73153b7b-bdd5-4ca7-bcf9-9c335205eaa6">

- 유저가 쇼핑몰을 접속할때 웹 / 모바일 비중 데이터 관련 서치를 통해 모바일로 접속하는 유저가 약 2배이상 많다는것을 알게되었습니다.
- 그로인해 clip 프로젝트도 유저의 사용성, 접근성 향상을 위해 모바일 퍼스트 ui로 진행하게 되었습니다.
</details>

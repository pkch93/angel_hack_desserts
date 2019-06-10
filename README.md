# Desserts

> Angelhack Seoul 2019 AWS Challenge Winner

[Angelhack?](<https://event-us.kr/angelhackseoul/event/7465>)

우울증 환자를 위한 감성 트랙킹 서비스 Desserts

## Members

|  이름  |   역할    |
| :----: | :-------: |
| 김예랑 | 기획 / PM |
| 박경철 | 개발총괄  |
| 김다롬 | back-end  |
| 김민지 | front-end |
| 김나혜 | 디자이너  |

## Environment

| front-end |  back-end   | database |
| :-------: | :---------: | :------: |
| react.js  | aws amplify | graphql  |

## Overview

## Feature

1. 간단한 질문을 통해 클라이언트의 현 감정 상태를 체크
   - 질문의 대답은 O / X 형식
   - O / X로 받은 응답을 수치화하여 현재 상태를 판단하기 좋게 정량화
2. 질문을 완료하면 이전 기록들을 토대로 통계를 내서 오늘의 기분에 대한 문구를 보여줌
3. 시각적으로 파악하기 편하게 그래프로 일간 / 월간, 캘린더로 월간 기분 상태를 체크
4. 전체 기록을 리포트로 인쇄할 수 있도록 제공

## Mock Up

![Desserts Application Mock Up](https://user-images.githubusercontent.com/30178507/58955195-385ed180-87d6-11e9-8830-2038467468d1.jpg)

## To-do

> 우선순위 순

1. React Router 적용
2. ~~redux 적용하여 인증정보 관리~~
    > redux 적용은 추후에,,
    >
    > 인증정보는 cognito 커스텀 후 localstorage 사용 예정
3. ~~캘린더 구현~~ (완료)
4. 리포트 구현
5. aws cognito의 HOC인 Authenticator 커스텀 (navigation bar 구현)
6. ~~반응형 웹 적용~~ (완료)
7. PWA 적용
# Desserts

> Angelhack Seoul 2019 AWS Challenge Winner

[Angelhack?](<https://event-us.kr/angelhackseoul/event/7465>)

우울증 환자를 위한 감성 트랙킹 서비스 Desserts

## Members

|  이름  |   역할    |
| :----: | :-------: |
| 김예랑 | 기획 / PM |
| 박경철 | front-end / back-end |
| 김다롬 | back-end  |
| 김민지 | front-end |
| 김나혜 | 디자이너  |

## Environment

| front-end |  back-end   | query language |
| :-------: | :---------: | :------: |
| react.js  | aws amplify | graphql |

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

1. redux 적용
    - calendar 및 graph에 필요한 정보에 redux와 redux-saga 적용

2. 그래프 주간 / 월간 기능 구현

3. 캘린더 월별 조회 기능 구현
    - 데이터가 없는 경우 볼 수 없도록 예외처리 필요
    - 현재 날짜 이후의 월로 넘어가지 못하도록 예외처리 필요

4. 리포트 출력 기능 구현
    - 어떤 내용이 들어가야하는지 정리

5. PWA 적용

6. AWS amplify에서 Spring boot 프로젝트로 이전

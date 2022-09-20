# fint api server

### api 목록

| api 이름           | 설명             |
| ------------------ | ---------------- |
| **accounts**       | 계좌 정보        |
| **accountsStatus** | 계좌 상태 정보   |
| **brokers**        | 은행 정보        |
| **brokersFormat**  | 은행별 계좌 포맷 |
| **sider**          | 사이드바 네임    |
| **users**          | 유저 정보        |
| **usersSettings**  | 유저 계정 정보   |

<br/><br/>

### accounts

- header에 인증 필요

```jsx
{
  "accounts": [
    {
      "id": 1,
      "user_id": 1,
      "uuid": "1fa23b0b-1a7d-4b94-a284-614946fa7144",
      "broker_id": "268",
      "status": 9999,
      "number": "141131083797",
      "name": "Money Market Account",
      "assets": "512319891.67",
      "payments": "488205679.91",
      "is_active": true,
      "created_at": "2020-12-26T07:13:19.371Z",
      "updated_at": "2021-03-13T11:25:56.369Z"
    },
    ...
  ]
}
```

<br/><br/>

### accountsStatus

- header에 인증 필요

```jsx
{
  "관리자확인필요": 9999,
  "입금대기": 1,
  "운용중": 2,
  "투자중지": 3,
  "해지": 4
}
```

<br/><br/>

### brokers

```jsx
{
  "209": "유안타증권",
  "218": "현대증권",
  "230": "미래에셋증권",
  "238": "대우증권",
  ...
}

```

<br/><br/>

### brokersFormat

```jsx
{
  "209": "00-00000000-00",
  "218": "00-0000000-000",
  "230": "00-000000-0000",
  ...
}

```

<br/><br/>

### sider

```jsx
{
  "sider": [
    { "id": 1, "name": "대시보드", "keyword": "dashbaord" },
    { "id": 2, "name": "계좌 목록", "keyword": "accounts" },
    { "id": 3, "name": "사용자 목록", "keyword": "users" },
    { "id": 9999, "name": "로그아웃", "keyword": "logout" }
  ]
}

```

<br/><br/>

### users

- header에 인증 필요

```jsx
{
  "users": [
    {
      "id": 1,
      "uuid": "64e43e25-ef93-4037-882e-7bf6d926460e",
      "photo": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/511.jpg",
      "name": "Evan 장",
      "email": "11@gmail.com",
      "age": 55,
      "gender_origin": 4,
      "birth_date": "1990-03-13T06:46:18.232Z",
      "phone_number": "010-3493-4336",
      "address": "Libyan Arab Jamahiriya 남구",
      "detail_address": "882 연산동 Apt. 672",
      "last_login": "2022-03-28T10:34:38.767Z",
      "created_at": "2019-11-13T07:22:35.554Z",
      "updated_at": "2019-10-13T13:51:08.196Z"
    },
    ...
  ]
}
```

<br/><br/>

### usersSettings

- header에 인증 필요

```jsx
{
  "userSetting": [
    {
      "id": 41772,
      "uuid": "64e43e25-ef93-4037-882e-7bf6d926460e",
      "allow_marketing_push": true,
      "allow_invest_push": false,
      "is_active": true,
      "is_staff": true,
      "created_at": "2020-02-03T05:52:15.357Z",
      "updated_at": "2021-08-08T20:39:37.827Z"
    },
    ...
  ]
}
```

<br/><br/>

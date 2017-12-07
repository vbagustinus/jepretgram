# jepretgram
Mini instragram using Vue & Express, you can share your photo after login

List Endpoint for server:

| Route / Endpoint   | HTTP   | Description      |
|:-----------|:------:|:--------|
| `/login`       |POST           | Login user|
| `/register`    |POST           | Register user|
| `/`            |POST | Display all photos|
|`/`|GET| Share photo with caption (user login & verified)|
|`/:id`|DEL| Delete photo (user login & verified)|
|`/:id`|PUT| Edit caption (user login & verified)|
|`love/:id`|PUT| Love caption (user login & verified)|

How to usage :
```
CLIENT =>
cd client
npm install
npm run dev
```
```
SERVER =>
cd server
npm install
npm run dev
```
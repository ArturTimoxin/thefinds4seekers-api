## Description

thefinds4seekers API

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Credentials

## IP server: 138.68.25.149

SSH

ssh root@138.68.25.149

## ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDh13Egb46KsgxbjbDG3RtwfEZ8QsxxsVs1mTV7hIeRISQ/3EKAVbMp6Q7rA8/nJf2QVILlag71TegZ5JhDEC1h9OqMoRbSAMBB1dWsMtHYycSJCTxN2AFWcdZ8H5LzpIIo3KmvOSrATf9681nbi36XR9A1xomNhTJPgqOJlQCMaNII6NiUK5yAzwRkIbfUli0cT6C9HGZIx8/YI4Zr+uiXYy4YJtxsR/5W7ROvFyjxG3yYMY/7TiIv7wZZHuOH7w4ywwsERnz6XXAIYr6QxdKuMkbpye2bl5N6aLbdspg4dgzgVVtK4gT5/USV6EhnzSGBiWTJh1XHvxItiXWFOrt9 timoxin.artur@gmail.com

admin accounts:
thefinds4seekers@gmail.com
tratatatata76

---

account with a lot of ads
timoxin.artur@gmail.com
62YPe7Q5

---

google account and (SMTP)

thefinds4seekers@gmail.com
lolopl67

0981102874

25.05.2023 UPDATE SMPTP

App Password:

rgckewkuhnelxlbw

---

MONGO

use admin
db.createUser(
{
user: "root",
pwd: "Wasdf3536",
roles: [ { role: "readWrite", db: "thefinds4seekers" } ]
}
)

DB HOST CREDENTIALS:
138.68.25.149:27017
root
Wasdf3536

---

DEPLOYMENT

kill process by port
fuser -k 3000/tcp

API (http://138.68.25.149:3001/)

thefinds4seekers-api
npm run build
npm run start:prod &
Enter >

FRONT (http://138.68.25.149)

thefinds4seekers-next
npm run build
npm run start & (port 80 - settings in package.json next start)
Enter >

HOW TO MAKE NODEMAILER SEND (2023 update): https://www.youtube.com/watch?v=klDTBiW6iiM

INSTALL MONGODB MACOS (worked with mongodb-community@5.0)

https://metanit.com/nosql/mongodb/1.4.php

IMPORT DUMPS

mongorestore -d db_name folder_with_bson_files

=======

.ENV

SERVER

APP_PORT=3001
UPLOADS_DIRRECTORY=assets
APP_URL=http://localhost:3001
SECRET_KEY=secret

MONGO_DB_HOST=127.0.0.1
MONGO_DB_PORT=27017
MONGO_DB_USERNAME=root
MONGO_DB_PASSWORD=Wasdf3536
MONGO_DB_DATABASE=thefinds4seekers
MONGO_DB_AUTHSOURCE=admin

SMTP=gmail
SMTP_USER=thefinds4seekers@gmail.com
SMTP_PASSWORD=rgckewkuhnelxlbw

---

FRONT

API_URL=http://localhost:3001
GOOGLE_MAPS_API_KEY=AIzaSyBwagwxR6PPGzFqcl-NG4FPVextZr1Nsds

OLD ONE: GOOGLE_MAPS_API_KEY=AIzaSyAolXVBph\_\_8LXk-JukgnxDUI4LPDQAsxQ

next.config.js

const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
withSass(
withImages({
target: "serverless",
env: {
API_URL: "http://127.0.0.1:3001/",
PORT: 80,
ADMIN_EMAIL: "thefinds4seekers@gmail.com",
GOOGLE_MAPS_API_KEY: "AIzaSyBwagwxR6PPGzFqcl-NG4FPVextZr1Nsds",
},
})
)
);

---

## Support

thefinds4seekers@gmail.com

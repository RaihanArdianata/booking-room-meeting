# booking-room-meeting

[![N|Solid](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)
[![N|Solid](https://duckduckgo.com/i/a65969b4.png)](https://duckduckgo.com/i/a65969b4.png)
[![N|Solid](https://jwt.io/img/pic_logo.svg)](https://jwt.io/)

### Route

* http://localhost:5000/user/login :post
* http://localhost:5000/user/register :post

* http://localhost:5000/booking :get
* http://localhost:5000/booking/myBooking :get
* http://localhost:5000/booking/newBook :post
* http://localhost:5000/booking/myBooking?id=2 :put
* http://localhost:5000/booking/myBooking?id=2 :delete

* http://localhost:5000/rooms :get

### tech

* hashing password = bcryptjs
* token = jwt
* momment = format tanggal
* nodemailer = kirim email

Install the dependencies and devDependencies and start the server.

```sh
$ cd booking-room-meeting
$ npm install
$ node ./bin/http.js || nodemon ./bin/http.js jika sudah install global
```

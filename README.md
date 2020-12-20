# booking-room-meeting

[![N|Solid](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)]()
[![N|Solid](https://duckduckgo.com/i/a65969b4.png)]()
[![N|Solid](https://jwt.io/img/pic_logo.svg)]()
[![N|Solid](https://duckduckgo.com/i/d006c491.png =100x50)]()
[![N|Solid](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.nTRBhzKoS_yTCNP591vKjAHaHa%26o%3D6%26pid%3DApi&f=1)]()


### postman doc
* https://documenter.getpostman.com/view/3536034/TVssk95M
* <a href="https://github.com/RaihanArdianata/booking-room-meeting/blob/master/room_meeting.postman_collection.json">collection postman json</a>
### route

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
* db = sql
* sequelize

Install the dependencies and devDependencies and start the server.

```sh
$ cd booking-room-meeting
$ npm install
$ node ./bin/http.js || nodemon ./bin/http.js jika sudah install global

//after that creat db and run seeder
$ sequelize db:create
$ sequelize db:migrate
$ sequelize db:seed:all
```

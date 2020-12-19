# booking-room-meeting

### Route

* http://localhost:5000/user/login :post
* http://localhost:5000/user/register :post

* http://localhost:5000/booking :get
* http://localhost:5000/booking/myBooking :get
* http://localhost:5000/booking/newBook :post
* http://localhost:5000/booking/myBooking?id=2 :put
* http://localhost:5000/booking/myBooking?id=2 :delete

* http://localhost:5000/rooms:get

Install the dependencies and devDependencies and start the server.

```sh
$ cd booking-room-meeting
$ npm install
$ node ./bin/http.js || nodemon ./bin/http.js jika sudah install global
```

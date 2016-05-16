import test from 'ava';

// 1、引入`mongoose connect`
require('../connect');

// 2、引入`User` Model
const User = require('../user');

// 3、定义`user` Entity
const user = new User({
  username: 'i5ting',
  password: '0123456789'
});

test.before.cb( t => {
  User.remove({}, (err, u) => {
    t.end()
  })
});


test.cb('#register()', t => {
  user.save((err, u) => {
    t.true(u.password.length > 50)
    t.end()
  })
});

test.cb('#User.login(username, password) sucess', t => {
  let _user = new User({
    username: 'i5ting for is_login_valid',
    password: '0123456789'
  });
  _user.save((err, u) => {
    User.login('i5ting for is_login_valid', '0123456789', function (err, result) {
      if (!err) {
        t.pass()
        t.end()
      }
    })
  })
});

test.cb('#User.login(username, password) fail with username is not exist', t => {
  let _user = new User({
    username: 'i5ting for is_login_valid2',
    password: '0123456789'
  });
  _user.save((err, u) => {
    User.login('i5ting for is_login_valid not exist', '0123456789', function (err, result) {
      if (err) {
        // console.log(err)
        t.pass()
        t.end()
      }
      
      if (result.code === -1) {
        t.pass()
        t.end()
      }
    })
  })
});

test.cb('#User.login(username, password) fail with password is incorrect', t => {
  let _user = new User({
    username: 'i5ting 2',
    password: '0123456789'
  });
  _user.save((err, u) => {
    // console.log(err)
    User.login('i5ting 2', '0123456', function (err, result) {
      if (err) {
        console.log(err)
        t.fail()
        t.end()
      }
      if (result) {
        t.is(result.username, _user.username)
        t.end()
      }
    })
  })
});

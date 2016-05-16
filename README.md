# mongoose-base-user-plugin

a base user plugin for mongoose


## Install

```
npm i -S mongoose-base-user-plugin
```
## Usages

create a model like user.js

```
var mongoose = require('mongoose');
var base_user = require('.')

var MyUserSchema = new mongoose.Schema({ 
  invite_code   : String, // 邀请码
  phone_number  : Number, // 电话号码
  address       : String, // 地址
  unionid       : String,
  nickname      : String,// from weixin 昵称
  sex           : String,// from weixin 性别 0->女 1->男
  language      : String,// from weixin 语言
  city          : String,// from weixin 城市
  province      : String,// from weixin 
  country       : String,// from weixin
  headimgurl    : String,// from weixin 头像路径
  privilege     : [],    // from weixin
  created_at    : {
    type: Date,
    "default": Date.now
  }

});

MyUserSchema.plugin(base_user);

// 定义Model
var UserModel = mongoose.model('MyUser', MyUserSchema);

// 暴露接口
module.exports = UserModel;
```

## Api

```
User.login('i5ting 2', '0123456', function (err, result) {
  
})
```

- if result.code < 0 is error
  - -1 = 'username is not exist!'
  - -2 = 'password is incorrect, please check it again!'
  

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
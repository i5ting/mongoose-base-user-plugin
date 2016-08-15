# mongoose-base-user-plugin

a base user plugin for mongoose


[![gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

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
  

## for ci

it depend on g++, so in `.travis.yml`

```
addons:
  apt:
    sources:
    - ubuntu-toolchain-r-test
    packages:
    - g++-4.8
env:
  - CXX=g++-4.8
```


Note: OS X users using Xcode 4.3.1 or above may need to run the following command in their terminal prior to installing if errors occur regarding xcodebuild: sudo xcode-select -switch /Applications/Xcode.app/Contents/Developer

if you deploy on ubuntu, make sure that g++ is available.

## Q & A

提示，当发现bcrypt无法安装的时候

```
> bcrypt@0.8.7 install ~/workspace/github/mongoose-base-user-plugin/node_modules/bcrypt
> node-gyp rebuild

gyp: ~/.node-gyp/4.4.5/common.gypi not found (cwd: ~/workspace/github/mongoose-base-user-plugin/node_modules/bcrypt) while reading includes of binding.gyp while trying to load binding.gyp
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (~/.nvm/versions/node/v4.4.5/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:343:16)
gyp ERR! stack     at emitTwo (events.js:87:13)
gyp ERR! stack     at ChildProcess.emit (events.js:172:7)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:200:12)
gyp ERR! System Darwin 14.5.0
gyp ERR! command "~/.nvm/versions/node/v4.4.5/bin/node" "~/.nvm/versions/node/v4.4.5/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
gyp ERR! cwd ~/workspace/github/mongoose-base-user-plugin/node_modules/bcrypt
gyp ERR! node -v v4.4.5
gyp ERR! node-gyp -v v1.0.3
gyp ERR! not ok 
npm ERR! Darwin 14.5.0
npm ERR! argv "~/.nvm/versions/node/v4.4.5/bin/node" "~/.nvm/versions/node/v4.4.5/bin/npm" "i"
npm ERR! node v4.4.5
npm ERR! npm  v2.10.1
npm ERR! code ELIFECYCLE

npm ERR! bcrypt@0.8.7 install: `node-gyp rebuild`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the bcrypt@0.8.7 install script 'node-gyp rebuild'.
npm ERR! This is most likely a problem with the bcrypt package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     node-gyp rebuild
npm ERR! You can get their info via:
npm ERR!     npm owner ls bcrypt
npm ERR! There is likely additional logging output above.
```

解决方案

```
rm -rf ~/.node_gyp
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史


- v1.0.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` i5ting@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).



[npm-image]: https://img.shields.io/npm/v/mongoose-base-user-plugin.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/mongoose-base-user-plugin
[travis-image]: https://img.shields.io/travis/i5ting/mongoose-base-user-plugin/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/i5ting/mongoose-base-user-plugin
[coveralls-image]: https://img.shields.io/codecov/c/github/i5ting/mongoose-base-user-plugin.svg?style=flat-square
[coveralls-url]: https://codecov.io/github/i5ting/mongoose-base-user-plugin?branch=master
[gitter-image]: https://img.shields.io/gitter/room/i5ting/mongoose-base-user-plugin.svg?style=flat-square
[gitter-url]: https://gitter.im/i5ting/mongoose-base-user-plugin?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
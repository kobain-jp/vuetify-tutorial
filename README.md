# vuetify-tutorial

マテリアルデザインを実現するvuetify利用したログインページの作成

以下のサイトをvuetifyのcdn版で実装＋α

https://reffect.co.jp/vue/vuetify-first-time

### 前提知識

そもそもvuetifyとは？

https://vuetifyjs.com/ja/


マテリアルデザインまでの歴史

https://qiita.com/nogson/items/804dd3a879f482fb7018


### 今回実装するログイン画面

今回のゴール

https://kobain-jp.github.io/vuetify-tutorial/login.html

参考までにbootstrapを利用したログイン画面

https://getbootstrap.jp/docs/4.3/examples/sign-in/

### ファイルの作成

```
vuetify-turorial
- login.html　
- app.js

```

### 必要なライブラリの読み込み

https://vuetifyjs.com/ja/getting-started/installation/

cdn版で読み込み


login.htmlを編集
```
<!DOCTYPE html>
<html>

<head>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
</head>

<body>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
    <script src="app.js"></script>
</body>

</html>

```


app.js
```
new Vue({
    el: '#app',
    vuetify: new Vuetify()
})

```


### ログイン画面を作る

以下の内容をapp.vueではなく、login.htmlに追記していく

https://reffect.co.jp/vue/vuetify-first-time

途中閉じタグがなく、動かないのでそこは修正

```
<v-app>
  <v-card>
    <v-card-title>
      <h1 class="display-1">ログイン</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
M       <v-text-field label="ユーザ名"></v-text-field>
M       <v-text-field label="パスワード></v-text-field>
      </v-form>
    </v-card-text>
  </v-card>
</v-app>
```

### いろいろいじってみよう

https://vuetifyjs.com/ja/api/vuetify/#section-30b330f330dd30fc30cd30f330c830da30fc30b8


### vueの制御ロジックを追加

```
new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data:{
        uid:'',
        pwd:''
    },
    methods: {
        login:function(){
            alert(this.uid);
            alert(this.pwd);
        }
    }
})


```







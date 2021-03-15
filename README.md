# vuetify-tutorial

マテリアルデザインを実現するvuetify利用したログインページの作成

以下のサイトをvuetifyのcdn版で実装＋α

https://reffect.co.jp/vue/vuetify-first-time

### 前提知識

マテリアルデザインって何？

https://material.io/design/introduction#theming

マテリアルデザインまでの歴史

https://qiita.com/nogson/items/804dd3a879f482fb7018

マテリアルデザインの実装例

https://sugar.amebaownd.com/posts/357364/

vuetifyって何？

https://vuetifyjs.com/ja/


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

だいたいメインページからインストールに進み、cdn版で試す。今回もそのやり方。

https://vuetifyjs.com/ja/

https://vuetifyjs.com/ja/getting-started/installation/

cdn版のコードをlogin.htmlにコピペして起動確認

レイアウト
https://vuetifyjs.com/ja/features/layouts/#section-4f7f304465b9

app.jsに切り出し


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
〜略〜
<body>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
M    <script src="app.js"></script>
</body>

</html>

```


app.js　に切り出し
```
new Vue({
    el: '#app',
    vuetify: new Vuetify()
})

```


### ログイン画面を作る

以下の内容をapp.vueではなく、login.htmlのv-container内に追記していく

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







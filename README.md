# vuetify-tutorial

マテリアルデザインを実現するvuetify利用したログインページの作成

そもそもvuetifyとは？
https://vuetifyjs.com/ja/

マテリアルデザインまでの歴史
https://qiita.com/nogson/items/804dd3a879f482fb7018


# 今回実装するログイン画面

今回のゴール

https://kobain-jp.github.io/vuetify-tutorial/login.html

参考までにbootstrapを利用したログイン画面

https://getbootstrap.jp/docs/4.3/examples/sign-in/

# ファイルの作成

```
vuetify-turorial
- login.html
- app.js

```

# 必要なライブラリの読み込み

https://vuetifyjs.com/ja/getting-started/installation/

cdn版で読み込み


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

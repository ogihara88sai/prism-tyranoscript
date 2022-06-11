# prism-tyranoscript.js

[HTML版のドキュメントはこちら](https://ogihara88sai.github.io/prism-tyranoscript/)

『prism-tyranoscript.js』は、JSライブラリ『Prism.js』と組み合わせてティラノスクリプトのコードをシンタックスハイライトするための拡張ファイルです。ブログなどにティラノスクリプトのコードを貼りたいときにご活用いただけます。

## ダウンロード

Prism.jsの本体（prism.jsとprism.css）は[こちら](https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript&plugins=line-highlight+line-numbers+show-language+toolbar+copy-to-clipboard)からダウンロードしてください。prism.jsにはJavaScriptとHTMLが含まれている必要があります。

Prism.jsの拡張ファイルであるprism-tyranoscript.jsは[こちら](https://github.com/ogihara88sai/prism-tyranoscript/releases)からダウンロードしてください。なお、圧縮版であるprism-tyranoscript.min.jsも同梱されています。prism-tyranoscript.jsの代わりにこちらを使用することもできます。

## 使い方

prism.js、prism.css、prism-tyranoscript.jsを読み込みます。prism-tyranoscript.jsはprism.jsよりも後に読み込む必要があります。

```html
<link href="prism.css" rel="stylesheet">
<script src="prism.js"></script>
<script src="prism-tyranoscript.js"></script>
```

ハイライトしたいスクリプトを`<pre><code>`の中に埋め込み、`<pre>`に`language-tyranoscript`クラスを付けます。これだけです。

```html
<pre class="language-tyranoscript"><code>;サンプル
*Sample
ティラノスクリプトのシンタックスハイライトだよ[p]
[bg storage="room.jpg" time="1000"]</code></pre>
```

Prism.jsの詳しい使い方を知りたい方は、ネットでPrism.jsの解説記事を検索してみてください。

[**Prism.jsの使い方！シンタックスハイライトにおすすめ | でざなり**](https://dezanari.com/prismjs/)  
[https://dezanari.com/prismjs/](https://dezanari.com/prismjs/)

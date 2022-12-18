import { IBlogCardList } from '..'

export const defaultProps: IBlogCardList = {
  contents: [
    {
      id: '3tcpe0tts',
      createdAt: '2022-12-18T07:54:41.636Z',
      updatedAt: '2022-12-18T07:55:15.331Z',
      publishedAt: '2022-12-18T07:54:41.636Z',
      revisedAt: '2022-12-18T07:55:15.331Z',
      title: '【EC2】EC2にWordPressブログを構築してみた',
      description:
        'こちらの記事は当ブログ(高卒Devlog)の構築で実際に行った作業手順となります！\nAWS上にブログを構築してみたいという方は是非最後までご覧ください！',
      body: '<p>こんにちは！RYOTAです！<br>当記事をご覧くださりありがとうございます！<br>こちらの記事は当ブログ(高卒Devlog)の構築で実際に行った作業手順となります！<br>AWS上にブログを構築してみたいという方は是非最後までご覧ください！</p><h2 id="h8d027c8ed3">はじめに</h2><p>これまでは<a href="https://www.xserver.ne.jp/" target="_blank" rel="noopener noreferrer">Xserver</a>や<a href="https://www.sakura.ad.jp/" target="_blank" rel="noopener noreferrer">さくらのレンタルサーバー</a>でブログを構築していましたが、せっかくなので新しくAWS上に構築してみたので作業ログを残そうと思います。<br>Nginxは設定が面倒なので今回のサーバーは<a href="https://httpd.apache.org/" target="_blank" rel="noopener noreferrer">Apache</a>を使用します。<br>公式</p><ul><li>EC2(AWS):&nbsp;<a href="https://aws.amazon.com/jp/ec2" target="_blank" rel="noopener noreferrer">https://aws.ama</a><a href="unsafe:[object Object]" target="_blank" rel="noopener noreferrer">zon.com/jp/ec2</a></li><li> WordPress:&nbsp;<a href="https://ja.wordpress.org/" target="_blank" rel="noopener noreferrer">https://ja.wordpress.org</a></li><li> Apache:&nbsp;<a href="https://httpd.apache.org/" target="_blank" rel="noopener noreferrer">https://httpd.apache.org</a></li></ul><h2 id="h8676c207ae">作業手順</h2><p>今回はAWSのEC2インスタンスを立ち上げ、その上にWebサーバーのApacheをインストールするところまでをゴールとします。<br>大まかな流れはAWS側の設定をし作成されたインスタンスに各種必要なライブラリ等をインストールしていきます。<br>作業手順</p><ol><li>EC2インスタンスの作成</li><li> MariaDBのインストール</li><li> PHPのインストール</li><li> Apacheのインストール</li></ol><h2 id="h3a17766b60">AWS: EC2インスタンスの立ち上げ</h2><h3 id="h3596390140">インスタンスの作成</h3><p>AMIを選択<br>Amazon Linux 2 AMI (HVM), SSD Volume Type<br>インスタンスタイプを選択<br>t2.micro<br>自動割り当てパブリックIP: [有効] に変更<br>残りはデフォルトで次に進みインスタンスを作成します。<br>キーペアを作成のフローがあるので作成しダウンロードをします。<br>※pemファイルは重要なファイルとなるので大切に保管しましょう。</p><h3 id="h9c15a9d803">セキュリティグループを変更</h3><p>先ほど作成したインスタンスに紐づいているセキュリティグループを選択し、下記のルールを追加します。<br>HTTP 80 カスタム 0.0.0.0/0, ::/</p><h3 id="hadd448e40b">SSH接続</h3><p>インスタンスが作成されたら実際にEC2にアクセスしてみます。<br>作成時にダウンロードしたpemファイルを用いてssh接続をするため、そちらの設定をおこないます。</p><h4 id="h9bc436c4b5"><strong>.pemファイルを~/.sshに移動</strong></h4><pre><code>$ mv ~/Downloads/{file_name}.pem ~/.ssh</code></pre><h4 id="h3b8e709077">.pemファイルにアクセス権限を付与</h4><pre><code>$ cd ~/.ssh\n$ chmod 0600 {file_name}.pem</code></pre><h4 id="hadd448e40b">SSH接続</h4><pre><code>$  ssh -i ~/.ssh/{file_name}.pem ec2-user@{instanse_name}</code></pre><p>下記が表示されればアクセスが完了です。<br></p><h2 id="h1ffd5e568c">各種ライブラリのインストール</h2><p>EC2インスタンスの構築が完了したらWordPressを動かすために必要な各種ライブラリをインストールします。<br>インストールするライブラリは下記の一覧です。<br>インストール一覧</p><ul><li>MariaDB:&nbsp;<a href="https://mariadb.org/" target="_blank" rel="noopener noreferrer">https://mariadb.org</a></li><li> PHP:&nbsp;<a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">https://www.php.net</a></li><li> Apache:&nbsp;<a href="https://httpd.apache.org/" target="_blank" rel="noopener noreferrer">https://httpd.apache.org</a></li></ul><h3 id="h28e9a4677c">MariaDBのインストール</h3><h4 id="hd8d793506b">インストール</h4><pre><code>$ sudo yum install -y mariadb-server</code></pre><h4 id="h21f9932041">DBの起動</h4><pre><code>$ sudo systemctl start mariadb</code></pre><h4 id="h55e4fa19f5">自動起動の有効化</h4><pre><code>$ sudo systemctl enable mariadb     　# 有効化\n$ sudo systemctl is-enabled mariadb  # 設定の確認</code></pre><h4 id="h7cbb7db030">セキュリティ設定</h4><pre><code>$ sudo mysql_secure_installat</code></pre><h4 id="h04e57a068e">DBにアクセス</h4><pre><code>$ mysql -u root -p</code></pre><h4 id="hc585f59d3c">Userの作成</h4><pre><code>$ CREATE USER "{user_name}"@\'localhost\' IDENTIFIED BY "{db_password}";</code></pre><h4 id="h53659d4b20">データベースの作成</h4><pre><code>$ CREATE DATABASE "{db_name}";</code></pre><h4 id="h4b41d6763a">権限を付与</h4><pre><code>$ GRANT ALL PRIVILEGES ON "{db_name}".* TO "{user_name}"@"localhost";</code></pre><h4 id="h97eb5aa1e2">権限設定のフラッシュ</h4><pre><code>$ FLUSH PRIVILEGES;</code></pre><h4 id="h13208afe12">DBから抜ける</h4><pre><code>$ exit</code></pre><p>ここまででデータベースの作成と事前準備が完了です。</p><h3 id="had4a9b1217">PHPのインストール</h3><p>次はWordPressを動かすためのPHP環境を構築します。<br>今回PHPのバージョンは7.4系を使用します。</p><h4 id="h65842a6cc2">ソフトウェアアップデート</h4><pre><code>$ sudo yum update -y</code></pre><h4 id="h31fc5cbc4a">事前準備</h4><pre><code>$sudo amazon-linux-extras install epel #Amazon Linux でepel-releaseパッケージをインストール出来るようにする\n$sudo yum install epel-release #epel-releaseパッケージをインストール\n$sudo rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm #remiリポジトリを使えるようにする</code></pre><h4 id="h3c636d9c82">PHPと関連ライブラリのインストール</h4><pre><code>$ sudo yum install -y php74 php74-php php74-php-fpm\n$ sudo yum install php74-php-gd php74-php-mysqlnd php74-php-xmlrpc -y\n$ sudo ln -s /usr/bin/php74 /usr/bin/php</code></pre><h4 id="h51e88d7462">インストールの確認</h4><p>下記コマンドでPHPのバージョンが返って来れば完了です。</p><pre><code>$ php -v</code></pre><h3 id="hc0d75422e7">Apacheのインストール</h3><p>続いてWebサーバーのApacheをインストールします。<br>※Nginxに比べ設定が簡単なので今回はこちらを用います。</p><h4 id="hd8d793506b">インストール</h4><pre><code>$ sudo yum install httpd</code></pre><h4 id="h1d40932a6f">起動</h4><pre><code>$ sudo systemctl start httpd.service</code></pre><h4 id="h55e4fa19f5">自動起動の有効化</h4><pre><code>$ sudo chkconfig httpd on                         # 有効化\n$ sudo systemctl is-enabled httpd.service   # 設定確認</code></pre><h4 id="h1a4d4f8594">ブラウザでアクセス</h4><p>http://{EC2のパブリックIPアドレス}<br><br>ブラウザで上記の画面が表示されればApacheからのアクセスが返ってきている証拠です。<br>ここまででサーバーの構築が完了したので次回はWordPressをインストールしApache上で動かしていきたいと思います。</p>',
      image: {
        url: 'https://images.microcms-assets.io/assets/968175a6ae1f429a923f393a5fa133a4/278dad6573624eb59d71284f4ad4a29d/ec2.webp',
        height: 1080,
        width: 1920,
      },
      categories: [
        {
          id: 'ec2',
          createdAt: '2022-12-18T07:55:03.812Z',
          updatedAt: '2022-12-18T07:55:27.650Z',
          publishedAt: '2022-12-18T07:55:03.812Z',
          revisedAt: '2022-12-18T07:55:03.812Z',
          name: 'EC2 (AWS)',
          posts: [
            {
              id: '3tcpe0tts',
            },
          ],
        },
      ],
    },
    {
      id: 'go-echo',
      createdAt: '2022-12-18T06:38:48.487Z',
      updatedAt: '2022-12-18T06:39:59.376Z',
      publishedAt: '2022-12-18T06:38:48.487Z',
      revisedAt: '2022-12-18T06:39:59.376Z',
      title: 'Golangフレームワーク【Echo】を使ってみた',
      description:
        'Go言語のフレームワーク【Echo】に触れてみたので使い方や設定方法をまとめていこうと思います！',
      body: '<h2 id="h0a55354ba7">Goのフレームワーク【Echo】とは</h2><p>EchoとはGo言語の数あるフレームワークの中でも軽量なフレームワークになります。<br>高機能かつ拡張性も高くとても人気の高いフレームワークとなります。<br>公式</p><ul><li>Echo：(<a href="https://echo.labstack.com/" target="_blank" rel="noopener noreferrer">https://echo.labstack.com/</a>)</li></ul><h2 id="hfc82e55b48">その他のGoフレームワーク</h2><ul><li>Gin：(<a href="https://github.com/gin-gonic/gin" target="_blank" rel="noopener noreferrer">https://github.com/gin-gonic/gin</a>)</li><li> Beego：(<a href="https://beego.me/" target="_blank" rel="noopener noreferrer">https://beego.me/</a>)</li><li> Revel：(<a href="https://revel.github.io/" target="_blank" rel="noopener noreferrer">https://revel.github.io/</a>)</li><li> iris：(<a href="https://www.iris-go.com/" target="_blank" rel="noopener noreferrer">https://www.iris-go.com/</a>)</li></ul><h2 id="h916a3faa2f">実際にサーバーを構築</h2><p>今回はサクっとお試しするためにDocker環境を構築してその上でEchoを動かしてみます。<br>下記が目標の構成です。</p><pre><code>┣─　back\n┃　　└─　server.go\n┣─　Dockerfile\n┣─　go.mod\n┣─　go.sum\n└─　docker-compose.yml</code></pre><h3 id="h10669f1409">Dockerの設定</h3><p>まずはdocker-compose.ymlとDockerfileを用意しGoが動かせる環境を作ります。</p><pre><code>version: \'3\'\nservices:\n  server:\n    build: ./back\n    tty: true\n    volumes:\n      - ./back:/go/src/work\nFROM golang\n\nRUN mkdir /go/src/work\n\nWORKDIR /go/src/work\n\nADD . /go/src/work</code></pre><p>Dockerfileが用意できたらDockerを起動します。</p><pre><code>$ docker-compose build\n$ docker-compose up -d</code></pre><p>Dockerの起動が確認できたらGoが動くか確認します。<br>テスト用のファイルを作成します。(後で削除します。)</p><pre><code>package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Printf("テスト実行\\n")\n}</code></pre><p>コンテナにアクセス</p><pre><code>$ docker-compose exec server bash</code></pre><p>作成したtest.goを実行し、結果が返って来ればOK！</p><pre><code>$ go run test.go\n# -&gt; テスト実行</code></pre><h3 id="hbeab4a615a">Echoをインストール</h3><p>下記のコマンドを実行しgo.modを作成します。</p><pre><code>$ go mod init echo-test</code></pre><p>goの初期化が完了したらいよいよEchoをインストールしてみます。</p><pre><code>$ go get github.com/labstack/echo/v4</code></pre><p>上記コマンドで正常にインストールが完了するとgo.sumが作成され必要なパッケージが入ってることが確認できます。</p><h3 id="hfa9215e9a4">EchoでHTTPサーバーを作成</h3><p>簡単なレスポンスを返すメインファイルを作成します。</p><pre><code>package main\n\nimport (\n\t"net/http"\n\n\t"github.com/labstack/echo/v4"\n)\n\nfunc main() {\n\te := echo.New()\n\te.GET("/", func(c echo.Context) error {\n\t\treturn c.String(http.StatusOK, "Hello World!")\n\t})\n\te.Logger.Fatal(e.Start(":3000"))\n}</code></pre><p>最後にdocker側のポートを割り当てて、起動時にサーバーも起動するように変更します。</p><pre><code>version: \'3\'\nservices:\n  server:\n    build: ./back\n    tty: true\n    volumes:\n      - ./back:/go/src/work \n    ports:                      # 追加\n      - 3000:3000               # 追加\n    command: go run server.go   # 追加</code></pre><p>一度コンテナから抜けて、Dockerを再起動</p><pre><code>$ exit\n$ docker-compose up</code></pre><p><br>localhost:3000でアクセスしてレスポンスが返って来れば成功！</p><h2 id="h3bcda3e6b0">最後に</h2><p>今回はGo言語のフレームワークEchoをインストールし、簡単なHTTPサーバーを作成しました。<br>超最小限の動作チェックになるので、次回はDBにアクセスしながらCLUDが行える状態を目指そうと思います！<br>最後までご覧いただきありがとうございます！</p>',
      image: {
        url: 'https://images.microcms-assets.io/assets/968175a6ae1f429a923f393a5fa133a4/ed6c8420be324f33bff911a243d4de31/golang.webp',
        height: 1080,
        width: 1920,
      },
      categories: [
        {
          id: 'golang',
          createdAt: '2022-12-18T06:39:05.212Z',
          updatedAt: '2022-12-18T06:39:29.309Z',
          publishedAt: '2022-12-18T06:39:05.212Z',
          revisedAt: '2022-12-18T06:39:05.212Z',
          name: 'Golang',
          posts: [
            {
              id: 'go-echo',
            },
          ],
        },
      ],
    },
  ],
}

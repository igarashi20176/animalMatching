# アニマルマッチング アプリ
This is My first vue.js creation /  2022/09/25 ~ 2022/10/18 

## ◆作品の概要
このアプリは, 譲渡に出されているペットたち(犬・猫)を閲覧できる機能とともに, 飼い主の性格とマッチした動物を提案するマッチング機能を実装しました。

## ◆制作動機
犬猫の殺処分が問題となり, ペットショップからではなく, 飼い主から別の飼い主への譲渡という形でペットを飼う形態が変化してきた。そこで, 飼い主が理想のペットを探しやすくなるとともに, ペットとの性格マッチングによって, ペットも意志をもった存在であるということを意識させることができるwebアプリを作ろうと考えた
  
フロントエンドのモダンな技術に触れ, コンポーネント指向について制作を行いながら理解しようと考えた

## ◆意識したこと
1.コンポーネント指向を理解し, 保守性, 再利用性の高いコンポーネントを作成するよう心掛けた  
2.コンポーネントUIを使わず, 自分でデザインを1から考えるよう心掛けた

## ◆制作後の反省点
1.後述するViews群のコンポーネントに, それぞれAPI通信機能を追加してしまったため,　オーバーヘッドが嵩んでしまった    
 →VuexでFirebaseとの通信を行い, ペットのデータなどもVuexで一元管理すべきだった
  
2.Firebaseからデータを取得するにあたって, 画像の取得が画面の描写に間に合わず, 遅れて描写されてしまう  
 → 非同期処理に関する知識やデータの取得⇒反映のプロセスをより意識する必要があった 
 
3.予想していたより実装に時間が掛かってしまったため, 処理の成功の可否をユーザに伝える仕組みを作れなかった

## ◆機能一覧
診断 - 利用者の性格診断を行い, 性格の合うペットとマッチングします  
一覧 - 登録されているペットたちを一覧表示します。フィルタリング機能も追加しています  
追加 - 登録したいペットの登録情報を入力し, firestoreに保存します。自分の投稿したデータの変更・削除も可能です。  
認証 - firebase Authenticationを用い実装しました

## ◆Componentの概要
以下のサイトを参考に, 機能的なアプリを作るよう心掛けました  

【Vue】単一ファイルコンポーネントの命名規則まとめ【ファイル名から記法まで】  
https://qiita.com/ngron/items/ab2a17ae483c95a2f15e  
【React/Vue.js】コンポーネント設計の（個人的）ベストプラクティス  
https://zenn.dev/offers/articles/20220523-component-design-best-practice 

### ●vuex
Firestoreから入手したユーザ情報を保存し, 以降vuexからユーザ情報を参照します

### ●vue-router
Routing機能を実装しました。
ログインが必要なページへの遷移には, 認証が必要になるように設定しています

### ●Pages群
ページの表示を目的としたコンポーネントです

#### ・App.vue
アプリの基本となる画面の構成を担います。一連の画面遷移による画面描写はこのApp.vue上で行われます

### ●Views群
後述するTemplates群のコンポーネントに対し, データを渡します。またデータは, API通信によりFirebase Cloud Firestoreから取得しています

#### ・AnimalList.vue
動物たちのリストを表示するためのContainer(入れ物)としての役割です。  
後述するAnimalListItem.vueとは, Container ⇔ View(親コンポーネントからのpropsのみで機能するコンポーネント)の関係です。  
データのフィルター機能やデータの削除機能を持ちます

#### ・AnimalListAdd.vue
ログイン後に使用できる機能です。  
登録したいペットの個体情報を入力します。編集機能もあります

#### ・AnimalMathing.vue
ログイン後に使用できる機能です。  
後述するMathingListItem.vueとは, Container ⇔ Viewとの関係です。診断に関する問題 & 診断結果を表示します。  
診断結果であるユーザの性格をFirestoreに保存します

#### ・SignIn.vue
サインイン機能です。  
サインした後はvuexに, ログインしているユーザ情報を登録します

#### ・Register.vue
新規登録機能です

### ●Templates群
コンポーネントを組み合わせることを目的としたコンポーネントであり, ロジックを持ちます

#### ・AnimalListItem.vue
親コンポーネントであるAnimalList.vueから動物たちのリストを受け取り, それらを表示します

#### ・AnimalListDetail.vue
AnimalListItem.vueのリストがクリックされた際に, そのリストの詳細を表示します

#### ・MatchingListItem.vue
性格診断の各問題を表示します。

#### ・TheHeader.vue
アカウントの新規登録, サインインの機能を併せたHeaderです

#### ・TheFilterRadioBtn.vue
データのフィルタリング機能を担います

### ●Parts群
最小粒度のコンポーネントで, UIとしての機能を持ち, ロジックを有しません   
・TheNormalBtn.vue - 標準のボタン  
・TheFavBtn - お気に入りのON/OFFを切り替えます  
・TheFooter.vue - フッター  
・TheRoutingBtnCol3 - 3つのルーティングボタン   
・TheToggleBtn - ON/OFFでtrue/falseを切り替えるスライド式のボタン

## ◆Firebaseの概要

### ●Firestore
・animalsコレクション - 動物たちの情報が登録します  
・usersコレクション - ユーザの情報を登録します

### ●storage
・images/ - 動物の画像が保存されます  
・app-images/ - アプリで必要な画像が保存されています



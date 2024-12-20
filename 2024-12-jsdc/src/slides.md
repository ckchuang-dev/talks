---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: 一起探索 VoidZero 為 JS 生態系準備的瑞士刀
mdc: true
layout: cover
growSeed: vue
growOpacity: 0.6
---

# 一起探索 VoidZero 為 JS 生態系準備的瑞士刀

<div v-click op80 font-smiley>

## 🛠️ Vite、Vitest、Rolldown、Oxc

<p op80 mt4="!">Next Generation Toolchain for JavaScript</p>

</div>

<div abs-br mr-10 mb-10 flex scale-120 opacity-80>
  <div flex flex-col items-center justify-center gap1>
    <img src="/jsdc-logo.png" w20 />
    <div text-sm>2024-12-21</div>
  </div>
</div>

<!--
Hi 大家好，很高興今天有機會來 JSDC 分享，然後這也是我第一次當講者，希望大家會喜歡。
今天要分享的主題是《一起探索 VoidZero 為 JS 生態系準備的瑞士刀》。

[click] 這把瑞士刀裡會包含 Vite、Vitest、Rolldown、Oxc 這些工具，
接下來會帶大家快速了解一下，並做一些 Demo
-->

---
layout: intro
growSeed: 15
growOpacity: 0.3
class: p-20
---

# CK Chuang <sup opacity-80 font-hand text-4xl>codefarmer</sup>

<div class="[&>*]:important-leading-10 opacity-90">

- Front-End Engineer
- 喜歡透過文字消化並輸出的方式來學習新東西
- 近期開始經營 **codefarmer.tw** 這個部落格來分享學習筆記

</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center op85>
  <div i-ri-global-line op80 ma text-xl />
  <div><a href="https://www.codefarmer.tw/" target="_blank" border-none="!">codefarmer.tw</a></div>

  <div i-ri-instagram-line op80 ma text-xl ml4 text="#E1306C" />
  <div><a href="https://www.instagram.com/codefarmer.tw" border-none="!" target="_blank">codefarmer.tw</a></div>

  <div i-ri-github-fill op80 ma text-xl ml4 />
  <div w-40><a href="https://github.com/ckchuang-dev" target="_blank" border-none="!">ckchuang-dev</a></div>
</div>

<img src="/avatar.png" rounded-full w-40 abs-tr mt-32 mr-30 />

<!--
在開始前簡單做一下自我介绍！我是 CK，之前在幾間公司擔任過前端工程師。
這一年開始經營 codefarmer 這個部落格，
今天的投影片過幾天整理下也會放到我的部落格上，
如果大家對今天的主題有興趣或問題，
都可以從部落格上找到各種聯絡資訊找我討論。
-->

---
layout: statement
growSeed: 25
growOpacity: 0.3
---

<div transition transition-500 :class="$clicks > 0 && 'translate-y--50 scale-60 op80'">
  <div transition transition-500 ease-in-out font-fast text-6 mb2 :class="$clicks > 0 ? 'op70' : 'op0'">建構工具 vs. 打包工具</div>
  <h1>Build Tool vs. Bundler</h1>
</div>

<div v-click transition transition-500 mt--10>
  <img src="/build-tool-intro.png" w="4/5" absolute left-27 top-30 rounded-3xl />
</div>

<div v-click transition transition-500 mt--10>
  <img src="/build-tool.png" w="4/5" absolute left-25 top-52 rounded-3xl />
  <div abs-br m-5 op60 text-xs font-semibold>圖片來源： https://rsbuild.dev/guide/start/index</div>
</div>

<!--
在最開始先快速帶過一些後面講解會需要知道的基本介紹。
首先是 Build Tool 和 Bundler 的差別。
中文也有人翻作「建構工具」或「打包工具」。
大家可以暫停兩三秒，想一下這兩者的差別是什麼？

[click] 簡單說的話，當你今天想做一個網站，從在 local 開發到最後部署到雲端伺服器，
這個開發過程中在處理網頁畫面的部分，背後會去用上這兩種工具。
建構工具的部分可以理解為你在開發時下了 `npm run dev` 這樣的指令後，
在 localhost 啟了一個 dev server 來協助你邊寫程式邊確認畫面。
因為大家可能會用一些像是 typescript、css 預處理器這些語法來開發，
而打包工具顧名思義它是在一切開發就緒後要部署時，
協助將這些程式依照設定檔去分析、轉譯最後打包出瀏覽器能看懂的 HTML、CSS、JS 檔案。

[click] 從這張圖上可以看到這兩者對應的工具，像是以前比較常見的 Webpack 是打包工具，
而對應的以前的 Create React App 或 Vue CLI 就是建構工具。
而今天要介紹的 Vite，本體其實是建構工具，背後打包的工作目前是使用 Rollup。
另外還有在今年剛正式釋出第一版的 Rspack，這套是由 ByteDance 的架構團隊所開發。
-->

---
layout: statement
growSeed: 20
growOpacity: 0.3
---

<div transition transition-500 :class="$clicks > 0 && 'translate-y--55 scale-60 op80'">
  <div transition transition-500 ease-in-out font-fast text-6 mb2 :class="$clicks > 0 ? 'op70' : 'op0'">What is VoidZero?</div>
  <h1>VoidZero 是什麼</h1>
</div>

<div transition transition-600 text-xl font-semibold mt--10>
  <img v-click src="/void-zero-intro.png" w="3/4" absolute left-30 top-30 rounded-3xl />
  <!-- <img v-click src="/roadmap.png" w="3/4" absolute left-30 top-28 rounded-3xl /> -->
</div>

<!-- TODO: 備用：[click] 這張圖中是整個 VoidZero 的 roadmap。
如果在網頁開發時會用到的各種框架與工具代表的最上層，
那 VoidZero 這個開源生態系會提供一整套工具鏈，
包含 Vite 作為建構工具，
Vitest 作為單元測試工具，
Rolldown 作為打包工具，
而 Oxc 負責更底層像是 linter、formatter、解析、轉譯語法這些工作。 -->

<!--
再來講講 VoidZero 是什麼？

[click] 這是一間由 Vue 及 Vite 作者尤雨溪在今年 ViteConf 時宣布成立的新公司，
推薦大家對這個生態系有興趣可以再去看原本的議程，我會附在最後面參考資料中。
這邊會快速帶過一些重點，避免變成英翻中版本的議程。
先說說這個生態系包含了哪些工具。
-->

---
class: ml20
growSeed: right
growOpacity: 0.6
---

<h1>VoidZero 工具鏈介紹 <sup text-5 op60 font-fast>toolchain intro.</sup></h1>

<img v-click="1" src="/tools.png" absolute right-8 top-33 rounded-xl w-120 />

<v-clicks mt-20 text-2xl>

- {Vite}
- {Vitest}
- {Rolldown} (開發中)
- {Oxc} (開發中)

</v-clicks>

<!--
接下來我們來看一下 VoidZero 生態系下各個工具鏈的細節。

[click] 首先看到這張圖的話，今天當我們用 React, Vue, Nuxt, Remix 等這些上層前端框架或 meta framework 時，
現在都能夠以 Vite 作為 local 開發時的建構工具，也就是 dev server，
它能夠提供快速的冷啟動、HMR (Hot Module Replacement) 這些特色來提升開發體驗。

[click] 另外可以搭配能兼容 jest 的單元測試工具，Vitest，
查了些資訊發現以前在 Vite 專案中要能使用 jest 時會遇到一些轉換與設定問題，
因此後來 vue 核心團隊做了一個叫做 vite-jest 的工具。
但為了能在設定時更方便能原生支援 ES module 與 TypeScript，
且能與 Vite 更緊密整合，
因此後來 Vite 核心團隊 (Antfu, Patak) 開發這套 Vitest。

[click] 再來是 Rolldown 的部分，就是希望能利用 Rust 打造一個打包工具，
來解決目前底層在 dev/production 用兩套 esbuild 與 Rollup 來打包的問題。
就像另一套以 Rust 為基底打造的 Rspack 能兼容 Webpack 的方式一樣，
或許未來能夠兼容所有的 bundler，如果在生態系接受度夠高的狀況下。
而從國外社群的討論來看，有一說 Next.js 未來仍會持續以自產的 Turbopack 為方向，
個人認為打包工具的統一可能還有很長一段路要走？

[click] 最後是 Oxc。
-->

---
class: ml20
growSeed: rust
growOpacity: 0.9
---

<h1>Oxc 介紹 <sup text-5 op60 font-fast>Intro.</sup></h1>

<v-clicks mt-10 text-2xl>

- Oxc (Oxidation Compiler)
- 包含以下工具
  - **Parser**：3x than `SWC`、5x than `Biome`
  - **Linter**：50-100x than `ESLint`
  - **Resolver**：28x than `webpack/enhanced-resolve`
  - 🚧 **Transformer**：對比 `SWC`、`Babel`、`tsc` 等工具
  - 🚧 **Minifier**：對比 `Terser` 等工具
  - 🚧 **Formatter**：對比 `Prettier` 等工具
- Inspired by `Biome` and `Ruff`

</v-clicks>

<!-- <img v-click src="/oxc-progress.png" absolute right-8 top-33 rounded-xl w-60 /> -->

<!--
這個工具大家可能相對更陌生，另外拉出來特別講一下。

[click] Oxc 是 Oxidation Compiler 的縮寫，
這算是比較底層的編譯與解析語法的工具，
Oxidation 這個字是氧化的意思，而 Rust 是生鏽的意思，
雖然沒有查到相關資料，但猜測是想表示把一些工具改成 Rust 的版本所以取這個名字。

[click] 像是比較常見的 linter 的部分可以對應到原本的 eslint，
formatter 的部分可以對應到常見的 prettier，
transformer 主要是在處理語法轉譯，對應到大家可能聽過的 Babel、SWC、tsc。

[click] 從上面這些比較，如果稍微了解過一些 Rust 的特性的話，
會知道 Rust 因為提供更有彈性的記憶體管理系統，
所以被應用在這些底層工具上能有效提升效能。
可以理解為 Oxc 的目標想把以前的一些工具像是 Babel、ESLint、tsc、prettier 等，
JS 開發工具鏈用 Rust 改寫來做一個效能提速，
基本上跟另外一個 Biome 是同樣的目標，都是想以 Rust 來提升更低成本的工具進而降低機器成本與增加開發體驗。
-->

---
layout: statement
---

# Demo

<!--
接下來我們來看一下要怎麼用這些工具。
-->

---
layout: statement
growSeed: vitest
growOpacity: 0.6
---

# Vitest

參考 <ri-github-fill /> [ckchuang-dev/jsdc-vitest-demo](https://github.com/ckchuang-dev/jsdc-vitest-demo)

<!--
首先先來看一下 Vitest 的部分，這裡我有拿我以前一個有幾個單元測試的專案來示範。
會後有興趣可以參考投影片裡面連結的這個 repo. 來試玩看看。
-->

---
transition: none
layout: two-cols
clicks: 5
grow: left
growOpacity: 0.3
---

<h1>Vitest Demo <sup text-5 op60 font-fast>settings</sup></h1>

<div mt5 mr5>

```ts {all|1-7,20-21|1,7-8,20|1,7,9,20|1,7,10,20|1,7,11-19,20}{lines:true}
// vite.config.ts
/// <reference types="vitest/config" />
import { defineConfig } from 'vite';

export default defineConfig({
  // ... 略 ...
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    coverage: {
      enabled: true,
      reporter: ['text', 'json', 'html'],
    },
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
});
```

</div>

::right::

<img :class="$clicks === 3 ? 'op100' : 'op0'" src="/vitest-env.png" absolute right-6 top-24 w-120 transition transition-500 ease-in-out />

<div :class="$clicks === 4 ? 'op100' : 'op0'" mt15 transition transition-500 ease-in-out>

```ts {all}{lines:true}
// vitest.setup.ts
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});
```

</div>

<!--
首先先看到 vitest 基本設定檔的部分。

[click] 首先你可以注意到，這裡直接將 vitest 的設定寫在 vite.config.ts 裡，
或你想另外寫成獨立設定檔也可以，
這裡的第一行是為了讓 TypeScript 能正確去解析 vitest 的設定型別。

[click] 往下快速帶大家看幾個重要的設定，
在 jest 中預設會開啟全域載入的設定，也就是你不需要在每個測試檔裡去載入那些 describe、expect 之類的函式。
想要在 Vitest 中達到一樣效果的話可以把這個設定打開。

[click] 再來這個 environment 的部分。
預設測試會跑在 `node` 這個環境下，
但當今天需要跟 testing-library 整合去做元件測試的話，
可以改成 `happy-dom` 或 `jsdom` 這個環境，
這樣可以更方便的模擬 DOM 環境。
然後從 happy-dom 從 benchmark 看比較快一些，
但相對在套件大小、功能性上沒有 jsdom 全面。

[click] 再來這個 setupFiles 的部分，
這裡可以做一些初始設定，
像這裡去載入 testing-library 相關套件，
並考慮在每個測試後去清掉不必要的元素避免互相污染與效能緩慢的問題。

[click] 最後也可以做一些涵蓋率報告的輸出跟 alias 的設定等等。
-->

---
transition: none
layout: two-cols
growSeed: right
growOpacity: 0.6
---

<h1>Vitest Demo <sup text-5 op60 font-fast>run</sup></h1>

<div mt-10>

```json
"scripts": {
  "test": "vitest run",
  "test:watch": "vitest",
  "test:ui": "vitest --ui"
},
```

</div>

<!--
再來簡單看一下 Vitest 執行測試的 demo。

這裡看到我在 package.json 裡面有設定三個指令，
分別能直接執行測試、或也支援 watch mode 能利用 vite 的 HMR 特性監聽修改的測試檔變化來方便開發。
還有一個比較酷的是有提供一個類似 devtool 的 Vitest UI。
我們來看看實際執行的畫面。
-->

---
transition: fade-out
growSeed: right
growOpacity: 0.6
---

<h1>Vitest Demo <sup text-5 op60 font-fast>run</sup></h1>

<SlidevVideo autoplay controls w="85%" m-auto>
  <!-- Anything that can go in an HTML video element. -->
  <source src="/vitest-ui-demo.mp4" type="video/mp4" />
  <p>
    Your browser does not support videos. You may download it
    <a href="/vitest-ui-demo.mp4">here</a>.
  </p>
</SlidevVideo>

<!--
可以看到這裡我假裝讓某個元件測試 fail，
你可以在 UI 介面去確認錯誤訊息。
也有一些視覺化的模組依賴畫面等等。

Optional: 這個 demo 中我沒有特別做效能比較，但根據網路上的 benchmark 看起來大多會比 Jest 快兩三倍以上。
因為 Vitest 原生支援 ESM 與 TypeScript，
加上與 Vite 的整合，因為底層有用上 esbuild 來解析語法，所以效能會比較好。

稍微小結一下，像前面說的 Vitest 的特色主要有幾點：
1. 高度與 Jest 兼容
2. 原生支援 ESM 與 TypeScript (以前在 jest 可能需要安裝一個 ts-jest 的 preset)
3. 能與 Vite 更緊密整合 (能直接寫在 vite.config.ts 裡)
4. 效能比 Jest 快一些
-->

---
layout: two-cols
growSeed: right
growOpacity: 0.6
---

# Oxc linter demo

<img v-click="1" src="/evan-oxlint.png" absolute right-12 top-24 rounded-xl w-100 />
<img v-click="3" src="/oxlint-demo.png" absolute right-12 top-24 rounded-xl w-100 />
<img v-click="5" src="/oxc-vscode.png" absolute right-12 top-24 rounded-xl w-100 />

<div v-click="2" mt-10 text-2xl>

```shell
$ git clone https://github.com/vuejs/core.git --depth=1
$ pnpm dlx oxlint@latest # 使用 pnpm
$ npx oxlint@latest # 或是用 npm
```

</div>

<v-clicks at="+4" text-2xl mt-5>

- 能被用在 `lint-staged` 這類的 workflow
- 有提供 VSCode 擴充
- `eslint-plugin-oxlint`

</v-clicks>

<div v-click="6" mt-5>

```json
{
  "lint-staged": {
    "**/*.{js,mjs,cjs,jsx,ts}": "oxlint"
  }
}
```

</div>

<!--
最後來看一下 Oxc 裡的 linter 要怎麼試玩。

[click] 這裡因為手邊沒有太複雜的專案，
參考 Evan 當初發現這個工具時的敘述，
我們就直接用 vue 的原始碼來跑跑看。

[click] 這裡如果試著將專案載下來後，
去用不安裝套件的方式執行指令，看要使用哪種 package manager 都可以。

[click] 執行完後會看到像圖上這樣，
對 500 多個檔案去做 lint 分析，
只跑了 200 多毫秒。

[click] 目標不是在取代 ESLint，
畢竟 ESLint 生態已經廣為使用，
主要是當今天有複雜專案在部份 workflow 像是 lint-staged 或 CI 上去跑 ESLint 檢查程式碼品質，
當今天在這部份遇到瓶頸時，可以嘗試用 oxlint 來改善效能。

[click] 目前也有提供 VSCode 體系的擴充，
但這部份我沒研究太多，可以再試試看。

[click] 然後參考文件說明，目前 oxlint 只支援約 400 個規則，
如果想提前與 ESLint 整合的話，可試試這個 plugin，
並在 package.json 裡的 lint-staged 設定這樣改。
-->

---
layout: statement
---

<div transition transition-500 ease-in-out :class="$clicks > 0 && 'translate-y--50'" relative>
  <div transition transition-500 ease-in-out font-jp text-4 mb2 :class="$clicks > 0 ? 'op70' : 'op0'" line-through>好潮，下週就來翻新公司專案</div>
  <h1 transition transition-500 ease-in-out v-mark.red.linethrough="{at: 1, strokeWidth: 3, iterations: 4, roughness: 1.6, maxRandomnessOffset: 8, seed: 18 }" w-fit ma="!" :class="$clicks === 1 && 'op70 scale-80'">I have big plans for this code!</h1>
</div>

<div v-click transition transition-500 mt--10>
  <img src="/big-plan.jpeg" w="2/5" absolute left-75 top-40 />
  <!-- <div abs-br m-2 op60 text-xs font-semibold>https://jamesrwilliams.ca/posts/big-plans-for-this-code</div> -->
</div>

<!--
看完今天分享你可能會想說新工具好潮，下週我就來翻新公司專案。

[click] 修但幾咧，有句老生常談的話是新東西很潮很快沒錯，
但在應用到正式產品上之前，
最好是能先用一些實驗型的小專案玩玩看，
也需要考量到團隊資源與產品穩定性等問題。
況且新潮的東西不一定在五年十年後會流行，
只能讓子彈再飛一會兒。
-->

---
class: ml10
---

<h1>總結 <sup text-5 op60 font-fast>recap</sup></h1>

<div mt10>
<v-clicks>

- VoidZero 生態系期待能提供一整套完整且高效的工具鏈：
  - **Vite**：目前已廣泛與多個前端框架生態系整合，提供良好的開發體驗
  - **Vitest**：能高度兼容 jest，並能與 testing-library 整合的單元測試工具
  - **Rolldown** (WIP)：做為未來提升打包速度的 bundler
  - **Oxc** (WIP)：做為未來改善 workflow 的工具組合

- 新東西很潮很快，但學好基本功才是首要任務。心有餘力可以先簡單實驗看看，畢竟新技術能不能成為經典還有待時間的考驗

- 有趣的觀點：VoidZero 做為一個 OSS 生態系如何盈利？為何 VC 願意投資？

</v-clicks>
</div>

<!--
最後做一下總結。

[click] 今天我們介紹了 VoidZero 底下的生態系，包含 Vite、Vitest、Rolldown、Oxc 這些工具

[click] 然後也要提醒大家，不要覺得新技術很多感到焦慮，可以先了解觀望即可。

[click] 最後就是有個有趣的觀點是我在看國外社群討論 VoidZero 時看到的，
就是畢竟 VoidZero 是一間「公司」，
但本體是個開源軟體生態系他本身該如何賺錢，
而創投的 Accel 又為什麼願意投資他們？
「過往在 VC 介入開源的經驗並不好」，可能是想想 Joynt 之於 Node.js、Vercel 之於 Next.js、Meta 之於 React 等等。
有一說是未來 VoidZero 這間公司會開發一些非開源的工具解決方案，來協助大企業做一些工具效能的提升，並有效減少機器成本來盈利。
或是利用 Vite 的廣大使用者，未來跟這些投資的雲端公司合作，提供一些一鍵完成像是發電子信、監控等整合方案。
-->

---
growOpacity: 0.7
growSeed: 1
---

<h1>參考資源與延伸閱讀 <sup text-5 op60 font-fast>references</sup></h1>

<div text-xs>

- ViteConf 2024
  - [ViteConf 2024 議程播放清單](https://www.youtube.com/playlist?list=PLqGQbXn_GDmnObDzgjUF4Krsfl6OUKxtp)
  - [Evan You | Keynote: Vite and the Future of JavaScript Tooling | ViteConf 2024](https://www.youtube.com/watch?v=EKvvptbTx6k)
  - [Boshen Chen | Oxc and Rolldown | ViteConf 2024](https://www.youtube.com/watch?v=IjV0tLysXc0)
  - [codefarmer.tw - ViteConf 2024 筆記](https://www.codefarmer.tw/topic/fe-tools/08-voidzero)
- Vitest 相關
  - [官方文件 - Migrating from Jest](https://vitest.dev/guide/migration.html#migrating-from-jest)
  - [前端輕鬆聊 Eric - Vitest runs Unit Tests 50% Faster](https://sdust.dev/posts/2023-10-05_Vitest-runs-unit-tests-faster.html)
  - [Keployio - Convert Jest to Vitest: A Complete Migration Guide](https://medium.com/@keployio/convert-jest-to-vitest-a-complete-migration-guide-16084c31cc74)
  - [Vite issues #1955 - feature: first class Jest integration](https://github.com/vitejs/vite/issues/1955)
  - [Vitest issues #1635 - Why is vitest faster than jest](https://github.com/vitest-dev/vitest/discussions/1635)
- Rolldown、Oxc 相關
  - [Rolldown / Rsbuild / Farm 效能比較的範例](https://github.com/rolldown/performance-compare-ext)
  - [官方文件 - 如何使用 oxlint](https://oxc.rs/docs/guide/usage/linter.html)
- VoidZero 相關
  - [VoidZero 官方公告](https://voidzero.dev/posts/announcing-voidzero-inc)
  - [Company using vite](https://github.com/vitejs/companies-using-vite)
  - [Rolldown roadmap](https://github.com/rolldown/rolldown/discussions/153)
  - [在 Vite 6 中用 Rolldown 換掉 esbuild 與 Rollup 的 PR](https://github.com/rolldown/vite/pull/43)
  - [Accel - Our Seed Investment in VoidZero](https://www.accel.com/noteworthies/our-seed-investment-in-voidzero-evan-yous-bold-vision-for-javascript-tooling)
  - [Theo - Vite Raised $4.6 Million To Fix JavaScript](https://www.youtube.com/watch?v=NhqZirWSBBE)

</div>

<!--
投影片附上一些參考資源，有興趣深入研究可以看看。
-->

---
layout: intro
class: text-center
growOpacity: 0.7
growSeed: 1
---

<h1 font-smiley scale-120>感謝</h1>

<div op80 font-smiley text-5>

投影片過幾天會在 <ri-github-fill /> [ckchuang-dev/talks](https://github.com/ckchuang-dev/talks) 或部落格上釋出。

</div>

<div font-smiley text-4>
  💖
  <span op70>感謝
    <a href="https://github.com/antfu" target="_blank">Kevin Deng</a>，
    投影片主題參考自 <a href="https://github.com/sxzz/talks" target="_blank"> <ri-github-fill /> sxzz/talks</a>
  </span>
</div>
<div font-smiley text-4>
  💖
  <span op70>感謝
    <a href="https://github.com/antfu" target="_blank">Anthony Fu</a>，
    此投影片由 <img src="/slidev.svg" w-1em inline /> <a href="https://sli.dev/" target="_blank"> Slidev</a>
    製作
  </span>
</div>

<style>
a {
  border: 0 !important
}
</style>

<!--
以上就是我今天的分享，投影片過幾天會在部落格上釋出，也特別感謝 Kevin、Anthony 在 slidev 工具與主題的開源。
-->

---
layout: center
---

<img src="/ig_qrcode.jpg" w-80 />

<!--
關於今天演講，因為時間有限，若有任何回饋或問題，歡迎加 IG 與我聯絡。
謝謝大家，祝大家週末愉快！
-->
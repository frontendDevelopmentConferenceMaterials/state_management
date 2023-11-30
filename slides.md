---
theme: eloc
title: '상태관리 라이브러리'
author: 'blaze(김동인)'
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
download: false
exportFilename: 'stateManagement'
export:
  format: pdf
  timeouit: 30000
  dark: false
  withClicks: false
  withToc: false
---

# 상태관리 라이브러리

발표자 : <b>blaze(김동인)</b> 
  <a href="https://github.com/in-kim" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
transition: fade-out
---

## State란?

- **State**는 컴포넌트 내에서 지속적으로 변경이 일어나는 값을 의미합니다.
- **State**의 값이 변경되면 화면이 re-rendering이 발생합니다.

<button type="button" class="">등장배경</button>

<img
  v-click
  class="absolute -bottom-9 -left-7 w-80 opacity-50"
  src="https://sli.dev/assets/arrow-bottom-left.svg"
  alt=""
/>
<div class="description absolute top-23 transform m-5 p-5 w-full h-full" style="background:rgba(0,0,0,0.9); color:#fff" v-after>
  <h2>등장배경</h2>
  <p>웹의 역사는 백엔드 서버에서 모든 데이터를 관리하는 단계에서 서버가 기존에 해오던 역할을 줄여나가는 방향으로 발전했습니다.</p>
  <p>초창기에는 BE 서버에서 브라우저의 요청에 따라, 웹 페이지를 동적으로 렌더링 해줬습니다.</p>
  <p>따라서 FE에서는 상태관리는 물론, FE 서버조차 필요 없었습니다.</p>
  <p>그러나 점차 서버의 부하를 줄이고 더 많은 사용자들에게 개선된 사용자 경험을 제공하기 위해 페이지 렌더링과 UI 작업을 처리하기 위해 추가로 FE 서버를 두기 시작했습니다.</p>
</div>

---
transition: slide-left
---

## 상태관리(State management)란?

- **State Management** 한국어로 직역하자면 상태관리를 의미합니다.
- 프론트엔드 프레임워크에서의 **상태**는 컴포넌트 내에서 지속적으로 변경이 일어나는 값을 의미하니 지속적으로 일어나는 값을 관리하는 의미로 이해하면 되겠습니다.

---
transition: slide-left
---

## 상태관리를 언제 사용하면 좋을까?

- props drilling 이슈를 해결하고 싶을때 사용하면 좋다.
- 렌더링 제어가 필요할 때 사용하면 좋다.
- 웹/앱이 커졌을때 **state**를 효율적으로 관리가 필요할때 사용하면 좋다.

<!-- 
  앱/웹 어플리케이션이 커질수록 상태들이 복잡하게 얽혀 상호간에 의존성이 많이지게 되어 UI가 어떻게 변하는지 파악하기 어려워질 수 있습니다.
  이럴경우 상태관리 라이브러리를 사용하여 상태를 관리하게 되면 효율적으로 상태를 관리할 수 있다.
 -->

<img
  v-click
  class="absolute -bottom-9 -left-7 w-80 opacity-50"
  src="https://sli.dev/assets/arrow-bottom-left.svg"
  alt=""
/>
<div class="description absolute top-23 transform m-5 p-5 w-full h-full" style="background:rgba(0,0,0,0.9); color:#fff" v-after>
  <h2>Props drilling?</h2>
  <p>컴포넌트 계층이 많아져 중간단계의 컴포넌트에서 사용하지도 않는 props를 들고 있어야하는 문제</p>
</div>

---
transition: slide-left
---

## 상태관리 라이브러리 종류 및 트렌드?

<iframe src="https://npmtrends.com/jotai-vs-mobx-vs-recoil-vs-redux-vs-zustand" />


---
transition: slide-left
---

# 감사합니다.

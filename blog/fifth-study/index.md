---
layout: post
title: '7~8일차 교육 내용'
subtitle: 'Java Method'
type: 'Study'
blog: true
text: true
author: 'Minchoel Hwang'
post-header: true
header-img: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
order: 5
category: study
tags: [study]
date: 2021-03-08
---

> 내용을 정리하다보니 몇일차 기준으로 하면 한 분량이 제대로 안나오는것 같아서 소제목으로 구별하는게 더 편할 것 같다!

# 6장 매서드(Method)

### 메서드란?

- C언어에서의 함수(function)와 같다.
- 기능을 정의하는 단위 (예 : 덧셈기능 등등)
- 하나의 기능만을 정의하는 것이 좋다.
- 자주 반복되는 내용을 정의해 놓고, 필요 시 호출하여 사용한다.

{% highlight js %}

    접근제한 반환형 메서드이름(매개변수 혹은 인자) {
    			메서드 호출 시 실행될 문장;
    }

    public static void Method() {
    	System.out.println("Method");
    }

{% endhighlight %}

<figcaption>public = 접근제한 / static = 반환형 / 매서드이름 = Method / void는 반환값이 없을 때 작성을 한다. void가 없다면 return을 해주어야한다.</figcaption>

## 상세구조정의

### 접근제한

> public > protected > default > private

- public : 누구나 다, 아무나 접근 가능.
- protected : 같은 패키지에서 접근 가능.다른 패키지는 상속 관계는 접근 가능.
- default : 같은 패키지에서만 접근 가능. 상속관계라도 접근 안됨.
- private : 외부에서 접근 불가.

<br/>

### 반환형

- 메서드를 실행하고 특정 타입의 결과를 반환해 주겠다고 선언하는 것을 반환형(리턴타입)이라고 말한다.
- 메서드에서 실행된 결과값을 돌려주는 자료형으로 생략이 불가능하다.
- 해당 메서드가 어떤 동작이나 기능을 실행한 후 결과를 알려주는 자료형.
- 메서드를 호출한 곳으로 결과를 되돌려줄 때 사용하는 자료형.
- 만약 결과를 되돌려줄 필요가 없는 경우에는 void라는 키워드를 작성한다.
- 반환형이 void인 경우를 제외하고 결과를 되돌려주어야 할 때는 메서드 명령문 맨 마지막에 return이라는 키워드를 작성 후, 앞에서 선언한 반환형과 같은 자료형으로 결과를 되돌려준다.

<br/>

### 메서드 이름

- 식별자, 소문자로 시작, 두 개의 단어가 결합된 경우에는 두번째 글자의 첫 글자를 대문자로 작성하는 것이 관례이다.

<br/>

### 매개변수

- 외부에서 값을 넘겨 받는 변수. 생략 가능.
- 메서드 호출 시 전달되는 값의 저장을 위한 용도로 사용이 된다.
- 메서드 호출 시 전달되는 값의 자료형과 매개변수의 자료형은 반드시 일치해야한다.

<br/>

### 매서드 실행문

- 해당 메서드가 호출된 경우에만 실행이 된다.

<br/>

---

### 매게 변수가 있는 메서드 정의

{% highlight js %}

    접근제한 반환형 메서드이름(type 변수1, type 변수2...) {
    			메서드 호출 시 실행될 문장;
    }

    public static void Method(int a, String b, int[] c, String[] d ) {
    	System.out.println("Method");
    }

    Method(a, b, c, d);

{% endhighlight %}

<figcaption>type = int, String, 배열 등 매개변수의 타입이 들어간다.</figcaption>

### 실인수와 가인수

- 실인수 : 매개변수에 전달할 실제 값 => 메서드를 호출할 때 사용한다.
- 가인수 : 매개변수 => 메서드에 정의.
- 실인수와 가인수는 반드시 type, 순서, 갯수가 일치해야 한다.(중요).

<br/>

---

### 메서드의 호출방식

- call by value (값에 의한 호출)
  - 값을 전달하여 호출하는 방식.
  - 매개변수가 기본자료형(int, double) 사용.
- call by reference (참조에 의한 호출)
  - 주소값을 전달하여 호출하는 방식.
  - 매개변수가 참조자료형(배열명, 클래스명) 사용.

매서드의 호출방식의 자세한 내용은 [코딩플러스](https://codingplus.tistory.com/29)에서 더 확인이 가능하다.

<br/>

### 메서드의 다중정의 (method overloading)

- 동일한 클래스에서 동일한 이름의 메서드가 여러 개 정의되는 자바 문법.
- 일관된 이름을 정의할 수 있어서 개발자(사용자)에게 코드의 직관성을 제공한다.

<br/>

헷갈릴수도 있는 [Overloading 과 Overriding 의 차이](https://brunch.co.kr/@kimkm4726/2) 알아보기

<br/>

### 메서드의 다중정의 규칙

- 메서드 이름이 동일해야한다.
- 반드시 매개변수는 자료형이 다르거나 순서가 다르거나 또는 매개변수의 갯수가 달라야한다.
- 3리턴타입(반환형)은 무관하다.

# 마무리

다음 포스팅은 클래스 문에 대해서 정리하도록 한다.

사실 메서드문은 예제를 보고 파악하는게 더 쉬워보이는데 글에 긴 코드를 붙여넣으면 더욱 알아보기가 어려울꺼 같아 최소한으로 적었는데... 차라리 깃허브에 코드를 올리고 깃허브 링크만 올리는 방식도 좋아보인다.

추가하게되면 링크형식으로 다시 붙여두도록 해야겠다.

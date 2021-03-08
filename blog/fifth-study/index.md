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

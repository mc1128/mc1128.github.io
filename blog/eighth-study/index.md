---
layout: post
title: '13~14일차 교육 내용'
subtitle: 'Exception, UtilClass '
type: 'Study'
blog: true
text: true
author: 'Minchoel Hwang'
post-header: true
header-img: 'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
order: 8
category: study
tags: [study]
date: 2021-03-16
---

# 11장 Exception 예외처리

### 에러와 예외

- **에러(error)**

  - 하드웨어의 오동작 또는 고장으로 인한 오류.
  - 에러가 발생하면 프로그램 종료.
  - 정상 실행 상태로 돌아갈 수 없다.

- **예외(exception)**
  - 사용자의 잘못된 조작 또는 개발자의 잘못된 코딩으로 인한 오류.
  - 예외가 발생하면 프로그램 종료.
  - 예외 처리를 추가해 주면 정상 실행 상태로 돌아갈 수 있다.
  - 프로그램을 위한 보험 처리. 위험한 상황에서 다른 코드를 보호하는 장치.

### 예외의 종류 및 목적

- **일반(컴파일) 예외**
  - 예외 처리 코드가 없다면 컴파일이 되지 않는 예외.
- **실행 예외**
  - 예외 처리 코드를 생략하더라도 컴파일이 되는 예외. 즉, 컴파일 하는 과정에서 예외 처리 코드를 검사하지 않는 예외를 말한다.
  - 경험에 따라 예외 처리 코드를 작성할 필요가 있다.

### 예외 처리 방법

- **예외 처리**
  - 실행 시간에서 발생한 예외(오류)를 프로그램으로 처리한다는 의미.
- **관련된 키워드**

  - try ~ catch ~ finally 블럭
  - throws 키워드

{% highlight js %}

    try {
     		예외가 발생할 가능성이 있는 코드;
     	}catch(예외클래스 참조변수) {
     		예외가 발생 시 실행되는 내용.
            참조변수 : 예외 정보를 넘겨 받는 변수.
     	}finally {
    		// 생략도 가능함.
            예외와 상관없이 실행되는 코드;
     	}

{% endhighlight %}

<figcaption>try ~ catch ~ finally 문</figcaption>

{% highlight js %}

    메서드명 throws 예외처리클래스 {    }

{% endhighlight %}

<figcaption>throws 키워드</figcaption>

자세한 내용과 예제는 [예외처리 예제](https://imasoftwareengineer.tistory.com/82)에서 확인 할 수 있다.

<br/>

**throw 와 throws의 차이점**

- throw는 메소드내에서 상위 블럭으로 예외를 던지는 것이다.
- throws는 현재 메소드에서 상위 메소드로 예외를 던지는 것이다.

자세한 내용은 [throw와 throws의 차이](https://vitalholic.tistory.com/246)

### 다중 catch문

- catch문을 여러 개 사용하여 예외를 처리하는 방식.
- catch문은 순차적으로 위에서 아래로 실행이 된다.
- 예외를 처리하는 가장 상위의 Exception 클래스는 맨 마지막 줄에 나와야 한다. (만약 첫 문장에 나올 경우 error 발생 - > [자세한 설명](https://codedragon.tistory.com/4559))

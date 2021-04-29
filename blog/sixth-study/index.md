---
layout: post
title: '9~10일차 교육 내용'
subtitle: 'Java Class, abstract class'
type: 'Study'
blog: true
text: true
author: 'Minchoel Hwang'
post-header: true
header-img: 'https://images.unsplash.com/photo-1443188631128-a1b6b1c5c207?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80'
order: 6
category: study
tags: [study]
date: 2021-03-09
---

> 객체(Object), 클래스(Class), 추상클래스(abstract class)에 대한 정리

# 7장 객체와 클래스

### 객체(Object)란?

> 객체에 정의입니다. 순차적으로 읽어보면 됩니다.

- 실세계에서 우리 주변에 있는 모든 것이 객체이다.
- 실세계의 객체들은 자신만의 고유한 특성(속성)과 행동(기능)을 가지고 있다.
- 이러한 객체들은 다른 객체들에게 행동을 요청하거나 정보를 주고 받는 등 상호 작용을 하면서 존재한다.[^1]
- 속성과 동작(기능)으로 구성이 되어 있다.[^2]
- 객체는 개별적으로 사용이 될 수도 있지만, 대부분 다른 객체와 관계를 맺고 있게 된다. 이러한 관계의 종류에는 집합관계, 사용관계, 상속관계가 있다.
- 집합관계에 있는 객체는 하나의 부품이고, 하나는 완성품에 해당이 된다.[^3]
- 사용관계는 객체 간의 상호작용을 말함. 다른 객체의 메서드를 호출하여 원하는 결과를 말한다.
- `객체지향 프로그래밍(OOP : Object Oriented Programming)`은 만들고자하는 완성품인 객체를 모델링하고, 집합관계에 있는 부품 객체와 사용관계에 있는 객체를 하나씩 설계한 후 조립하는 방식으로 프로그램을 개발하는 기법이다.

[^1]: 사람은 전자계산기의 기능을 이용하게 되고, 전자계산기는 계산 결과를 사람에게 알려 주는 상호작용을 하게 된다.
[^2]: 사람은 이름, 나이 등의 속성이 있고 걷다, 쓰다, 뛴다 등의 동작이 있으며, 자동차의 경우에는 색상, 모델명 등이 속성에 해당이 되고, 달린다, 멈춘다 등의 동작이 있다.
[^3]: 자동차는 엔진, 타이어, 핸들 등으로 구성되므로 이 부품들을 집합관계로 볼 수 있다.

<br/>

### 클래스(Class)란?

- 현실에서 객체는 갑자기 만들어지는 것이 아니라, 설계도를 바탕으로 만들어진다. 예를들어 사람들이 자동차를 이용하기 위해서는 우선 공장에서 설계도를 보고 자동차를 만들어야 한다. 객체지향프로그래밍에서도 마찬가지로 메모리에서 사용하고 싶은 객체가 있다면 우선 설계도로 해당하는 객체를 만드는 작업이 필요한데 `자바에서는 이 설계도가 바로 클래스(Class)`이다.
- 클래스를 구성하는 것을 멤버(member)라고 한다.
- 멤버 = 속성(멤버변수) + 기능(멤버메서드)
  - 속성 : 멤버변수 = 클래스의 특징 => 명사적 개념
  - 기능 : 멤버메서드 = 클래스의 행위(동작) => 동사적 개념
- 클래스 구성 : 클래스 헤더, 멤버변수, 멤버메서드, 생성자

{% highlight js %}

    접근제한 class 클래스이름 {
      		멤버변수;
      		생성자();
       		멤버메서드();
     }

{% endhighlight %}

<figcaption>클래스 이름 : 대문자로 시작(식별자)</figcaption>

### 맴버 변수 설정

멤버변수는 초기값을 설정하지 않으면 JVM이객체 생성 시점에 해당 데이터타입(자료형)에 맞게 알아서 해당 자료형의 default 값을 할당을 해 준다.

{% highlight js %}

    int num;       // 멤버변수 - 전역변수  / 기본값 ==> 0
    String str;    // 멤버변수  / 기본값 ==> "" == null

    void Ex() {  // 멤버메서드
    	int num = 10;  // 지역변수
    }

{% endhighlight %}

### 클래스 선언 방법

클래스를 객체로 만드는 과정이 필요함.

1단계 : 클래스 선언

{% highlight js %}

    클래스이름 참조변수;

    Ex01_Class ex;

{% endhighlight %}

<figcaption>참조변수 : heap 메모리 공간에 객체가 만들어지는데 만들어지는 객체의 주소값을 가진다.</figcaption>

2단계 : 클래스를 메모리(heap)에 생성

{% highlight js %}

    참조변수 = new 클래스이름();  ==> 클래스이름(X), 생성자(O)

    ex = new Ex01_Class();

    // 1단계 + 2단계 : 클래스 선언 및 클래스 객체 생성
    Ex01_Class ex = new Ex01_Class();

{% endhighlight %}

<figcaption>마지막 코드 처럼 1단계와 2단계를 한꺼번에 선언할 수 있다.</figcaption>

3단계 : 참조변수를 이용하여 객체에 접근. 객체에 접근 시 .(도트) 연산자를 이용하여 접근.

{% highlight js %}

    ex.exam();

{% endhighlight %}

<br/>

### 클래스와 객체 요약

- 클래스 : 객체를 정의해 놓은 것(추상화).
- 객체 : 클래스에 의해서 만들어진 결과물(실제화).[^4]
- 인스턴스화 : 클래스를 이용하여 객체를 만들어가는 과정.
- 클래스(1) : 객체(N)

[^4]: 제품설계도(클래스) ==> 제품(객체)

<br/>

---

### 생성자(Constructor)?

- 클래스를 대상으로 객체를 생성하는 역할을 한다.
- 클래스의 이름과 동일하다.
- 클래스에 포함되어 있으며, 객체를 생성할 때 자동으로 딱 한 번만 호출이 된다.
- 생성자는 메서드 형태를 가지고 있다. => 리턴타입(반환형)(X), void(X), 매개변수(O)
- 모든 클래스는 반드시 한 개 이상의 생성자를 가지고 있음.
- 사용자가 생성자를 정의하지 않으면, JVM이 컴파일 시점에서 자동으로 기본 생성자를 만들어 줌.
- 클래스는 생성자를 통해서 객체로 생성이 됨.

{% highlight js %}

    [접근 제한] 생성자이름(매개변수) {
       	생성자 호출 시 실행될 문장;
    }

{% endhighlight %}

<figcaption>생성자의 사용 목적 : 멤버변수들의 초기화를 목적으로 사용한다.</figcaption>

### 생성자 특징

- 생성자 이름 == 클래스 이름
- 메서드와 다르게 반환형이 없다.
- 클래스는 반드시 한 개 이상의 생성자를 가지고 있다.
- 생성자 오버로딩이 가능하다.(즉, 여러 개의 생성자가 존재할 수 있다).
- 생성자가 보이지 않으면 기본생성자가 숨어 있다.
- 기본생성자라 함은 매개변수가 없는 생성자를 말한다.
- 기본생성자 외에 다른 생성자를 만들면, 숨어 있던 기본생성자는 사라진다.
- 기본생성자 외에 다른 생성자를 만들면, 무조건 기본 생성자를 만들어 줘야한다.[^5]

[^5]: 만약 기본생성자를 만들지 않으면 상속에서 문제가 발생한다 => 상속에서 추후 설명 예정

### 생성자의 역할

- 객체를 생성하는 역할.
- 멤버변수의 초기값을 할당하는 역할.
- 객체를 생성하는 시점에 자동적으로 처리해야 할 내용을 설정하는 역할.

<br/>

### 생성자 다중정의 (Constructor Overloading)

- 동일한 클래스에서 동일한 이름의 생성자를 여러 개 정의하는 문법.
- 조건 : 매개변수의 자료형 또는 매개변수의 갯수가 달라야 함.

<br/>

---

### 클래스에 사용되는 용어들.

- 변수 : 프로그램이 끝날때까지 언제든지 변할 수 있는 속성(데이터) => 소문자로 시작한다.
- 상수 : 프로그램이 끝날때까지 절대 변하지 않는 속성(데이터) => 모든 글자가 대문자.

- **instance(인스턴스) 변수 / 메서드**

  - 객체의 생성과 동시에 만들어지는 변수 / 메서드.
  - 객체는 heap 메모리 공간에 만들어진다.
  - 반드시 객체 생성 후 사용이 가능하다.
  - 호출방법 : 참조변수.멤버변수 / 참조변수.멤버메서드

- **static(스태틱, 정적) 변수 / 메서드**

  - 객체의 생성과 상관없이 별도로 만들어지는 변수 / 메서드.
  - static 메모리(method 영역)에서 별도로 만들어진다.
  - 공통으로 사용되는 변수 / 메서드.
  - 객체를 생성하지 않아도 어느 클래스나 접근 가능.
  - 접근하는 방법이 쉬우나 실제로 항상 메모리에 상주하게 되어 메모리 회수가 안되는 단점이 있다. [^6]
  - 호출방법 : 클래스이름.멤버변수 / 클래스이름.멤버메서드

[^6]: 시스템이 며칠, 몇 주, 몇 달 정도 가동이 되면 점점 느려지는 현상이 발생을 한다.

> JVM이 main() 메서드를 호출하게 된다. 미리 메모리에 로딩이 되어 있지 않다면 인스턴스 객체를 생성하고 난 후 main() 메서드를 호출해야 한다. 이 방식은 불편하기 때문에 기본적으로 main() 메서드를 자동으로 호출하기 위해서 static 키워드를 붙여준 것이다.

<figcaption>Main 함수에 static이 붙는 이유</figcaption>

<br/>

---

### 캡슐화(Encapsulation)란?

- 객체지향 프로그램의 4대 특징 중 하나.
- 데이터를 감추기, 데이터를 외부에서 함부로 변경하지 못 하도록 외부의 접근을 제한하는 것을 말한다.
- 정보 은닉 : 클래스 멤버 접근 제어 기법.
- private : 외부에서 직접 접근 차단.
- public : 모든 클래스에서 접근 가능.
- setter() / getter() 메서드로 접근 가능.
  - setter() : 지정자 메서드
  - getter() : 획득자 메서드

### 추상 클래스(abstract class)란?

- 추상메서드를 포함하는 클래스
- 추상메서드는 본체가 없는 메서드
  {% highlight js %}

  // { } 가 없다.
  void exam();

{% endhighlight %}

- 클래스 앞에 abstract 키워드가 온다.
- 추상메서드를 재정의하지 않으면 error가 발생한다.[^7]
- 추상클래스는 객체생성이 불가능하다.
- 추상클래스는 추상매서드를 가진 클래스를 말한다. 물론 일반 멤버(맴버변수, 맴버메서드)를 가질 수 있다. 하지만 한 개 이상의 추상메서드는 반드시 존재해야한다.
  {% highlight js %}

      [접근 제한] abstract class 클래스명 { }

{% endhighlight %}

<figcaption>응용프로그램에서 설계와 구현 부분을 분리해서 작업 시 사용된다.</figcaption>

### 추상 클래스 error 발생 해결방법

- 자식클래스에서 추상메서드를 재정의
- 자식클래스에서 재정의하지 않는 경우, 자식클래스 이름 앞에 abstract 키워드를 붙여야한다.

[^7]: 추상메서드 재정의 강제성.

# 마무리

getter, setter는 JSP 게시판을 만들 때 많이 썻었는데 이렇게 다시보니 리마인드도 되고 확실히 좋은 것 같다.

다음 수업에서는 상속, 오버라이딩, 인터페이스를 알아보도록한다.
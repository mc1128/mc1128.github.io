---
layout: post
title: '11~12일차 교육 내용'
subtitle: 'Java Inheritance, Overriding, API, Interface, polymorphism'
type: 'Study'
blog: true
text: true
author: 'Minchoel Hwang'
post-header: true
header-img: 'https://images.unsplash.com/photo-1585314540237-13cb52fe9998?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80'
order: 7
category: study
tags: [study]
date: 2021-03-11
---

# 8장 상속과 오버라이딩

### 상속(inheritance)?

- 객체지향 프로그램 4대 특징 중 하나.
- 실세계에서 상속은 상위 개체의 속성이 하위 개체에 물려져서 하위 개체가 상위 개체의 속성을 모두 가지는 관계이다.
- 자바의 상속은 자식클래스가 부모클래스의 속성을 물려 받고 기능을 추가하여 확장(extends)하는 개념이다.
- 상속은 슈퍼클래스의 필드와 메서드를 물려받아서 코드를 재사용함으로써, 코드 작성에 드는 시간과 비용을 줄일 수 있다.
- 기존에 이미 잘 만들어진 클래스를 재사용하여 새로운 클래스를 생성하는 자바 문법.[^1] (클래스의 재사용, 코드의 중복을 없애줌)
- 자식과 부모의 관계로 형성되어 있다.

> 부모클래스 : Super, Parent 클래스라고 하기도 한다. <br/>
> 자식클래스 : Sub, Child 클래스라고 하기도 한다. <br/>
> 자식은 부모의 멤버보다 같거나 많다.

- 상속의 대상은 멤버(멤버변수, 멤버메서드) [^2]
- 상속 시 사용되는 키워드 : `extends`
- 상속은 단일 상속만 가능하다[^3]
- 상속의 장점은 클래스의 수정을 최소화시킬 수 있는 장점이 있으며,유지보수의 시간을 최소화시켜 준다는 장점이 있음.

{% highlight js %}

    [접근제한] class 자식클래스명 extends 부모클래스명 {....}

{% endhighlight %}

<figcaption>우선적으로 부모클래스를 객체 생성 후에 자식클래스의 객체를 생성한다.</figcaption>

[^1]: 즉, 특정 클래스를 만들 때 기존의 클래스의 데이터(속성)와 기능(메서드)을 그래도 물려 받아서 중복적인 코드를 없애준다.
[^2]: 단, 생성자나 private 접근 제한을 갖는 멤버변수와 멤버메서드는 상속에서 제외된다.
[^3]: 상속을 받을 수 있는 클래스는 하나이다.

<br/>

---

### super와 this 키워드

1. super() 키워드

- 자식클래스에서 부모클래스의 생성자를 호출하는 명령어.
  {% highlight js %}

      super.인자;

{% endhighlight %}

2.  this() 키워드

- 현재 클래스에서 다른 생성자를 호출하는 명령어.
  {% highlight js %}

       this.인자;

{% endhighlight %}

<figcaption> 생성자 첫 문장에 와야 한다. 그렇지 않으면 error 발생한다.</figcaption>

<br/>

---

### 메서드 오버드라이딩(method overriding)

- 부모클래스에서 정의한 메서드를 자식클래스에서 다시 작성(재정의)하는 것을 말한다.

### 메서드 재정의 특징

- 반드시 상속관계에서만 발생함. [^4]
- 부모클래스의 원형 메서드를 자식 클래스에서 재정의

[^4]: 메서드 다중정의 - 동일한 클래스에서 발생한다.

### 메서드 재정의 조건

- 반드시 접근지정자, 리턴타입(반환형), 매개변수 모두 일치해야 한다.[^5]
- 접근지정자는 확장 가능(축소 불가능).

[^5]: 메서드 다중정의 - 매개변수의 갯수가 다르던지, 자료형이 다르던지...

<br/>

---

# 9장 API(Application Programning Interface) 와 인터페이스(Interface)

### API란?

- 자바 시스템을 제어하기 위해서 자바에서 제공하는 명령어들의 집합을 말한다.
- JDK를 설치를 하면 자바 시스템을 제어하기 위한 API들을 제공해 주고 있다.
- 자바 개발자들은 자바에서 제공한 API를 이용해서 자바 어플리케이션을 만들게 되었다.
- [API 문서들을 모아 놓은 곳](http://docs.oracle.com/javase/8/docs/api/)

### 인터페이스란?

- 완벽한 추상화를 제공한다.
  - 일종의 추상클래스. 하지만 추상클래스보다 추상화 정도가 더 높다.
  - 실제 구현된 것이 전혀 없는 기본 설계도(알멩이 없는 껍데기).
  - 추상메서드와 상수만을 멤버로 갖는다.
  - 인스턴스를 생성할 수 없고, 클래스 작성에 도움을 줄 목적으로 사용이 된다.
  - 미리 정해진 규칙에 맞게 구현하도록 표준을 제시하는데 사용된다.
- 클래스와 클래스 사이의 중계적 역할을 하는 서비스를 제공한다.[^6]
- 모든 메서드가 추상화(추상메서드)이다.
- 프로젝트 진행 시 표준 규약에 따른다.[^7]
- 인터페이스는 상수와 추상메서드로만 구성된다.
- 모든 변수는 상수가 된다.
  - 예) public static final로 인식을 한다.
- 모든 메서드는 추상메서드가 된다.
  - 예) public abstract로 인식을 한다.
- 인터페이스는 객체 생성이 불가능하다.
- 자식클래스로 상속을 하여 자식클래스로 객체 생성.[^8]
- 인터페이스는 다중 상속을 제공한다.
  - class -> interface 키워드 사용한다.
  - extends -> implements 키워드 사용한다.

[^6]: 객체와 객체 중간에 놓이는 통신 채널.
[^7]: 추상클래스보다 더 많이 사용이 된다.
[^8]: 인터페이스의 추상메서드는 반드시 재정의(강제성이 부여됨)

<br/>

### 클래스와 다른점

- 클래스에 인터페이스를 상속할 때는 implements를 사용한다.
- 인터페이스들끼리 상속을 받을 때는 extends 키워드를 사용한다.
- 일반 클래스에서 상속은 단일 상속만 가능하다.
- 인터페이스에서는 다중 상속이 가능하다.

<br/>

---

# 10장 다형성(Polymorphism)과 패키지(Packages)

### 다형성이란?

- 객체지향 프로그램 4대 특징 중 하나. - 상속과 연관성이 많다.
- 다형성의 사전적 의미 - 같은 종의 생물이지만 모습이나 특징이 고유한 성질을 가지고 있는 것을 말한다.
- 여러 가지 모습으로 해석될 수 있는 형태를 의미한다.
- 여러 가지 형태를 가질 수 있는 능력을 말한다.
- 하나의 메서드나 클래스가 있을 때 이것들이 다양한 방법으로 동작하는 것.
- 하나의 사물(객체)을 다양한 타입으로 선언하고 이를 이용할 수 있는 성질.
- 하나의 참조변수로 여러 타입의 객체를 참조할 수 있는 것.
- 조상타입의 참조변수로 자손타입의 객체를 다룰 수 있는 것이 다형성의 특징.
- 단, 조상클래스에서 상속을 받은 멤버들만 접근할 수 있고, 자손클래스에서 만들어진 멤버들에는 접근할 수 없음.[^9]
- 조상타입의 참조변수로 자손타입의 인스턴스를 참조할 수 있지만, 반대로 자손타입의 참조변수로 조상타입의 인스턴스를 참조할 수는 없다.

### instanceof 연산자

- 참조변수가 참조하고 있는 인스턴스의 실제 타입을 알아보는 연산자.
- 연산결과로 boolean 값(true / false)를 반환한다.

{% highlight js %}

    참조변수 instanceof 클래스명(타입)

{% endhighlight %}

<figcaption>if(a instanceof Car) : 참조변수 a의 타입이 Car 클래스 타입인지를 체크한다. ==> true이면 Car 인스턴스 타입이고 false이면 Car 인스턴스 타입이 아니다.</figcaption>

### 패키지란?

- 서로 연관성이 있는 클래스들과 인터페이스들의 묶음을 말한다.
- 패키지는 물리적으로 폴더 개념과 유사하다.
- 패키지는 서브패키지를 가질 수 있으며 "."으로 구분한다.
- import 키워드 : 현재 패키지의 클래스에서 다른 패키지에 있는 다른 클래스를 사용하고 싶은 경우 import를 해야 한다.
  {% highlight js %}

      import 패키지명.서브패키지명.클래스명;

{% endhighlight %}

<figcaption>동일한 패키지에 있는 다른 클래스를 사용시에는 생략 가능하다.</figcaption>

<br/>

---

# 몇가지 개념 설명

### 접근지정자(접근제어자) 권한

- 접근지정자는 클래스, 멤버변수, 멤버메서드 앞에 사용된다.
- 외부로부터 접근을 제어한다는 의미를 가지고 있다.
- 접근지정자가 사용될 수 있는 곳 : 클래스, 멤버변수, 멤버메서드, 생성자
- 이들 접근지정자 중 protected, private 접근지정자는 클래스 앞에 사용을 못 한다. 단, Inner Class 앞에는 사용 가능.

<br/>

**private**

- 동일한 클래스에서만 사용이 가능.
- 외부에서 인스턴스 변수를 바로 접근이 가능하게 제어를 하면 잘못된 데이터를 저장할 수 있는 문제가 발생한다. 따라서 직접 접근을 못하게 제어하고 메서드(setter() / getter())를 사용하여 접근하게 한다.

**default**

- 동일한 패키지에서만 접근이 가능. 생략 가능.
- 같은 클래스의 멤버, 같은 패키지 안의 다른 클래스의 멤버까지만 접근이 가능하다.
- 다른 패키지의 상속 관계에 있는 클래스라도 접근 불가.

**protected**

- 같은 클래스의 멤버, 같은 패키지 안의 다른 클래스의 멤버, 다른 패키지의 상속 관계에 있는 클래스의 멤버까지 접근이 가능하다.

**public**

- 모든 클래스에서 접근이 가능하다.
- 같은 클래스의 멤버, 같은 패키지 안의 다른 클래스의 멤버, 다른 패키지의 상속 관계에 있는 클래스의 멤버, 다른 패키지의 클래스의 멤버까지 접근이 가능하다.

> 접근 범위(scope) : public > protected > default > private

### 자바 빈(Java Bean)

- DB에 접근하여 특정 컬럼(속성)에 값을 저장하거나 저장된 값을 가져오는 자바 클래스.
- Java Bean == DTO(Data Transfer Object) == VO(Value Object)
- 구성요소
  - 멤버변수 - DB 컬럼명 : 접근지정자(private)
  - setter() : 지정자 메서드
  - getter() : 획득자 메서드

### final 지정자

- 클래스나 멤버변수, 멤버메서드에 적용해서 사용한다.
- 클래스
  - 변경할 수 없는 클래스, 확장될 수 없는 클래스.
  - final로 지정된 클래스는 다른 클래스의 조상클래스가 될 수 없다.
- 멤버메서드
  - 변경될 수 없는 메서드.
  - final로 지정된 메서드는 오버라이딩을 통해 재정의를 할 수 없다.
- 멤버변수
  - 변수명 앞에 final이라는 키워드가 붙으면, 값을 변경할 수 없다.
- 대표적인 final 클래스는 String 클래스와 Math 클래스가 있다.

---

# 마무리

배운 개념이 많아서 정확하게 잘 파악하고 넘어가야할 내용인 것 같다. 상속같은 경우는 특히 많이쓰니깐 예제를 통해서 몇번 복습 하는 중이며, 다음 정리에서는 예외처리, 유틸, 제네릭에 대해서 정리를 해본다.

자바 클래스가 끝나면 목차정리 포스팅을 적어야 보기 편할 것 같다.

[^9]: 조상타입의 참조변수로 자식의 멤버를 호출.
---
layout: post
title: '5~6일차 교육 내용 Part1'
subtitle: 'Java 제어문'
type: 'Study'
blog: true
text: true
author: 'Minchoel Hwang'
post-header: true
header-img: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
order: 3
category: study
tags: [study]
date: 2021-03-05
---

Java의 제어문의 종류와 사용방법에 대해 알아본다.

> 5~6일차에는 제어문과 배열에 대해서 배웠지만 적을 내용이 많기에 Part1과
> Part2를 나눠서 작성하였다.

# 3장 제어문

- 프로그램의 `흐름을 제어하는 명령문`.
- 원래는 main() 메서드의 시작 `{` 에서부터 끝 `}` 까지 위에서 아래로 순차적으로 실행하는 흐름을 가지고 있다.
- 제어문은 이러한 흐름을 개발자가 원하는 방향으로 바꿀 수 있도록 해 주는 것을 말한다.
- 모든 제어문의 실행 결과는 boolean형(true/false)로 나온다.

# 제어문의 종류

1. 분기문(조건문)
   - if문, if~else문, 다중 if~else문, switch~case문
2. 반복문
   - while문, do~while문, for문
3. 기타(보조 제어문)
   - break, continue 명령어

### if문 - 분기문(조건문)

- 조건을 제시하여 참이면 실행하고, 거짓이면 무시하는 문장.
- 조건식의 결과값은 boolean 형만 올 수 있다.
- 실행문이 한 줄이면 `{ }` 생략 가능하다. 하지만 실행문이 두 줄 이상이면 반드시 `{ }` 안에 기재해야한다.

{% highlight js %}

    if(조건식) {
        조건식이 참인 경우 실행문;
    }

{% endhighlight %}

### if~else문 - 조건문

- 조건식이 참이면 조건식이 참인 경우 실행문을 실행을 하고 if~else문을 빠져 나온다.
- 조건식이 거짓이면 조건식이 거짓인 경우 실행문을 실행을 하고 if~else문을 빠져 나온다.

{% highlight js %}

    if(조건식) {
    	조건식이 참인 경우 실행문;
    }else {
    조건식이 거짓인 경우 실행문;
    }

{% endhighlight %}

### 다중 if~else문 - 조건문

- 여러 개의 조건문 중에 맞는 조건에 해당하는 문장을 실행하는 구조.

{% highlight js %}

    if(조건식1) {
    	조건식1이 참인 경우 실행문;
    	}else if(조건식2){
            조건식1이 거짓이고, 조건식2가 참인 경우 실행문;
        }else if(조건식3){
            조건식1, 조건식2가 거짓이고, 조건식3이 참인 경우 실행문;
        }else {
            조건식1, 조건식2, 조건식3이 모두 거짓인 경우 실행문;
        }
    }

{% endhighlight %}

### switch~case문 - 조건문

- 식(정수 또는 char)을 사용해서 다중분기하는 명령문.
- jdk 1.7 버전부터는 식에 String 사용이 가능하다.

{% highlight js %}

    switch(식 또는 값) {
        case 값1 :
            값이 1일 때 실행문;
            break; // switch~case 블럭 탈출
        case 값2 :
            값이 2일 때 실행문;
            break;
        case 값3 :
            값이 3일 때 실행문;
            break;
        default : // 생략도 가능함.
            값1 ~ 값3 이외의 값이 들어온 경우 실행문;
        }

{% endhighlight %}

---

### while문 - 반복문

- 조건식을 비교하여 참인 경우 계속해서 반복 실행문을 실행을 하고,조건식이 거짓인 경우에는 반복문을 빠져 나가는 문장.
- while 반복문은 반복문의 횟수를 알 수 없는 경우에 많이 사용된다.
- 반복문에는 반드시 초기식, 조건식, 증감식이 존재해야한다.[^1]

{% highlight js %}

    while(조건식){
        반복 실행문;
    }

{% endhighlight %}

[^1]: 예비

### do~while문 - 반복문

- 먼저 반복 실행문을 실행하고 조건식을 비교한다.

{% highlight js %}

    do(조건식){
        반복 실행문;
    }while(조건식);

{% endhighlight %}

### for문 - 반복문

- 변수의 값을 이용하여 반복 실행하는 명령문.
- 일정 횟수에 대한 반복을 구현할 때 효율적으로 사용되는 반복문. [^2]

> [ for 반복문 실행 순서 ]
>
> 1.  초기식 : 처음에 한 번만 실행된다(변수 선언)
> 2.  조건식 : 조건이 참이면 반복, 거짓이면 탈출(exit)
> 3.  실행문 : 반복 대상인 반복 실행문이 실행된다.
> 4.  증감식 : 변수를 대상으로 증가(++) 또는 감소(--)

[^2]: 즉, 반복문의 횟수를 알고 있는 경우에 사용됨.

{% highlight js %}

    for(초기식; 조건식; 증감식){
        반복 실행문;
    }

{% endhighlight %}

### 다중 for문 - 반복문

- 반복문 안에 또 다른 반복문을 포함하는 문장.
- 반복문이 중첩되어 사용되는 경우.
- 외부 반복문과 내부 반복문 간의 변수 값 변화에 유의해야 한다.

{% highlight js %}

    for(초기식; 조건식; 증감식){
        반복 실행문1;
        for(초기식2; 조건식2; 증감식2){
            반복 실행문2;
        }
    }

{% endhighlight %}

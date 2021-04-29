---
layout: post
title: '오라클 DB 정리'
subtitle: 'Oracle DB study'
type: 'study'
blog: true
text: true
author: 'Minchoel Hwang'
post-header: true
header-img: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
order: 10
category: study
tags: [study]
date: 2021-04-07
---

> 국비 수업시간에 배운 Oracle DB 기초 정리

# Oracle DB

### 주요 자료형 (data type)

- number(n, n1) : n - 전체 자릿수 / n1 : 소숫점 자릿수 / n - n1 : 정수 자릿수[^1]

- char(n) : 문자열 n개가 저장되는 자료형. => 고정 자료형.

- varchar(n) : 문자열 n개가 저장되는 자료형. => 현재는 사용하지 않는 자료형.

- varchar2(n) : 문자열 n개가 저장되는 자료형. => 가변 자료형. 한글은 무조건 한 글자당 2바이트씩 소모.

- date : 날짜가 저장되는 자료형. => 시스템의 현재 날짜 및 시간이 저장.

[^1]: number(7, 2) : 전체 자릿수는 7자리이고, 정수는 5자리, 실수 2자리

### 중요 개념

- 무결성(Integrity) : 데이터베이스에 저장된 데이터 값과 그것이 표현하는 현실 세계의 실제 값이 일치하는 정확성을 의미한다.

- 무결성 제약조건 : 데이터베이스에 저장된 데이터의 정확성을 보장하기 위해서 정확하지 않는 데이터가 데이터베이스 내에 저장되는 것을 방지하기 위한 조건.

### 제약 조건 종류

- unique 제약 조건 : 중복이 되면 안되는 조건.

- not null 제약 조건 : 공백을 허용하지 않는 조건.

- check 제약 조건 : 특정한 값이 아닌 데이터가 들어오지 못하게 하는 조건.

- foreign key 제약 조건 : 다른 테이블의 필드(컬럼)을 참조해서 무결성을 검사하는 제약 조건.

- primary key 제약 조건 : unique + not null 제약 조건 => 기본키 제약 조건.[^2]

[^2]: 기본키는 해당 테이블을 대표하는 컬럼으로서의 역할을 수행하며, 다른 테이블에서외래키들이 참조할 수 있는 키로서의 자격을 가진다. 이를 참조 무결성이라고 함.

### 테이블 생성

> 예제를 통해서 코드를 설명

{% highlight sql %}

    create table student(

        hakbun varchar2(12) primary key,
        name varchar2(30) not null,
        major varchar2(30) not null,
        year number(1),
        age number(3),
        regdate date not null

    );

{% endhighlight %}

<figcaption>create table로 테이블 생성, 그 밑에 자료형을 적는다.</figcaption>

### 테이블 컬럼 관련문

{% highlight sql %}

    -- 테이블에 컬럼을 추가
    -- 형식) alter table 테이블이름 add(컬럼명, 데이터타입(크기), 제약조건);
    alter table student add(address varchar2(200));

    -- 테이블의 컬럼을 수정(자료형 수정)
    -- 형식) alter table 테이블이름 modify(컬럼명 데이터타입(크기));
    alter table student modify(age varchar2(3));

    -- 테이블의 컬럼명을 변경하기
    -- 형식) alter table 테이블이름 rename column 기존컬럼명 to 새로운 컬럼명;
    alter table student rename column address to addr;

    -- 테이블의 컬럼을 삭제하기
    -- 형식) alter table 테이블이름 drop column 컬럼명;
    alter table student drop column age;

{% endhighlight %}

### 테이블 데이터 추가

{% highlight sql %}

    -- 방법 1
    insert into student values('2021_001', '홍길동', '경제학과', 3, 27, sysdate);

    -- 방법 2
    insert into student(hakbun, name, major, regdate) values('2021_002', '유한별', '회계학과', sysdate);

{% endhighlight %}

<figcaption>칼럼 갯수가 맞아야 한다.</figcaption>

### 테이블 데이터 수정, 삭제

{% highlight sql %}

    -- update 테이블이름 set 컬럼이름 = 컬럼수정내용 where primary로 되어 있는 컬럼명
    update student set addr = '충청남도 천안시' where hakbun = '2021_002';

    -- 형식) delete from 테이블이름 where 기본키로 설정된 컬럼명 = 컬럼 데이터;
    delete from student where hakbun = '2021_004';

    -- student 테이블에 있는 모든 데이터를 삭제하는 방법.
    delete from student;

{% endhighlight %}

### 테이블 조회

{% highlight sql %}

    -- student 테이블의 모든 컬럼을 보여준다.
    select * from student;

    -- student 테이블의 학번, 전공, 학년, 나이를 보여준다.
    select hakbun, major, year, age from student;

    -- student 테이블의 학번으로 컬럼 제목 바꾸기.
    select hakbun as "학번" from student;

    -- distinct 중복제거 조회
    select distinct major from student;

{% endhighlight %}

### literal 문자열

- 컬럼명이나 별칭이 아닌 select 목록에 포함되는 문자, 표현식 숫자를 의미.
- 날짜나 문자열인 경우 단일 인용부호('')를 사용해야 한다.

{% highlight sql %}

    select name || '학생의 전공은' || major || '입니다' from student;

{% endhighlight %}

### where 조건절

> 모든 데이터를 가져오는 것이 아니라 사용자가 원하는 데이터만 조회할 경우에 사용.

> 기본 Oracle DB에 있는 emp 테이블 사용

select 컬럼명1, 컬럼명2.... from 테이블이름 where 조건식;

{% highlight sql %}

    select * from emp where job = 'MANAGER';

{% endhighlight %}

- `=` : 조건이 같은가?

- `<` : 조건이 작은가?

- `<=` : 조건이 작거나 같은가?

- `>` : 조건이 큰가?

- `>=` : 조건이 크거나 같은가?

- `!=` : 조건이 같지 않은가?

- `<>` : 조건이 같지 않은가> ==> != 과 같은 의미.

- `between A and B` : A와 B 사이에 있는가?, 작은 값을 앞에 기술하고 큰 값을 뒤에 기술해야 함.

{% highlight sql %}

    -- emp 테이블에서 급여가 1300 ~ 1500 사이인
    -- 사원의 이름과 담당업무, 급여, 부서번호 출력
    select ename, job, sal, deptno from emp where sal between 1300 and 1500;

{% endhighlight %}

- `in(list)` : list 값 중에 어느 하나와 일치하는가?

{% highlight sql %}

    -- emp 테이블에서 사번이 7902, 7788, 7566인
    -- 사원의 사번, 이름, 담당업무 출력
    select empno, ename, job from emp where empno in (7902, 7788, 7566);

{% endhighlight %}

- `not between A and B` : A와 B 사이에 있지 않은가? (A, B 값 포함하지 않음)

- `not in(list)` : list 값과 일치하지 않는가?

### like 키워드

{% highlight sql %}

    -- ename 컬럼에 S자를 포함하는 사원의 이름을 검색.
    where ename like '%S%'

    -- ename 컬럼의 첫글자가 S자로 시작하는 사원의 이름을 검색.
    where ename like 'S%'

    -- ename 컬럼의 마지막 글자가 S자로 끝나는 사원의 이름을 검색.
    where ename like '%S'

    -- ename 컬럼의 두번째 글자가 S자를 포함하는 사원의 이름을 검색.
    where ename like '_S%'

{% endhighlight %}

### order by 절

- 자료를 정렬하여 나타낼 때 필요한 구문.
- order by 절을 사용할 때는 select 구문의 맨 마지막에 위치.
- `asc` : 오름차순 정렬
- `desc` : 내림차순 정렬
- 기본적으로 order by절을 사용 시에는 default가 오름차순 정렬 (`asc`)임.
- 오름차순 정렬인 경우에는 asc 생략 가능.
- null 값은 오름차순에서는 제일 나중에 나오고, 내림차순에서는 제일 먼저 나옴.

{% highlight sql %}

    -- emp테이블에서 부서번호를 기준으로 오름차순으로 정렬을 하고,
    -- 부서번호가 같은 경우 급여를 기준으로 내림차순 정렬을 하여 출력
    select * from emp order by deptno, sal desc;

{% endhighlight %}

<figcaption>deptno 뒤에는 asc가 생략되어있다.</figcaption>

### 그룹함수

- 여러 행 또는 테이블 전체에 대하여 함수가 적용되어 하나의 결과값을 가져오는 함수.
- `count()` : 행의 갯수를 구하는 함수. null 값은 무시하고 행의 갯수를 구한다.
- `avg()` : 평균값을 구하는 함수.
- `max()` : 최대값을 구하는 함수.
- `min()` : 최소값을 구하는 함수.
- `sum()` : 총합을 구하는 함수.

{% highlight sql %}

    -- 관리자수, 급여 평균과, 급여최고액, 급여최소액, 급여합계액 출력
    select count(mgr), avg(sal), max(sal), min(sal), sum(sal) from emp

{% endhighlight %}

### 시퀀스

> 순번을 부여할 때 사용하는 문법.

{% highlight sql %}

    -- MEMO 테이블 생성
    create table memo(
    bunho number(5),                    -- 메모 글번호
    title varchar2(100) not null,       -- 메모 글제목
    content varchar2(1000) not null,    -- 메모 글내용
    regdate date,                       -- 메모 작성일
    primary key(bunho)                  -- primary key의 다른지정방법
    );

    -- MEMO 작성시 사용할 시퀀스 생성
    create sequence memo_seq start with 1 increment by 1;

    -- 1 부터 생성된 시퀀스를 bunho 값에다 넣어준다.
    insert into memo values(memo_seq.nextval, '메모1', '길동이 글', sysdate);

{% endhighlight %}

### join ~ on 키워드

- 테이블과 테이블을 연결하여 특정한 데이터를 얻고자 할 때 사용한다.
- 두 개 이상의 테이블에 정보가 나뉘어져 있을 때 사용.
- 중복해서 데이터가 저장되는 것을 막기 위한다.

#### 조인의 종류

- `Cross Join`

  - 두 개 이상의 테이블이 조인될 때 조건이 없이 테이블의 결합이 이루어지는 조인. 그렇기 때문에 테이블 전체 행의 컬럼이 조인이 된다.

- `Equi Join`

  - 가장 많이 사용되는 조인 방법. 조인의 대상이 되는 두 테이블에서 공통적으로 존재하는 컬럼의 값이 일치되는 행을 연결하여 결과를 생성하는 방법.

  - 두 테이블이 조인하려면 일치되는 공통 컬럼을 사용을 하면 된다.

  - 컬럼의 이름이 같으면 혼동이 오기 때문에 컬럼 이름 앞에 테이블의 이름을 기술해야 한다.

- `Self Join`

  - 하나의 테이블 내에서 조인을 해야 자료를 얻을 수 있는데 말 그대로 자기 자신 테이블과 조인을 맺는 것을 말한다.

  - from 절 다음에 테이블 이름을 나란히 두 번 기술할 수 없음. 따라서 같은 테이블이 하나 더 존재하는 것처럼 사용할 수 있도록 테이블에 별칭을 붙여서 사용해야한다.

- `Outer Join`

  - 2개 이상의 테이블이 조인이 될 때 어느 한 쪽 테이블에는 해당하는 데이터가 다른쪽 테이블에는 데이터가 존재하지 않는 경우 그 데이터가 출력이 되지 않는 문제점을 해결하기 위해 사용되는 조인 기법.

  - 정보가 부족한 테이블의 컬럼 뒤에 '(+)' 기호를 붙여서 사용을 한다.

[DB Join 다이어그램 설명](https://pearlluck.tistory.com/46)에서 자세한 설명과 예제를 확인 할 수 있다.

### 서브쿼리

- 하나의 쿼리문 안에 포함되어 있는 또 하나의 쿼리문을 말한다.
- 쿼리문 안에 또 다른 쿼리문이 존재하는 쿼리문을 말한다.
- 서브쿼리는 메인쿼리가 서브쿼리를 포함하는 종속적인 관계이며, 여러 번 쿼리를 실행해서 얻을 수 있는 결과를 하나의 중첩된 쿼리 문장으로 결과를 얻을 수 있게 해 준다.

#### 주의사항

- 서브쿼리는 괄호로 묶어서 사용해야 한다.
- 서브쿼리 안에서는 order by 절은 사용할 수 없다.
- 연산자 오른쪽에 사용해야 한다.

{% highlight sql %}

    -- emp 테이블에서 이름이 'SCOTT'인 사원의 급여보다 더 많은
    -- 급여를 받는 사원의 사번, 이름, 담당업무, 급여를 출력
    select empno, ename, job, sal
    from emp
    where sal > (select sal from emp where ename = 'SCOTT');

{% endhighlight %}

### View 테이블

- 물리적인 테이블에 근거한 논리적인 가상의 테이블을 말한다.
- View는 실질적으로 데이터를 저장하고 있지 않는다.
- View는 테이블에 저장하기 위한 물리적인 공간이 필요가 없으며, 테이블과 마찬가지로 insert, update, delete, select 명령이 가능하다.[^3]

[^3]: 데이터 조회에 많이 사용한다.

#### View를 사용하는 이유

- 보안 관리를 위해 사용 : 보안 등급에 맞추어 컬럼의 범위를 정해서 조회가 가능하도록 할 수 있다.
- 사용자의 편의성을 제공한다.

[View 정리](https://myjamong.tistory.com/177)에서 자세한 내용 확인

### 트랜잭션(transaction)

> 데이터 처리의 한 단위

- 오라클에서 발생하는 여러 개의 SQL 명령문들을 하나의 논리적인 작업 단위로 처리하는 것을 말하며, All or Nothing 방식으로 처리한다.
- 명령어 여러 개의 집합이 정상적으로 처리가 되면 종료하고, 여러 개의 명령어 중에서 하나의 명령어라도 잘못이 되면 `전체를 취소하는 것`을 말함.

#### 트랜잭션 사용 이유

데이터의 일관성을 유지하면서 데이터의 안정성을 보장하기 위해 사용. 트랜잭션 사용 시 트랜잭션을 제어하기 위한 명령어.

- **commit**

  - 모든 작업을 정상적으로 처리하겠다고 확정하는 명령어.
  - 트랜잭션(insert, update, delete) 작업의 내용을 실제 DB에 반영. 이전에 있던 데이터에 update 현상이 발생하며, 모든 사용자가 변경된 데이터의 결과를 볼 수 있다.

- **rollback**

  - 작업 중에 문제가 발생했을 때 트랜잭션 처리 과정에서 발생한 뱐경사항을 취소하여 이전 상태로 되돌리는 명령어.
  - 트랜잭션(insert, update, delete) 작업 내용을 취소하며, 이전에 commit 한 곳까지만 복구가 된다.

- **savepoint**
  - 트랜잭션을 작게 분할하는 것을 말하며, 사용자가 트랜잭션 중간 단계에서 포인트를 지정하여 트랜잭션 내의 특정 savepoint 까지 rollback을 할 수 있게 하는 것을 말한다.

### PL/SQL(Procedual Language / SQL)

> SQL 만으로는 구현이 어렵거나 구현 불가능한 작업을 수행하기 위해 오라클에서 제공하는 프로그래밍 언어

- 일반 프로그래밍 언어적인 요소들을 다 가지고 있으며, 데이터베이스 업무를 처리하기 위한 최적화된 언어.
- 변수, 조건 처리, 반복 처리 등 다양한 기능을 사용할 수 있다.

#### 기본구조

- **선언부(declare)** : 모든 변수나 상수를 선언하는 부분.
- **실행부(excutable - begin)**
  - 실제 로직이 실행되는 부분.
  - 제어문(조건문), 반복문, 함수 정의 등의 로직을 기술하는 부분.
- **예외처리부(exception)** : 실행 도중 예외가 발생 시 해결하기 위한 명령들을 기술하는 부분.

#### 주의사항

- 기본 구조(declare, begin, exception) 키워드 뒤에는 세미콜론(;)을 붙이지 않는다.
- 블럭의 각 부분에서 실행해야 하는 문장 끝에는 세미콜론(;)을 붙인다.
- begin ~ end(실행부) 밑에는 반드시 "/"를 붙여 주어야 한다.

{% highlight sql %}

    declare
    -- 스칼라 자료형
    v_empno number(4) := 7788;
    v_ename varchar2(20);
    -- 레퍼런스 자료형
    v_empno emp.empno%type := 7693;
    v_ename emp.ename%type;
    -- rowtype : 테이블의 모든 컬럼을 한꺼번에 저장하기 위한 변수로 선언하는 방법.
    emp_row emp%rowtype;
    begin
    -- 실행문, 조건제어문 등이 들어갈 위치
    v_ename := 'ADAMS';
    dbms_output.put_line('v_empno >>> ' || v_empno);
    dbms_output.put_line('v_ename >>> ' || v_ename);
    end;
    /

{% endhighlight %}

[PL/SQL 변수 선언 방법 및 조건 제어문, 반복문 사용법 정리](https://coding-factory.tistory.com/450?category=758273)에서 자세한 예제를 확인할 수 있다.

# 마무리

DB를 통해 CRUD정도를 할 수 있을 정도의 기초적인 내용을 배우고 JAVA 프로젝트를 최종적으로 DB연결을 하여 마무리를 하였다.

---
layout: post
title: '자바 팀 프로젝트 진행, 마무리'
subtitle: 'First JAVA Team Project'
type: 'Team'
blog: true
text: true
author: 'Minchoel Hwang'
post-header: true
header-img: 'https://images.unsplash.com/photo-1522071901873-411886a10004?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRlYW18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
order: 10
category: team
tags: [team]
date: 2021-04-16
---

# 진행

첫번째 자바 팀 프로젝트에서 작성한대로 프로젝트를 진행하였다. <br>
웹으로 안만들고 게임으로 프로젝트를 진행하다보니, 기능 구현에서 어떻게 구현을 할지 고민을 많이했었다.

### Thread

게임이기 때문에 게임이 진행되면서 GUI화면에는 진행상황을 표시해줄 필요가 있었고 그 결과 Thread를 사용을 하였야 했다.

다만 Thread의 sleep을 사용하게 되면 GUI가 멈춰버리는 상황이 발생하였고, 이런 문제를 해결을 하여야했다.

### Timer

참조 : [Timer 사용법](https://javacan.tistory.com/entry/29)

Timer로 시간을 설정해서 진행하면 GUI에서도 실시간으로 표시를 할 수 있었고, 함수도 원하는 대로 진행을 시킬 수 있었다.

{% highlight js %}

    //프로그래스 바 설정 ( 전역변수로 설정 해서 다른 함수에 사용할 수 있게 만듬 )
    static JProgressBar progressBar;
    int p;

    //프로그래스 바를 Panel 에 올려줘서 값을 준다.
    //프로그래스 바는 0~100의 값을 가져서 화면에 표현을 해줘요.
    progressBar = new JProgressBar();
    progressBar.setBounds(17, 291, 117, 14);
    getContentPane().add(progressBar);

    //throwDice() 가 실행되면 프로그래스 바를 담당하는 함수도 같이 실행!
    progress_start();

    // progress_start() 함수
    public void progress_start() {
    // progress bar의 0~100 값을 받는 int p 입니다. 100이되면 0으로 초기화 해줘요.
    // 한번 실행할때마다 100까지 차기때문에 다시 값을 받기 위해서 설정해준겁니다.
        if(p == 100) {
            p = 0;
        }

    // timer 함수 설정입니다.
    Timer timer_progress = new Timer();
    TimerTask task_progress = new TimerTask() {

    // int p의 값을 0에서 100까지 증가 시켜주기 위해 value()함수를 실행해요.
    // 그리고 100이 되면 timer을 cancel() 시켜서 반복을 종료합니다.

    void progress_value(){
        if(p == 100) {
            //p가 100이되면 완료가 되었으니 밑에서 실행했던 timer를 cancel() 시켜줘요!
            timer_progress.cancel();
        }else {
        //p가 100이 아니라면 아직 진행중인 것이니 계속 p값을 1씩 올려줍니다.
        p++;
        }
    }

    @Override
    public void run() {
        progress_value();
        // progressBar을 P 값에 대해서 setValue를 시켜줍니다.
        progressBar.setValue(p);
        }
    };
    // scheduleAtFixedRate 함수는 지금 task_progress() 함수를 0 즉 바로 실행 해주고 25ms
    // 마다 task_progress를 계속 해서 실행하라는 뜻을 가지고 있어요
    (timer_progress).scheduleAtFixedRate(task_progress,0, 25);
    }// progress_start() 끝

{% endhighlight %}

<figcaption>Timer()를 사용해서 만들어본 로딩바</figcaption>

이처럼 Timer()를 사용하면 프로그래스바가 진행이되면서 다른 부분에서도 GUI가 변화할 수 있게 제작을 할 수 있었다.

### 구현

처음에는 엄청 쉽게 구현을 할 수 있을 줄 알았는데 여러 조건들을 넣다보니 코드가 점점 복잡해지기 시작했고 간결하게 만들기 위해서 노력하였다.
<br>
또한 GUI구현하는 부분에서 구글의 힘을 많이 빌린 것 같다. 코딩시간보다 오류를 잡고 검색하는 시간이 더 긴 것 같았다.

### GIT

깃을 사용해서 프로젝트를 진행을 했는다 조원분들은 Git을 처음 사용해보기도 하였고 나도 팀 프로젝트로는 처음이라 어떻게 사용해야 좋을지 검색을 많이했었는데, REBASE기능은 사용해보고 싶었지만 합칠 필요가 별로 없을 것 같아 한번만 사용해보았고, <br>
처음에는 잘 몰라서 브런치를 A B로만 나눠서 이걸로만 작업하다가 Master 브런치에서 병합 후 브런치를 다시 생성해서 작업하고 다시 병합하는 이 작업을 좀 늦게 알아서, 병합을 진행하는데 많이 어려웠었다.
<br><br>
병합하고 브런치를 새로 생성해서 진행해야지라고 더 시간을 아꼇을텐데 아쉽다.

### 결과물

깃 허브 주소 : [미니 주사위 게임](https://github.com/mc1128/JavaGame_TeamProject)

데모영상과 스토리보드, 노션을 확인할 수 있도록 작성을 해두었다.<br>
발표 PPT도 따로 만들어서 발표도 진행하였다.

# 마무리

조장을 맡아서 더 열심히 하려했기도 했고, 팀원분들이 열심히 해주시니 나도 덩달아 힘이났던것 같다.
팀원분들과 재미있었게 프로젝트를 진행했는데, 다음 팀 프로젝트에는 팀원을 바꾼다고해서 아쉽다.<br>
그리고 확실히 프로젝트를 하나 해보는게 많은 도움이 되는 것 같다.

---
layout: default
permalink: '/category'
---

{% capture site_categories %}{% for category in site.categories %}{{ category | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign categories_list = site_categories | split:',' | sort %}
<h2>분류 리스트</h2>
<ul>
    {% for item in (0..site.categories.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ categories_list[item] | strip_newlines }}{% endcapture %}
    <li><a href="#{{ this_word }}" class="tag"><span class="term">{{ this_word }}</span><span class="count">({{ site.categories[this_word].size }})</span></a></li>
    {% endunless %}{% endfor %}
  </ul>
  <h2>분류별 글 리스트</h2>
  {% for item in (0..site.categories.size) %}{% unless forloop.last %}
  {% capture this_word %}{{ categories_list[item] | strip_newlines }}{% endcapture %}
  <div style="margin-bottom: 30px;">
  <div id="{{this_word}}"></div>
  <h4>{{this_word}}</h4>
  <hr>
  <ul>
    {% for post in site.categories[this_word] %}{% if post.title != null %}
    <li>
      <small>
        {{ post.date | date: "%b %-d, %Y" }}
      </small>
      <h4>
      <a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title | escape }}</a>
      </h4>
    </li>
    {% endif %}{% endfor %}
  </ul>
</div>
{% endunless %}{% endfor %}
<!-- 참조글 - https://blog.devari.kr/2019/jekyll/jekyll-category-setting-->
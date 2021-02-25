---
layout: default
title: 'Blog'
description: 글을 정리 해두어요.
main: true
project-header: true
header-img: img/about.jpg
---

<div>
{% for tag in site.data.tags %}
<span class="tag" id="tagtest" data-tag="{{tag}}">
{{ site.data.format[tag] }}
</span>
{% endfor %}
</div>
<hr>

<ul class="catalogue">
{% assign sorted = site.pages | sort: 'order' | reverse %}
{% for page in sorted %}
{% if page.blog == true %}
{% include post-list.html %}
{% endif %}
{% endfor %}
</ul>

---
layout: default
title: 'Blog'
description: 글을 정리 해두어요.
main: true
project-header: true
header-img: img/about.jpg
---

<script type="text/javascript" src="../js/tag.js"></script>

{% for tag in site.data.tags %}
<span class="tag" id="tagtest" data-tag="{{tag}}">
{{ site.data.format[tag] }}
</span>

{% endfor %}

<ul class="catalogue">
{% assign sorted = site.pages | sort: 'order' | reverse %}
{% for page in sorted %}
{% if page.blog == true %}
{% include post-list.html %}
{% endif %}
{% endfor %}
</ul>

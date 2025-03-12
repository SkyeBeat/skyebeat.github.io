---
title: The Space Fox's Den
layout: "base.html"
---
***
Welcome to my little blog :3
<ul>
{%- for post in collections.posts -%}
    <li>{{ post.data.title }}</li>
{%- endfor -%}
</ul>


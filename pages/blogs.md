---
layout: default
title: Blogs
permalink: /blogs/
---

<link href="{{ site.baseurl }}/assets/css/blog.css" rel="stylesheet">

# Blogs

<div class="post-list">
    {%- for post in site.posts -%}
    <div class="post-card">
        <div class="post-image">
            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
        </div>
        <div class="post-content">
            <h6 class="post-title">
                <p class="post-date">{{ post.date | date: "%b %d, %Y" }}</p>
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h6>
            <p class="post-summary">{{ post.summary }}</p>
        </div>
    </div>
    {%- endfor -%}
</div>

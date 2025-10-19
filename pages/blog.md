---
layout: page
title: Blog
permalink: /blog/
---
I like to build robots and write codes to make that robot do things that I find boring to do in my everyday life. Doing robotics is fun because you get to learn about different fields (e.g., computer science, engineering, mathematics, and others), get to implement those ideas, and see it working in real life.

I am mostly interested in programming robots, and using learning (AI) to make robots 'intelligent'. In this page, I share my notes for documentation purposes, across different topics.


{% assign categories = site.categories | sort: "order" %}

{% for category in categories %}
  <h1><a href="{{ category.url | relative_url }}">{{ category.title }}</a></h1>
  {{category.content}}
{% endfor %}

---
layout: page
title: new_blog
permalink: /new_blog/
---

I like to build robots and write codes to make that robot do things that I find boring to do in my everyday life. Doing robotics is fun because you get to learn about different fields (e.g., computer science, engineering, mathematics, and others), get to implement those ideas, and see it working in real life.

I am mostly interested in programming robots, and using learning (AI) to make robots 'intelligent'. In this page, I share my notes for documentation purposes, across different topics.


{% assign topic_chapters = site.topics
  | where_exp: "item", "item.chapter"
  | where_exp: "item", "item.subchapter == nil"
  | sort: "chapter" %}

{% for topics in topic_chapters %}
  <h1> {{ topics.title }} </h1>
  {{topics.content}}
  {% assign subtopics = site.topics
    | where: "chapter", topics.chapter
    | where_exp: "item", "item.subchapter"
    | sort: "subchapter" %}

{% if subtopics.size > 0 %}
<ul style="margin-left: 10px;">
    {% for sub in subtopics %}
  <div class="subchapter-link">
        <a href="{{ sub.url | relative_url }}">
          {{ sub.subchapter }}. {{ sub.title }}
        </a>
  </div>
    {% endfor %}
  </ul>
{% endif %}
{% endfor %}

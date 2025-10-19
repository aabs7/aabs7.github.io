---
layout: gallery
title: Gallery
permalink: gallery
---

I like to travel ✈️, try new foods 🍜, meet different people 🤝🏼, and try new things.
I do these things when I'm not working or taking a break.
The more you experience, the more you know, and you have many stories to tell.
The stories and memories from the past are the sources of happiness, humility, inspiration, and life lessons.
So, here are the collections of my memories.


<div style="margin-bottom: 40px;"></div>


<div id="lightgallery">
  {% assign sorted_moments = site.moments | sort: 'date' | reverse %}
  {% for moment in sorted_moments %}
    <a class="gallery-item"
      data-lg-size="{{ moment.width }}-{{ moment.height }}"
      data-src="{{ moment.image }}"
      data-sub-html="{{ moment.caption }}">
      <img class="img-responsive" src="{{ moment.thumbnail }}" alt="{{ moment.caption }}"/>
    </a>
  {% endfor %}
</div>

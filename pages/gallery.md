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
  {% assign albums = sorted_moments | group_by: 'album'  %}

  {% for album in albums %}
    {% assign cover = album.items | sort: 'date' | last %}

    <!-- Album cover -->
    <a class="gallery-item"
       data-album="{{ album.name | slugify }}"
       data-src="http://localhost:4001{{ cover.image }}"
       data-sub-html="<h4>{{ album.name }}</h4><p>{{ cover.caption }}</p>">
      <img class="img-responsive"
           src="http://localhost:4001{{ cover.thumbnail }}"
           alt="{{ album.name }}"/>
      <div class="gallery-item-title">{{ album.name | escape }}</div>
    </a>

    <!-- Hidden images in the same album -->
    <div class="album-group" id="album-{{ album.name | slugify }}" style="display:none;">
      {% for moment in album.items %}
        {% if moment != cover %}
          <a data-src="http://localhost:4001{{ moment.image }}"
             data-thumb="http://localhost:4001{{ moment.thumbnail }}"
             data-sub-html="<h4>{{ album.name }}</h4><p>{{ moment.caption }}</p>"></a>
        {% endif %}
      {% endfor %}
    </div>
  {% endfor %}
</div>

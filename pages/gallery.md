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
  {% assign sorted_moments = site.moments | sort: 'date' | reverse  %}
  {% assign albums = sorted_moments | group_by: 'album'  %}

  {% for album in albums %}
    {% assign cover = album.items | sort: 'date' | first %}

    <!-- Album cover -->
    <a class="gallery-item"
       data-album="{{ album.name | slugify }}"
       data-src="{{ cover.image }}"
       data-sub-html="<h4>{{ album.name }}</h4><p>{{ cover.caption }}</p>">
      <img class="img-responsive"
           src="{{ cover.thumbnail }}"
           alt="{{ album.name }}"/>
      <div class="gallery-item-title">{{ album.name | escape }}</div>
    </a>

    <!-- Hidden images in the same album -->
    <div class="album-group" id="album-{{ album.name | slugify }}" style="display:none;">
      {% assign images_in_album = album.items | sort: 'date' %}
      {% for moment in images_in_album %}
        {% if moment != cover %}
          <a data-src="{{ moment.image }}"
             data-thumb="{{ moment.thumbnail }}"
             data-sub-html="<h4>{{ album.name }}</h4><p>{{ moment.caption }}</p>"></a>
        {% endif %}
      {% endfor %}
    </div>
  {% endfor %}
</div>

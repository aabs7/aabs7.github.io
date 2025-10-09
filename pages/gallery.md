---
layout: gallery
title: Gallery
permalink: photo-gallery
---

# Gallery
I like to travel ✈️, try new foods 🍜, meet different people 🤝🏼, and try new things.
I do these things when I'm not working or taking a break.
The more you experience, the more you know, and you have many stories to tell.
The stories and memories from the past are the sources of happiness, humility, inspiration, and life lessons.
So, here are the collections of my memories.


<div style="margin-bottom: 20px;"></div>
<hr class="straight-line">
<!-- Spacing below -->
<div style="margin-bottom: 20px;"></div>

<div class="gallery">
  {% for image in site.data.gallery %}
    <div class="gallery-item">
      <a href="{{ site.baseurl}}/assets/images/{{ image.name }}" data-lightbox="gallery" data-title="{{ image.caption }}">
        <img src="{{ site.baseurl}}/assets/images/thumbnails/{{ image.name }}" alt="{{ image.caption }}">
      </a>
    </div>
  {% endfor %}
</div>

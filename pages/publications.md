---
layout: page
permalink: /publications/
---

{%- assign scholar_link = site.social_links | where: "name", "Google Scholar" | first -%}

{%- if scholar_link -%}
  <meta http-equiv="refresh" content="0; url={{ scholar_link.url | escape }}" />

  <p>Redirecting to my <a href="{{ scholar_link.url | escape }}">google scholar profile</a>...</p>

  <p>
    If you are not redirected,
    <a href="{{ scholar_link.url | escape }}">please click here</a>.
  </p>
{%- else -%}
  <p>Error: Google Scholar URL not found in _config.yml.</p>
{%- endif -%}

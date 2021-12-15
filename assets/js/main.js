---
layout:
---

{% include js/is-webp-supported.js %}

{% include js/menu-burger.js %}

{%- if site.options.notes -%}
    {% include js/notes.js %}
{%- endif -%}

{%- if site.options.paragraphs_index -%}
    {% include js/paragraphs-index.js %}
{%- endif -%}

{%- if site.options.hover_navigation_links -%}
    {% include js/hover-navigation-links.js %}
{%- endif -%}

{% include js/search.js %}

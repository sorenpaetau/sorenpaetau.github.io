---
title: "Projects"
layout: archive
permalink: /projects/
---
{% assign items = site.projects | sort: 'weight' %}
<div class="grid__wrapper">
  {% for p in items %}
  <article class="grid__item">
    <a href="{{ p.url | relative_url }}">
      {% if p.thumbnail %}<img src="{{ p.thumbnail | relative_url }}" alt="{{ p.title }}">{% endif %}
      <h2 class="archive__item-title">{{ p.title }}</h2>
    </a>
    <p class="archive__item-excerpt">{{ p.excerpt | default: p.subtitle }}</p>
    {% if p.tags %}
    <p class="page__meta">
      {% for t in p.tags %}<span class="tag">{{ t }}</span>{% endfor %}
    </p>
    {% endif %}
  </article>
  {% endfor %}
</div>

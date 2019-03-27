---
title: Airbag Industries created by Greg Storey
---

<div class="page">

  {% for post in paginator.posts %}

  <article class="article" itemscope itemtype="http://schema.org/CreativeWork">

    <header class="entry-header">
      <h1 class="entry-title" itemprop="headline"><a href="{{ post.url }}" rel="bookmark">{{ post.title }}</a></h1>
    </header>

    <div class="entry-content" itemprop="text">
      {{ post.content }}
    </div>

    <footer class="entry-meta">
        {% include post-time.html %}
        {% include post-taxonomies.html %}
    </footer>

  </article><!-- end .article -->

  {% endfor %}

  <!-- Pagination links -->
  {% if paginator.total_pages > 1 %}
  <div class="archive-pagination pagination">
    <ul>
      {% if paginator.previous_page %}
        <li><a href="{{ paginator.previous_page_path | replace: '//', '/' }}">&laquo; Prev Page</a></li>
      {% endif %}

      {% for page in (1..paginator.total_pages) %}
        {% if page == paginator.page %}
          <li class="active">{{ page }}</li>
        {% elsif page == 1 %}
          <li><a href="{{ site.url }}/blog/">{{ page }}</a></li>
        {% else %}
          <li><a href="{{ site.paginate_path | replace: '//', '/' | replace: ':num', page }}">{{ page }}</a></li>
        {% endif %}
      {% endfor %}

      {% if paginator.next_page %}
        <li><a href="{{ paginator.next_page_path | replace: '//', '/' }}">Next Page &raquo;</a></li>
      {% endif %}
    </ul>
  </div><!-- end .archive-pagination .pagination -->
  {% endif %}

</div><!-- end .page -->

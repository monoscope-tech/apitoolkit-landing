---
title: Features
date: 2024-04-22
updatedDate: 2024-05-07
faLogo: folder-tree
menuWeight: 4
hideFileTree: true
pageFullWidth: true
hideToc: true
pages:
  - title: API Monitoring and Observability
    slug: /docs/features/api-monitoring-observability
    icon: chart-line
  - title: Error Tracking
    slug: /docs/features/error-tracking
    icon: circle-exclamation
  - title: API Testing
    slug: /docs/features/api-testing
    icon: flask-vial
  - title: OpenAPI Spec Documentation
    slug: /docs/features/openapi-spec-documentation
    icon: file-code
---

# monoscope Features

In these guides, you will learn more about all monoscope key features in detail.

```=html
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
{% for page in this.frontmatter.pages %}
  <a href="{{ page.slug }}" class="docs-card-2 rounded-lg">
    <i class="fa-solid fa-{{ page.icon }}"></i>
    <p class="text-lg">{{ page.title }}</p>
  </a>
{% endfor %}
</div>
```

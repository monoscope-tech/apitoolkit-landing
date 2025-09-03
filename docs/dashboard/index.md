---
title: Dashboard Guides
date: 2024-04-22
updatedDate: 2024-05-28
faLogo: chart-line
menuWeight: 3
pageFullWidth: true
hideToc: true
pages:
  - title: Get Started
    slug: /docs/dashboard/dashboard-pages/get-started
    icon: list-check
  - title: Dashboard
    slug: /docs/dashboard/dashboard-pages/dashboard
    icon: qrcode
  - title: Endpoints
    slug: /docs/dashboard/dashboard-pages/endpoints
    icon: swap
  - title: API Log Explorer
    slug: /docs/dashboard/dashboard-pages/api-log-explorer
    icon: list-tree
  - title: Changes & Errors
    slug: /docs/dashboard/dashboard-pages/changes-errors
    icon: bug
  - title: Outgoing Integrations
    slug: /docs/dashboard/dashboard-pages/outgoing-integrations
    icon: arrows-turn-right
  - title: API Tests
    slug: /docs/dashboard/dashboard-pages/api-tests
    icon: list-check
  - title: OpenAPI/Swagger
    slug: /docs/dashboard/dashboard-pages/openapi-docs
    icon: brackets-curly
  - title: Reports
    slug: /docs/dashboard/dashboard-pages/reports
    icon: chart-simple
  - title: Project Settings
    slug: /docs/dashboard/settings-pages/project-settings
    icon: gear
  - title: Manage Members
    slug: /docs/dashboard/settings-pages/manage-members
    icon: user-plus
  - title: API Keys
    slug: /docs/dashboard/settings-pages/api-keys
    icon: key
---

# Dashboard Guides

In these guides, you will learn how to effectively navigate through the monoscope dashboard and maximize all the powerful features accessible on different pages of the dashboard. Kindly click on any of the cards below to get started.

```=html
<hr />
```

```=html
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
{% for page in this.frontmatter.pages %}
  <a href="{{ page.slug }}" class="docs-card-2 rounded-lg">
    <i class="fa-solid fa-{{ page.icon }}"></i>
    <p class="text-base text-center">{{ page.title }}</p>
  </a>
{% endfor %}
</div>
```

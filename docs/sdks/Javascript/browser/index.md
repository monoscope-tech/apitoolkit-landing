---
title: Browser
ogTitle: Browser Integration Guide
date: 2022-03-23
updatedDate: 2024-06-16
menuWeight: 2
---

# Monoscope Browser SDK

The **Monoscope Browser SDK** is a lightweight JavaScript library for adding **session replay**, **performance tracing**, and **frontend logging** to your web applications.

When used together with the [Monoscope Server SDKs](https://apitoolkit.io/docs/sdks/), you gain **end-to-end observability** — seamlessly connecting user interactions in the browser to backend services, APIs, and databases.

This means you can:

- **Replay user sessions** to see exactly what happened.
- **Trace requests** from the frontend, through your backend, and into your database.
- **Capture logs and errors** with full context for faster debugging.

With the sdk, you can seamlessly monitor how users interact with your app, measure performance, and gain insights into issues — all in one place.

## Installation

Install via **npm/bun**:

```bash
npm install @monoscopetech/browser
```

Or include it directly in your HTML using a `<script>` tag:

```
&lt;script
src="https://unpkg.com/@monoscopetech/browser@latest/dist/monoscope.min.js"&gt;
&lt;/script&gt;
```

## Quick Start

Initialize Monoscope with your **project ID** and configuration:

```javascript
import Monoscope from "@monoscopetech/browser";

const monoscope = new Monoscope({
  projectId: "YOUR_PROJECT_ID",
  serviceName: "my-web-app",
  // ...other configuration options
});
```

## Configuration

The `Monoscope` constructor accepts the following options

{class="docs-table"}
:::
| Name | Type | Description |
| ------------------------------ | --------------------- | ---------------------------------------------------------------------------- |
| `projectId` | `string` | **Required** – Your Monoscope project ID. |
| `serviceName` | `string` | **Required** – Name of your service or application. |
| `exporterEndpoint` | `string` | Endpoint for exporting traces/logs. Defaults to Monoscope's ingest endpoint. |
| `propagateTraceHeaderCorsUrls` | `RegExp[]` | Array of regex patterns for URLs where trace headers should be propagated. |
| `resourceAttributes` | `Record<string, any>` | Additional resource-level attributes. |
| `instrumentations` | `any[]` | OpenTelemetry instrumentations to enable. |
| `replayEventsBaseUrl` | `string` | Base URL for session replay events. Defaults to Monoscope's ingest endpoint. |
| `user` | `MonoscopeUser` | Default user information for the session. |
:::

### User Object

The `MonoscopeUser` object can contain:

{class="docs-table"}
:::
| Name | Type | Description |
| ---------- | ---------- | ------------------------- |
| `email` | `string` | User's email address. |
| `fullName` | `string` | User's full name. |
| `name` | `string` | User's preferred name. |
| `id` | `string` | User's unique identifier. |
| `roles` | `string[]` | User's roles. |
:::

## API

### `setUser(user: MonoscopeUser)`

Associates the given user with the current session.

```javascript
monoscope.setUser({
  id: "user-123",
  email: "user@example.com",
});
```

### `getSessionId(): string`

Retrieves the current session ID — useful for tagging custom spans or events.

```javascript
const sessionId = monoscope.getSessionId();
console.log(sessionId);
```

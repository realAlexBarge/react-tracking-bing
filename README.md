# React Tracking Bing

[![Build Status](https://travis-ci.org/realalexbarge/react-tracking-bing.svg?branch=master)](https://travis-ci.org/realalexbarge/react-tracking-bing) [![dependencies Status](https://david-dm.org/realalexbarge/react-tracking-bing/status.svg)](https://david-dm.org/realalexbarge/react-tracking-bing) [![devDependencies Status](https://david-dm.org/realalexbarge/react-tracking-bing/dev-status.svg)](https://david-dm.org/realalexbarge/react-tracking-bing?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Un-official module to easily add Bing pageview tracking to react apps.

# Installation

With [npm](https://www.npmjs.com/):

```bash
npm install react-tracking-bing --save
```

# Usage

### With npm

Initializing BingTracking and tracking pageviews:

```js
import BingTracking from 'react-tracking-bing';
BingTracking.initialize('TRACKING_ID');
BingTracking.pageview();
```


# Hulu Take-Home

> A keyboard only Hulu-style UI


## Architecture Overview

This project uses architecture inspired by how Hulu builds interfaces:

- Eager hydration: All empty collections are dynamically hydrated on app load
- Pre-rendered tile rows: Ensuring smooth focus navigation
- Keyboard-only input: No mouse or scroll
- Visual aesthetics on navigation that mimcs Hulu
- Hulu-style UI design

## Getting Started
- This is intended to be run in Google Chrome
- I suggest using Incognito Mode to run it locally 

### Clone the Repo

```bash
git clone https://github.com/kryan39/Hulu-Living-Room-Device.git
cd hulu-living-room
cd hulu-app

### Install Dependencies

npm install

### Run the App
npm start
Opens http://localhost:9000 via Webpack Dev Server





# Hulu Take-Home

> A keyboard only Hulu-style UI


## 🧠 Architecture Overview

This project uses a hybrid architecture inspired by how Hulu builds  interfaces:

- Eager hydration: All empty collections are dynamically hydrated on app load
- Pre-rendered tile rows: Ensuring smooth focus navigation
- Keyboard-only input: No mouse or scroll
- Visual aesthetics on navigation that mimcs Hulu
- Hulu-style UI design

## Project Structure

src/
├── api/
├── components/
├── models/
├── styles/
├── utils/
├── index.ts
├── main.ts

## Getting Started

### Clone the Repo

```bash
git clone https://github.com/your-username/hulu-living-room.git
cd hulu-living-room
cd hulu-app

### Install Dependencies

npm install

### Run the App
npm start
Opens http://localhost:9000 via Webpack Dev Server




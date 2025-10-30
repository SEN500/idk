# ConnectHub

ConnectHub — a modern, privacy-first social media app (minimalist UI, mobile & web responsive).  
This repo will hold a full-stack app: a React frontend + an Express/Node backend with realtime messaging (Socket.IO) and a scalable data layer.

## Goals / Features
- User profiles (photo, bio, interests)
- Posts: text, photos, short videos
- Follow / Like / Comment
- Private real-time chat (Socket.IO)
- Notifications (likes, comments, follows)
- Explore/trending feed + suggested users
- Light / Dark mode, clean minimalist UI
- Secure authentication (email + Google OAuth)
- Focus: speed, scalability, user privacy (GDPR-friendly defaults)

## High-level tech stack (initial)
- Frontend: React (Vite), TypeScript (optional), Tailwind CSS (clean UI)
- Backend: Node.js + Express
- Realtime: Socket.IO
- DB (later): PostgreSQL (primary), Redis (caching, rate-limiting), S3-compatible object storage for media
- Auth: JWT sessions + Google OAuth (via Passport or OAuth libs)
- Hosting: Docker → Kubernetes / serverless for scale

## Repo layout (planned)

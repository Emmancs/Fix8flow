<<<<<<< HEAD
# Habit Coach – Full-Stack AI Habit Tracker

MERN stack habit tracker with AI-powered coaching.

## Getting started

### Prerequisites
- Node.js (v18 or higher)
- **MongoDB MUST be running** (local or Atlas)
- npm or yarn

### 1. Start MongoDB First! ⚠️

**Windows:**
```bash
# If MongoDB is installed as a service, it should start automatically
# Or start manually:
mongod --dbpath "C:\data\db"
```

**Alternative:** Use MongoDB Atlas (cloud) and update `MONGODB_URI` in `.env`

### 2. Backend (server)

```bash
cd habit-tracker/server
npm install
# .env file should already exist (created automatically)
# Edit .env if needed: MONGODB_URI, JWT_SECRET, ANTHROPIC_API_KEY
npm run dev
```

The API will run on http://localhost:5000.
**Check console for:** `MongoDB Connected: ...` and `Server running on port 5000`

### 3. Frontend (client)

```bash
cd habit-tracker/client
npm install
npm run dev
```

The app will run on http://localhost:5173.

## Troubleshooting Login Issues

**Problem: Can't login**

1. **MongoDB not running** → Start MongoDB first (see step 1)
2. **No account exists** → Click "Register" to create an account first
3. **Server not running** → Check backend terminal for errors
4. **Connection error** → Make sure backend is on port 5000 and frontend can reach it

**Common Errors:**
- `Cannot connect to server` → Backend not running (`npm run dev` in server folder)
- `MongoDB connection failed` → MongoDB not running (start MongoDB first)
- `Invalid credentials` → Wrong email/password or account doesn't exist (register first)

=======
# Fix8flow
>>>>>>> fc0071cce51ee65ee1ae1069e36c83fab3114f13

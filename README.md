# R Kid - Lancashire Language Model

Lancashire's leading language model. Trained on generations of regional wisdom, proper dialect, and me nan's advice.

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy the example env file and add your Anthropic API key:

```bash
cp .env.example .env
```

Then edit `.env` and add your API key from [console.anthropic.com](https://console.anthropic.com)

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

**Note:** For local development, you'll need to run the API separately or use `vercel dev` which handles both the frontend and serverless functions.

### Running with Vercel CLI (recommended for local dev)

```bash
npm install -g vercel
vercel dev
```

This runs both the Vite frontend and the `/api/chat` serverless function locally.

---

## Deploy to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/r-kid.git
git push -u origin main
```

### 2. Deploy

Go to [vercel.com](https://vercel.com), import your repo, and add your environment variable:

- **Name:** `ANTHROPIC_API_KEY`
- **Value:** Your API key from Anthropic

Click Deploy. Done.

---

## Costs

**Hosting (Vercel):** Free tier handles ~100GB bandwidth/month

**Anthropic API:**
- ~$0.005 per conversation (half a penny)
- 1,000 chats ≈ $5
- 10,000 chats ≈ $50

Set a monthly budget cap in [console.anthropic.com](https://console.anthropic.com) to avoid surprises.

---

## Project Structure

```
r-kid/
├── api/
│   └── chat.js          # Vercel serverless function (handles API calls)
├── public/
│   └── favicon.svg      # Lancashire rose favicon
├── src/
│   ├── App.jsx          # Main React component
│   ├── index.css        # Tailwind CSS
│   └── main.jsx         # Entry point
├── .env.example         # Environment variables template
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json          # Vercel configuration
└── vite.config.js
```

---

## Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **API:** Vercel Serverless Functions
- **AI:** Claude Sonnet (Anthropic API)
- **Hosting:** Vercel

---

Made wi' love in Lancashire 🌹 Not London.

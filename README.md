# Doctor App (Clone of cdn-react-mocha.vercel.app)

A pixel-perfect, 1:1 replica of [cdn-react-mocha.vercel.app](https://cdn-react-mocha.vercel.app/) built with React and Vite.

## Features Included
- **Header**: Doctor App navigation bar with purple styling (`#8a2be2`) and Home / Add Doctor buttons.
- **Hero Section**: Mr.Doctor App banner and image illustration.
- **Counter States**: State counters (`c` and `count`) with `inc c` and `inc count` buttons and console effect logger.
- **Featured Doctors List**: Static cards displaying doctors with specialization tags and details.
- **Doctor Search & Filtering**:
  - Live search input (`placeholder="Search your doctor"`) that searches doctor names in real-time.
  - Specialization filter dropdown (`All`, `Muscles`, `Bones`, `Heart`).
  - Empty state message (`Doctors not found`) when no doctors match.
- **Add Doctor Form**:
  - Fields for Doctor Name, Age, Specialization, Gender (Male/Female), and Salary.
  - Submitting dynamically appends the new doctor directly into the live searchable doctor grid!
- **Vercel Ready**: Includes `vercel.json` configured for zero-config Vercel deployment.

---

## How to Run in VS Code

### Option 1: Quick Terminal Run
1. Open this folder in VS Code:
   ```bash
   code C:\Users\SIRI\.gemini\antigravity\scratch\doctorsapp
   ```
2. Open terminal in VS Code (`Ctrl + ~`) and run:
   ```bash
   npm install
   npm run dev
   ```
3. Open `http://localhost:5173` in your browser.

### Option 2: Run via VS Code Tasks
- Press `Ctrl + Shift + B` (or go to **Terminal** -> **Run Build Task...**) and select **npm: dev**.

---

## How to Push to GitHub

1. Open your terminal in this folder (`C:\Users\SIRI\.gemini\antigravity\scratch\doctorsapp`).
2. Create a new repository on [GitHub](https://github.com/new) named `doctor-app` (or any name you prefer).
3. Run the following commands:
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git branch -M main
   git push -u origin main
   ```

---

## How to Deploy to Vercel

### Option 1: Via GitHub (Recommended)
1. Go to [vercel.com/new](https://vercel.com/new).
2. Connect your GitHub account and import your `doctor-app` repository.
3. Framework Preset will automatically detect **Vite**.
4. Click **Deploy**. Your app will be live on your own `*.vercel.app` URL in seconds!

### Option 2: Via Vercel CLI
1. Run in terminal:
   ```bash
   npx vercel
   ```
2. Follow the short on-screen prompts (deploy as-is).
3. To deploy to production:
   ```bash
   npx vercel --prod
   ```

# 🚀 Quick Start - 3 Minutes to Deploy

## What You're Getting
Automatic weekly updates of your publications from Google Scholar. Citations, links, and abstracts all update automatically!

## 3-Step Deployment

### Step 1: Commit Everything (1 minute)
```bash
cd /Users/ashiks/Documents/Projects/ashik-khan-cs.github.io
git add -A
git commit -m "feat: add Google Scholar auto-updater"
git push
```

### Step 2: Verify GitHub Actions (1 minute)
1. Open your repo on GitHub
2. Click **Settings** → **Actions** → **General**
3. Confirm actions are enabled ✅

### Step 3: Test (1 minute, optional)
1. Go to **Actions** tab on GitHub
2. Click **Update Publications from Google Scholar**
3. Click **Run workflow** → **Run workflow**
4. Wait 1-2 minutes for it to complete

## That's It! 🎉

Your website will now:
- 📊 Update publications weekly (Sunday 2 AM UTC)
- 📈 Show current citation counts
- 🔗 Include direct paper links
- ⏱️ Display update timestamp
- 🛡️ Handle all errors automatically

## How It Works in Plain English

1. **Every Sunday at 2 AM UTC**, GitHub automatically runs your Python script
2. **The script downloads** your latest publications from Google Scholar
3. **Saves to `publications.json`** with all the data
4. **Your website loads** this JSON file and displays it
5. **Visitors see** your latest publications with current citations!

## To Manually Update Anytime

Go to **Actions** → **Update Publications from Google Scholar** → **Run workflow**

## Files Created

- ✅ `.github/workflows/update-publications.yml` - Automation
- ✅ `scripts/fetch_publications.py` - Scraper script
- ✅ `publications.json` - Data file
- ✅ `script.js` - Updated (loading function)
- ✅ `index.html` - Updated (dynamic rendering)
- ✅ `style.css` - Updated (animations)
- ✅ Documentation files

## Troubleshooting in 30 Seconds

**Problem: "Actions aren't running"**
→ Settings → Actions → General → Enable actions

**Problem: "Publications not updating"**
→ Check Actions tab for error logs

**Problem: "Want to change update time?"**
→ Edit `.github/workflows/update-publications.yml` line with `cron:`

## Next Week

The system automatically runs. Check your site to see updated publications! 

Need help? See:
- `SCHOLAR_UPDATER_README.md` - Full docs
- `SYSTEM_OVERVIEW.md` - How it works
- `SETUP_CHECKLIST.md` - Detailed setup

---

**You're all set!** 🎊 Your portfolio now automatically stays in sync with your Google Scholar profile.

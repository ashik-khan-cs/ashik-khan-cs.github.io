# 🎓 Google Scholar Auto-Update System

Your website now automatically fetches publications from Google Scholar every day!

## ✅ What's Been Set Up

### 1. **Automated Daily Updates**
- GitHub Actions workflow runs **every day at 2 AM UTC**
- Fetches latest publications, citations, and links from Google Scholar
- Updates `publications.json` automatically
- Commits changes to your repository

### 2. **Enhanced Website Display**
- Shows updated citation counts in real-time
- Displays direct links to papers and Google Scholar
- Shows "Last Updated" timestamp
- Includes year in publication venue
- Separate buttons for "View Paper" and "Scholar" links

### 3. **Smart Caching**
- Website fetches fresh data on every page load
- No browser caching issues with publications

## 🚀 How to Use

### Test It Right Now

1. Go to your GitHub repository
2. Click **Actions** tab
3. Click "Update Publications from Google Scholar"
4. Click **Run workflow** → **Run workflow**
5. Wait ~2 minutes for completion
6. Your `publications.json` will be updated with latest data!

### What Happens Automatically

Every day at 2 AM UTC, GitHub will:
1. ✅ Fetch your Google Scholar profile
2. ✅ Get all publication details and citation counts
3. ✅ Update `publications.json`
4. ✅ Commit and push changes
5. ✅ Your website automatically shows the new data!

## 📊 What Gets Updated

For each publication:
- ✅ Title
- ✅ Authors
- ✅ Venue and year
- ✅ **Citation count** (updated daily!)
- ✅ Abstract
- ✅ Link to published paper
- ✅ Link to Google Scholar page

## 🔧 Configuration

### Change Update Frequency

Edit [`.github/workflows/update-publications.yml`](.github/workflows/update-publications.yml):

```yaml
schedule:
  # Daily at 2 AM UTC (current)
  - cron: '0 2 * * *'

  # Weekly on Sundays
  - cron: '0 2 * * 0'

  # Twice daily (2 AM and 2 PM)
  - cron: '0 2,14 * * *'
```

### Update Your Scholar ID

If needed, edit [`scripts/fetch_publications.py`](scripts/fetch_publications.py) line 123:

```python
scholar_id = 'EKQLSHQAAAAJ'  # Your current ID
```

## 🎯 Benefits

1. **Always Up-to-Date**: Citations update automatically
2. **Zero Maintenance**: No manual editing needed
3. **Professional**: Shows you're active researcher
4. **Free**: GitHub Actions is free for public repos
5. **Reliable**: Includes retry logic and error handling

## 📝 Files Modified

- ✅ [`.github/workflows/update-publications.yml`](.github/workflows/update-publications.yml) - Changed to daily updates
- ✅ [`script.js`](script.js) - Enhanced publication rendering with cache-busting
- ✅ [`scripts/README.md`](scripts/README.md) - Complete documentation
- ✅ [`scripts/fetch_publications.py`](scripts/fetch_publications.py) - Already existed, working perfectly!

## 🔍 Monitoring

### Check if it's working:

1. **GitHub Actions**: Go to Actions tab to see run history
2. **Last Update Time**: Displayed at bottom of Publications section on your website
3. **Git Commits**: Look for commits from "GitHub Action" bot

### If something goes wrong:

- GitHub will create an issue automatically
- Check the Actions tab for error logs
- Script includes retry logic for temporary failures

## 💡 Next Steps

1. **Enable the workflow**: Make sure GitHub Actions is enabled in your repo settings
2. **Test it**: Run the workflow manually once to verify it works
3. **Commit these changes**: Push the updated files to activate the automation
4. **Relax**: Your publications will update automatically every day! 🎉

## 🆘 Need Help?

See detailed troubleshooting in [`scripts/README.md`](scripts/README.md)

---

**Your Scholar Profile**: https://scholar.google.com/citations?user=EKQLSHQAAAAJ

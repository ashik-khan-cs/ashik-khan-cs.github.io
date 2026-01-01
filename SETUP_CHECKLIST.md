# Setup Checklist

## Files Created/Added ✓

- [x] `scripts/fetch_publications.py` - Python scraper script
- [x] `.github/workflows/update-publications.yml` - GitHub Actions workflow
- [x] `publications.json` - Initial publication data
- [x] `SCHOLAR_UPDATER_README.md` - Full documentation

## Code Changes ✓

- [x] `script.js` - Added `loadPublications()` function and auto-load on page load
- [x] `index.html` - Updated publications section to load dynamically with loading indicator
- [x] `style.css` - Added `@keyframes spin` animation

## Next Steps

### 1. Commit and Push
```bash
cd /Users/ashiks/Documents/Projects/ashik-khan-cs.github.io

# Add all new files
git add .github/workflows/update-publications.yml scripts/fetch_publications.py publications.json SCHOLAR_UPDATER_README.md

# Add modified files
git add script.js index.html style.css

# Commit
git commit -m "feat: add Google Scholar auto-update system for publications"

# Push to GitHub
git push origin main
```

### 2. Enable GitHub Actions (if needed)
- Visit: https://github.com/ashik-khan-cs.github.io/settings/actions
- Ensure "Actions permissions" is set to "Allow all actions"

### 3. Test (Optional)
Visit **Actions** tab on GitHub → **Update Publications from Google Scholar** → **Run workflow**

### 4. Automatic Updates
The workflow will automatically run every **Sunday at 2 AM UTC**. 
You can adjust the schedule in `.github/workflows/update-publications.yml` if needed.

## Features Included

✅ **Automatic Scraping**
- Runs weekly to fetch latest publications
- Respects rate limits with delays and retries
- Handles network errors gracefully

✅ **Dynamic Rendering**
- Publications load from `publications.json` file
- Shows loading spinner while fetching
- Falls back to static HTML if fetch fails
- Displays last updated timestamp

✅ **Git Integration**
- Auto-commits updated publications
- Creates issues on workflow failure
- Uses GitHub Actions for scheduling

✅ **Easy Customization**
- Change update frequency in workflow
- Modify displayed fields in JavaScript
- Customize styling in CSS

## How to Use

**No further action needed!** Once you push to GitHub:

1. The workflow will run automatically on schedule
2. `publications.json` will be updated with latest data
3. Your website will display updated citations and links automatically
4. A timestamp shows when publications were last updated

## Manual Updates

To manually trigger an update:
1. Go to your repository on GitHub
2. Click **Actions** tab
3. Select **Update Publications from Google Scholar**
4. Click **Run workflow**

## Monitoring

Check GitHub Actions to see:
- When the workflow last ran
- If it succeeded or failed
- The updated `publications.json` file

## Questions?

Refer to `SCHOLAR_UPDATER_README.md` for detailed documentation.

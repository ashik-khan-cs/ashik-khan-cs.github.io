# Google Scholar Publications Auto-Update

This directory contains scripts to automatically fetch and update publications from your Google Scholar profile.

## How It Works

1. **GitHub Actions Workflow** (`.github/workflows/update-publications.yml`):
   - Runs **daily at 2 AM UTC** automatically
   - Can be triggered manually from GitHub Actions tab
   - Fetches latest publications and citation counts from Google Scholar
   - Updates `publications.json` with fresh data
   - Commits changes back to the repository

2. **Python Script** (`fetch_publications.py`):
   - Uses the `scholarly` library to crawl Google Scholar
   - Fetches publication details, citations, URLs, and abstracts
   - Saves data to `publications.json` with timestamp

3. **Website Integration** (`script.js` and `index.html`):
   - Loads publications from `publications.json` on page load
   - Displays updated citation counts and links
   - Shows "last updated" timestamp
   - Falls back to static HTML if JSON fails to load

## Setup Instructions

### 1. Enable GitHub Actions (if not already enabled)

1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. If prompted, enable GitHub Actions for the repository

### 2. Verify Your Google Scholar ID

Your current Scholar ID is: `EKQLSHQAAAAJ`

To verify or update it:
1. Go to your Google Scholar profile
2. Look at the URL: `https://scholar.google.com/citations?user=EKQLSHQAAAAJ`
3. The ID is the value after `user=`
4. Update it in `scripts/fetch_publications.py` if needed (line 123)

### 3. Test the Workflow Manually

1. Go to **Actions** tab on GitHub
2. Click on "Update Publications from Google Scholar"
3. Click **Run workflow** → **Run workflow**
4. Wait for it to complete (usually 1-2 minutes)
5. Check if `publications.json` was updated

### 4. Configure Update Frequency (Optional)

Edit `.github/workflows/update-publications.yml`:

- **Daily**: `cron: '0 2 * * *'` (current setting)
- **Weekly**: `cron: '0 2 * * 0'` (Sundays at 2 AM)
- **Twice daily**: `cron: '0 2,14 * * *'` (2 AM and 2 PM)

## Local Testing

Run the script locally to test:

```bash
# Install dependencies
pip install scholarly

# Run the script
python scripts/fetch_publications.py

# Check the output
cat publications.json
```

## Troubleshooting

### Publications Not Updating

1. **Check GitHub Actions logs**:
   - Go to Actions tab → Click on latest workflow run
   - Check for errors in the logs

2. **Google Scholar rate limiting**:
   - The script includes retry logic and delays
   - If blocked, wait a few hours and try again

3. **Network errors**:
   - GitHub Actions may occasionally have network issues
   - The workflow will automatically retry on the next scheduled run

### Manual Update

If automated updates fail, you can manually update:

```bash
# Run locally
python scripts/fetch_publications.py

# Commit the changes
git add publications.json
git commit -m "Update publications manually"
git push
```

## Data Structure

The `publications.json` file contains:

```json
{
  "lastUpdated": "2026-01-01 02:00:00",
  "publications": [
    {
      "number": 1,
      "title": "Paper Title",
      "authors": "Author 1, Author 2",
      "venue": "Conference/Journal Name",
      "year": "2024",
      "citations": 18,
      "abstract": "Paper abstract...",
      "scholar_url": "https://scholar.google.com/...",
      "pub_url": "https://ieeexplore.ieee.org/..."
    }
  ]
}
```

## Features

- ✅ Automatic daily updates from Google Scholar
- ✅ Real-time citation counts
- ✅ Direct links to papers and Scholar profiles
- ✅ Retry logic for network failures
- ✅ Error notifications via GitHub Issues
- ✅ Manual trigger option
- ✅ Timestamp showing last update
- ✅ Fallback to static HTML if JSON fails

## Important Notes

- The workflow runs on GitHub's servers (free for public repositories)
- Changes are committed automatically by GitHub Actions bot
- The script respects Google Scholar's rate limits with built-in delays
- All publications are sorted by Google Scholar's default order

# Google Scholar Publication Auto-Updater

This system automatically fetches your latest publications from Google Scholar and updates your portfolio website.

## How It Works

### Components

1. **Python Script** (`scripts/fetch_publications.py`)
   - Fetches your Google Scholar profile using the `scholarly` library
   - Extracts publication details (title, authors, venue, citations, abstract, links)
   - Saves data to `publications.json`

2. **GitHub Actions Workflow** (`.github/workflows/update-publications.yml`)
   - Runs the Python script on a schedule (weekly, every Sunday at 2 AM UTC)
   - Can be manually triggered from GitHub Actions tab
   - Automatically commits changes to `publications.json`
   - Creates an issue if the workflow fails

3. **Frontend** (JavaScript + HTML)
   - `script.js` loads `publications.json` dynamically
   - Renders publications with proper formatting
   - Falls back to static HTML if JSON fails to load
   - Shows last updated timestamp

## Setup Instructions

### 1. Verify Your Google Scholar ID
Your Scholar ID is: `EKQLSHQAAAAJ` (from your profile URL)

The script is already configured with this ID in `scripts/fetch_publications.py`.

### 2. Enable GitHub Actions (if not already enabled)
- Go to your repository on GitHub
- Click **Settings** → **Actions** → **General**
- Ensure Actions are enabled

### 3. First Manual Test (Optional)
```bash
# Run locally to test (requires Python 3.10+)
cd /path/to/your/repo
python -m pip install scholarly
python scripts/fetch_publications.py
```

### 4. Push to GitHub
```bash
git add scripts/fetch_publications.py .github/workflows/update-publications.yml publications.json
git commit -m "feat: add Google Scholar auto-updater"
git push
```

The workflow will run automatically on:
- **Schedule**: Every Sunday at 2 AM UTC
- **Manual Trigger**: Via GitHub Actions tab

## What Gets Updated

The `publications.json` file includes:
- ✅ Publication title
- ✅ Authors
- ✅ Venue/Conference
- ✅ Publication year
- ✅ Citation count
- ✅ Abstract
- ✅ Scholar profile link
- ✅ Full paper link
- ✅ Last updated timestamp

## Customization

### Change Update Schedule
Edit `.github/workflows/update-publications.yml`:
```yaml
on:
  schedule:
    - cron: '0 2 * * 0'  # Change this line
    # Format: minute hour day month weekday
    # Examples:
    # '0 0 * * *' = Daily at midnight
    # '0 12 * * 1' = Every Monday at noon
```

### Add More Fields
Edit `scripts/fetch_publications.py` to extract additional fields from Scholar:
```python
'doi': pub.get('bib', {}).get('doi', ''),
'keywords': pub.get('bib', {}).get('keywords', []),
# etc.
```

### Update HTML Display
Edit `renderPublications()` function in `script.js` to show different fields.

## Troubleshooting

### Workflow Fails
1. Check GitHub Actions logs: **Actions** tab → Latest workflow run
2. Common issues:
   - Google Scholar blocking requests (add delay between requests)
   - Network timeout (handled with retry logic)
   - Scholar ID incorrect (verify in URL)

### Publications Not Updating
- Click **Actions** tab → **Update Publications from Google Scholar**
- Click **Run workflow** → **Run workflow**

### Manual Update
```bash
python scripts/fetch_publications.py
git add publications.json
git commit -m "chore: manual publication update"
git push
```

## Rate Limiting Notes

The script includes:
- 1-second delay between publication fetches
- Retry logic with exponential backoff
- Respectful user agent header

Google Scholar may temporarily block aggressive scraping. The script handles this gracefully and retries.

## Security

- No API keys required (uses free scholarly library)
- No sensitive data stored
- GitHub Actions runs with minimal permissions
- All data is public (from your Google Scholar profile)

## Files Created/Modified

```
.github/workflows/update-publications.yml  (new)
scripts/fetch_publications.py              (new)
publications.json                          (auto-generated)
script.js                                  (modified)
index.html                                 (modified)
style.css                                  (modified)
```

## Support

For issues:
1. Check GitHub Actions logs
2. Verify Google Scholar profile is public
3. Confirm Scholar ID is correct
4. Run script manually to debug

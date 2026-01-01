# Google Scholar Auto-Updater - System Overview

## What This Does

Your publications section will now **automatically update every week** with:
- ✅ Latest publication titles
- ✅ Updated citation counts
- ✅ Direct links to papers
- ✅ Paper abstracts
- ✅ Author information
- ✅ Last update timestamp

No manual updates needed!

## How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                    GitHub Actions                           │
│  (Runs on schedule: Weekly, Sunday 2 AM UTC)                │
│                                                             │
│  1. Fetches your Google Scholar profile                     │
│  2. Extracts all publication data                           │
│  3. Saves to publications.json                              │
│  4. Commits changes to GitHub                               │
└─────────────────────────────────────────────────────────────┘
                           │
                           ↓
            ┌──────────────────────────┐
            │  publications.json        │
            │  (Updated file)           │
            └──────────────────────────┘
                           │
                           ↓
            ┌──────────────────────────┐
            │  Your Website             │
            │  (Loads data dynamically) │
            │                          │
            │  Shows:                  │
            │  • Publication titles    │
            │  • Citation counts       │
            │  • Links to papers       │
            │  • Last updated date     │
            └──────────────────────────┘
```

## Files Overview

### New Files

**`scripts/fetch_publications.py`**
- Python script that scrapes Google Scholar
- Configured for your Scholar ID: `EKQLSHQAAAAJ`
- Handles errors and retries automatically
- Respects rate limits

**`.github/workflows/update-publications.yml`**
- GitHub Actions workflow configuration
- Triggers automatically on schedule
- Can be manually triggered anytime
- Auto-commits results

**`publications.json`**
- Data file with all publication information
- Generated automatically by the script
- Used by website to display publications
- Includes last updated timestamp

**`SCHOLAR_UPDATER_README.md`**
- Detailed documentation
- Troubleshooting guide
- Customization instructions

**`SETUP_CHECKLIST.md`**
- Quick setup guide
- Next steps
- How to test

### Modified Files

**`script.js`**
- Added `loadPublications()` function
- Dynamically loads and renders publications from JSON
- Shows loading indicator
- Applies animations to loaded content

**`index.html`**
- Updated publications section
- Now displays content dynamically
- Loading message shown while fetching
- Fallback to static publications if needed

**`style.css`**
- Added spinning animation for loading indicator
- Smooth transitions for dynamic content

## Timeline

**Week 1 (Setup)**
- Push code to GitHub
- GitHub Actions runs first fetch
- Website shows updated publications

**Week 2+**
- Every Sunday at 2 AM UTC, workflow runs automatically
- If citations increase or new papers are published, site updates
- Timestamp shows when publications were last checked

## Example: What Gets Updated

### Before
```
Publication 1: Comparative Analysis...
Cited by 18

Publication 2: Fixed-Threshold Evaluation...
(No citation count)
```

### After (Next Update)
```
Publication 1: Comparative Analysis...
Cited by 23  ← Updated!

Publication 2: Fixed-Threshold Evaluation...
Cited by 5   ← Now showing!

Last updated: 2026-01-05 02:00:00
```

## Key Benefits

🚀 **Automated** - No manual updates needed
⏰ **Scheduled** - Runs weekly automatically  
📊 **Accurate** - Always reflects your Google Scholar data
🔗 **Direct Links** - Links to full papers automatically
📈 **Citation Tracking** - Shows current citation counts
🛡️ **Reliable** - Error handling and retry logic built-in
🎨 **Seamless** - Integrates smoothly with your site design

## To Get Started

1. Commit the new files to GitHub
2. Push to your repository
3. That's it! The system handles everything else

The workflow will run automatically every week. You can also manually trigger it anytime from the Actions tab on GitHub.

## Live Example

Your publications section will look like:

```
┌─────────────────────────────────────────────┐
│ Publications                                │
│ (Loading from Google Scholar...)            │
│                                             │
│ 1. Comparative Analysis of...               │
│    Authors: Md Ashik Khan, Rafath Bin...    │
│    Venue: ICCIT 2024                        │
│    Cited by 18                              │
│    [View]                                   │
│                                             │
│ 2. Fixed-Threshold Evaluation...            │
│    Authors: Md Ashik Khan, Arafat Alam...   │
│    Venue: ICCIT 2025                        │
│    Cited by 5                               │
│    [View]                                   │
│                                             │
│ Last updated: 2026-01-05 02:00 UTC          │
└─────────────────────────────────────────────┘
```

## Support

If you need help:
1. Check `SCHOLAR_UPDATER_README.md` for detailed docs
2. Review GitHub Actions logs if workflow fails
3. Check that your Google Scholar profile is public

Everything is set up and ready to go! 🎉

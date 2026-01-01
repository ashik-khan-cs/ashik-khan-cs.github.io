# How to Update Publications

Google Scholar blocks automated scraping, so publications need to be updated manually. Here's the simple process:

## Quick Update (Recommended)

1. **Check your Google Scholar** for current citation counts:
   - Visit: https://scholar.google.com/citations?user=EKQLSHQAAAAJ&hl=en
   - Note the citation numbers for each paper

2. **Edit `publications.json`**:
   ```bash
   nano publications.json
   # or open in VS Code
   ```

3. **Update the citation counts**:
   ```json
   {
     "number": 1,
     "title": "Comparative Analysis...",
     "citations": 21,  // <- Update this number
     ...
   }
   ```

4. **Update the timestamp** (top of file):
   ```json
   {
     "lastUpdated": "2026-01-15 10:30:00",  // <- Update to current date/time
     ...
   }
   ```

5. **Commit and push**:
   ```bash
   git add publications.json
   git commit -m "Update publication citations"
   git push
   ```

That's it! Your website will automatically show the new citation counts.

## What to Update

### For each publication in `publications.json`:

- **citations**: The number from Google Scholar
- **pub_url**: Add when papers get published online (for accepted papers)
- **scholar_url**: Link to the paper on Google Scholar (optional)
- **lastUpdated**: Current date/time at the top of the file

## Example

Before:
```json
{
  "number": 1,
  "title": "Comparative Analysis...",
  "citations": 18,
  ...
}
```

After checking Scholar and seeing 21 citations:
```json
{
  "number": 1,
  "title": "Comparative Analysis...",
  "citations": 21,
  ...
}
```

## When to Update

- **Monthly**: Check citation counts and update
- **When papers get published**: Add IEEE/conference URLs for accepted papers
- **When you notice changes**: Update anytime you see new citations

## Current Publications Status

1. **Brain Tumor Classification** (2024)
   - Published on IEEE: ✅
   - Citations tracking: ✅

2. **Fixed-Budget Parameter-Efficient Training** (2025)
   - Accepted at ICCIT 2025
   - Published on arXiv: ✅
   - Will get IEEE URL after conference

3. **Fixed-Threshold Evaluation** (2025)
   - Accepted at ICCIT 2025
   - Published on arXiv: ✅
   - Will get IEEE URL after conference

---

**Note**: The GitHub Actions workflow is disabled because Google Scholar blocks automated access. If Scholar ever allows API access in the future, we can re-enable the daily automation.

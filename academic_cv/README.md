# Academic CV - LaTeX

Professional academic CV for faculty positions (Assistant Professor/Senior Lecturer/Lecturer in Computer Science).

## Quick Start

### Compile the CV

```bash
cd academic_cv
make pdf
```

Or manually:
```bash
pdflatex main.tex
pdflatex main.tex  # Run twice for proper formatting
```

### View the PDF

```bash
make view  # macOS - compiles and opens PDF
```

Or manually:
```bash
open main.pdf  # macOS
xdg-open main.pdf  # Linux
```

## Requirements

- LaTeX distribution (MacTeX, TeX Live, or MiKTeX)
- `moderncv` package (usually included in full LaTeX distributions)

### Install LaTeX on macOS

```bash
brew install --cask mactex
# or for smaller installation:
brew install --cask basictex
sudo tlmgr install moderncv fontawesome5
```

### Install LaTeX on Linux

```bash
sudo apt-get install texlive-latex-extra texlive-fonts-recommended
```

## Customization

Edit `main.tex` to customize:

- **Personal Information** (lines 20-28): Name, contact details, social links
- **Color Scheme** (line 8): Options: `blue`, `orange`, `green`, `red`, `purple`, `grey`, `black`
- **Style** (line 7): Options: `casual`, `classic`, `banking`, `oldstyle`, `fancy`
- **Content**: All sections are clearly marked and easy to modify

## Sections Included

1. ✅ Research Interests
2. ✅ Education (M.Tech IIT Kharagpur, B.Sc BAUST)
3. ✅ Professional Experience (4 positions)
4. ✅ Publications (3 papers with citations)
5. ✅ Teaching Experience (2 TA positions at IIT Kharagpur)
6. ✅ Academic Service (IDAA 2025 reviewer)
7. ✅ Research Projects (4 major projects)
8. ✅ Technical Skills (comprehensive)
9. ✅ Achievements & Awards (6 items)
10. ✅ References (Dr. Abir Das)

## Make Commands

```bash
make pdf      # Compile the CV
make clean    # Remove auxiliary files (.aux, .log, etc.)
make cleanall # Remove all generated files including PDF
make view     # Compile and open PDF (macOS)
make help     # Show available commands
```

## Tips for Faculty Applications

### For Assistant Professor Positions:
- Emphasize research publications and citations
- Highlight teaching experience at IIT Kharagpur
- Showcase ongoing research projects
- Add research statement and teaching philosophy as separate documents

### For Lecturer Positions:
- Focus on teaching experience and ability to mentor students
- Highlight practical software development projects
- Emphasize industry experience alongside academic background

## Output

The compiled PDF will be: `main.pdf`

## Troubleshooting

**Missing packages:**
```bash
sudo tlmgr install moderncv fontawesome5 geometry enumitem hyperref
```

**Compilation errors:**
- Run `pdflatex` twice to resolve references
- Check for special characters in text (use escape: `\&`, `\%`, `\_`)

## Next Steps

Consider creating additional documents for faculty applications:

1. **Research Statement** (2-3 pages)
2. **Teaching Philosophy** (1-2 pages)
3. **Cover Letter** (tailored to each position)
4. **List of References** (separate document with full contact details)

---

**Last Updated:** January 2026

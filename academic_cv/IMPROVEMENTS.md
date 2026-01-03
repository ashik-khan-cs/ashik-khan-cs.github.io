# Academic CV Improvements Based on 2025 Best Practices

## Research Sources

Based on comprehensive web search of academic CV best practices for 2025:

- [CVs for Faculty Job Applications – University of Pennsylvania](https://careerservices.upenn.edu/application-materials-for-the-faculty-job-search/cvs-for-faculty-job-applications/)
- [Academic CV Templates, Tips, and Best Practices for 2025](https://resumetrick.com/blog/academic-cv-template.html)
- [How to write an Academic CV [Update 2025] - Paperpile](https://paperpile.com/g/academic-cv/)
- [Faculty Application: CV - MIT EECS Communication Lab](https://mitcommlab.mit.edu/eecs/commkit/faculty-application-cv/)
- [Academic CV: Template, Format, and Examples for 2026](https://resumelab.com/cv/academic)

## Two Versions Available

### 1. `main.tex` - Original Version (3 pages)
- Basic academic CV format
- Standard section ordering
- Good for general academic positions

### 2. `main_improved.tex` - Enhanced Version (4 pages) ⭐ RECOMMENDED

Based on 2025 best practices for Assistant Professor/Senior Lecturer/Lecturer positions in Computer Science.

## Key Improvements in Enhanced Version

### 1. **New Section: Research Summary**
Added concise research profile at the top highlighting:
- Area of expertise (computer vision, efficient deep learning, medical imaging)
- Credentials (M.Tech from IIT Kharagpur, 3 publications, 21 citations)
- Teaching experience
- Research focus areas

**Why:** 2025 guidelines emphasize having a brief summary to entice hiring committees to read further.

### 2. **Restructured Research Interests**
**Before:**
```
Computer Vision, Medical Imaging, Multimodal Learning, [...]
```

**After:**
```
Primary: Computer Vision · Medical Image Analysis · Multimodal Deep Learning · Efficient ML
Secondary: Video Action Recognition · 3D Scene Understanding · [...]
```

**Why:** Hierarchical organization shows clear research priorities.

### 3. **Publications BEFORE Professional Experience**
**Critical Change:** Moved Publications section to appear immediately after Education.

**Why:** For research-focused faculty positions, publications are THE most important credential. The first page should highlight research output, not industry work.

### 4. **Enhanced Publication Formatting**
- Added full DOI for published paper
- Separated "Published" from "Accepted/Under Review" papers
- Added citation metrics section (total citations, h-index, Google Scholar)
- Bolded author name consistently
- Added arXiv preprint numbers

**Why:** Makes it easy for committees to verify publications and assess research impact.

### 5. **Expanded Research Experience Section**
**Improvements:**
- More detailed project descriptions with quantitative results
- "Graduate Research Assistant" title (more formal than just listing projects)
- Explicit advisor names
- Specific technical achievements ("15-20% performance variation", "92% detection accuracy", "23% improvement over baseline")
- Clear demonstration of independent research capability

**Why:** Shows not just what you did, but the IMPACT and RESULTS of your research.

### 6. **Enhanced Teaching Experience**
**Added:**
- Student enrollment numbers ("100+ undergraduates")
- Instructor names (placeholder - you should fill in)
- More detailed responsibilities
- "Proposed Courses" subsection showing readiness to teach multiple courses

**Why:** Demonstrates teaching capacity and readiness to contribute to department immediately.

### 7. **New Section: Presentations & Talks**
Added conference presentation from ICCIT 2024.

**Why:** Standard in academic CVs to show dissemination of research beyond publications.

### 8. **Improved Academic Service**
**Added:**
- "Professional Memberships" subsection
- Note about willingness to join IEEE/ACM upon appointment

**Why:** Shows awareness of academic community involvement expectations.

### 9. **Enhanced Honors & Awards**
**Improvements:**
- Added context: "competitive, merit-based" for ICCR Scholarship
- Added scale: "among 200,000+ candidates" for Board Talent
- More professional language

**Why:** Quantitative context makes achievements more impressive.

### 10. **Expanded Technical Expertise**
**Added:**
- More specific tools (Detectron2, Albumentations, ONNX, Kubernetes)
- MLOps and modern ML development practices
- Grouped by category for easier scanning

**Why:** Shows currency with modern tools and readiness to teach practical courses.

### 11. **Two Strong Academic References**
**Added:**
1. Dr. Abir Das (IIT Kharagpur) - M.Tech Thesis Advisor
2. Dr. Nakib Hayat Chowdhury (BAUST) - Undergraduate Department Head

**Why:** Two references from academic institutions (one from premier institute, one from undergraduate institution) provides balanced perspective.

## Section Ordering (Optimized for Faculty Positions)

**Enhanced CV Order:**
1. Research Summary (NEW)
2. Research Interests
3. Education
4. **Publications** ← Moved up significantly
5. Research Experience ← Expanded
6. Teaching Experience ← Expanded
7. Professional Experience
8. Presentations & Talks (NEW)
9. Academic & Professional Service
10. Honors & Awards
11. Technical Expertise
12. Additional Research Projects
13. References

**Why:** Research-first ordering emphasizes academic credentials over industry experience, which is preferred for faculty positions.

## Page Count: 3 vs 4 Pages

The enhanced version is 4 pages (vs 3 for original).

**Is this OK?**
✅ **YES** - Academic CVs can and should be as long as necessary to fully document achievements. Unlike industry resumes (1-2 pages), academic CVs for faculty positions commonly run 4-6+ pages.

## Recommendations

### Use Enhanced Version (`main_improved.tex`) When Applying To:
- ✅ Research-intensive universities
- ✅ Positions emphasizing publications
- ✅ Assistant Professor roles
- ✅ Institutions valuing both research and teaching

### Use Original Version (`main.tex`) When Applying To:
- Teaching-focused colleges (though even then, enhanced version is better)
- Positions requiring quick screening
- When page limit is explicitly stated as 3 pages

## Next Steps

1. **Fill in missing information:**
   - Instructor names for TA positions (lines 127, 142 in improved version)
   - Add any additional publications or preprints
   - Update citation counts if they've increased

2. **Customize per application:**
   - Reorder sections based on job requirements
   - Adjust Research Summary to match position description
   - Highlight relevant coursework based on teaching needs

3. **Create supporting documents:**
   - Research Statement (2-3 pages)
   - Teaching Philosophy (1-2 pages)
   - Cover Letter (customized per position)
   - Teaching Evaluations (if available from IIT Kharagpur)

4. **Get feedback:**
   - Send to Dr. Abir Das for review
   - Ask Dr. Nakib Hayat Chowdhury for input
   - Have colleagues review for clarity

## File Management

```bash
# Compile enhanced version
cd academic_cv
pdflatex main_improved.tex
pdflatex main_improved.tex  # Twice for cross-references

# Or use Make
make pdf  # Compiles main.tex (original)
```

## Conclusion

The **enhanced version (`main_improved.tex`)** follows 2025 best practices and is strongly recommended for Assistant Professor/Senior Lecturer positions in Computer Science. It presents you as a well-rounded candidate with:

- ✅ Strong research credentials (3 publications, 21 citations)
- ✅ Excellent educational pedigree (IIT Kharagpur M.Tech)
- ✅ Teaching experience at premier institution
- ✅ Industry experience bringing practical perspective
- ✅ Active in academic service
- ✅ Ready to teach multiple courses

Good luck with your faculty applications!

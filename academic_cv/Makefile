# Makefile for Academic CV

# Default target
all: pdf

# Compile the CV
pdf:
	pdflatex main.tex
	pdflatex main.tex

# Clean auxiliary files
clean:
	rm -f *.aux *.log *.out *.toc *.bbl *.blg *.synctex.gz

# Clean everything including PDF
cleanall: clean
	rm -f *.pdf

# Open the PDF (macOS)
view: pdf
	open main.pdf

# Help
help:
	@echo "Available targets:"
	@echo "  make pdf      - Compile the CV (default)"
	@echo "  make clean    - Remove auxiliary files"
	@echo "  make cleanall - Remove all generated files including PDF"
	@echo "  make view     - Compile and open the PDF"
	@echo "  make help     - Show this help message"

.PHONY: all pdf clean cleanall view help

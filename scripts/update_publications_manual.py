#!/usr/bin/env python3
"""
Manual script to update publications.json with your Google Scholar data.
Run this locally when you want to update citation counts.
"""

import json
from datetime import datetime

# Manually enter your publication data from Google Scholar
# Update this whenever you want to refresh the data
PUBLICATIONS = [
    {
        "number": 1,
        "title": "Comparative Analysis of Resource-Efficient CNN Architectures for Brain Tumor Classification",
        "authors": "Md Ashik Khan, Rafath Bin Zafar Auvee",
        "venue": "2024 27th International Conference on Computer and Information Technology (ICCIT), Cox's Bazar, Bangladesh, pp. 639-644",
        "year": "2024",
        "citations": 18,  # Update this number from Google Scholar
        "abstract": "Accurate brain tumor classification in MRI images is essential for timely diagnosis and effective treatment planning. Despite its lower complexity, our custom CNN architecture achieved 98.67% accuracy on the Br35H dataset and 99.62% on the Brain Tumor MRI Dataset, showing competitive performance against pre-trained ResNet18 and VGG16 models.",
        "scholar_url": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=EKQLSHQAAAAJ&citation_for_view=EKQLSHQAAAAJ:u-x6o8ySG0sC",
        "pub_url": "https://ieeexplore.ieee.org/abstract/document/11021970"
    },
    {
        "number": 2,
        "title": "Fixed-Threshold Evaluation of a Hybrid CNN–ViT for AI-Generated Image Detection Across Photos and Art",
        "authors": "Md Ashik Khan, Arafat Alam Jion",
        "venue": "Accepted at 2025 28th International Conference on Computer and Information Technology (ICCIT), Cox's Bazar, Bangladesh",
        "year": "2025",
        "citations": 0,  # Update when available
        "abstract": "AI image generators create both photorealistic images and stylized art, necessitating robust detectors that maintain performance under common post-processing transformations (JPEG compression, blur, downscaling). Existing methods optimise single metrics without addressing deployment-critical factors such as operating point selection and fixed-threshold robustness. This work addresses misleading robustness estimates by introducing a fixed-threshold evaluation protocol that holds decision thresholds, selected once on clean validation data, fixed across all post-processing transformations. Traditional methods retune thresholds per condition, artificially inflating robustness estimates and masking deployment failures.",
        "scholar_url": "",  # Add when paper appears on Scholar
        "pub_url": ""  # Add when IEEE publishes online
    },
    {
        "number": 3,
        "title": "Fixed-Budget Parameter-Efficient Training with Frozen Encoders Improves Multimodal Chest X-Ray Classification",
        "authors": "Md Ashik Khan, Md Nahid Siddique",
        "venue": "Accepted at 2025 28th International Conference on Computer and Information Technology (ICCIT), Cox's Bazar, Bangladesh",
        "year": "2025",
        "citations": 0,  # Update when available
        "abstract": "Multimodal chest X-Ray analysis often fine-tunes large vision-language models, which is computationally costly. We study parameter-efficient training (PET) strategies, including frozen encoders, BitFit, LoRA, and adapters for multi-label classification on the Indiana University Chest X-Ray dataset (3,851 image-report pairs; 579 test samples). To mitigate data leakage, we redact pathology terms from reports used as text inputs while retaining clinical context. Under a fixed parameter budget (2.37M parameters, 2.51% of total), all PET variants achieve AUROC between 0.892 and 0.908, outperforming full fine-tuning (0.770 AUROC), which uses 94.3M trainable parameters, a 40× reduction.",
        "scholar_url": "",  # Add when paper appears on Scholar
        "pub_url": ""  # Add when IEEE publishes online
    }
]

def main():
    """Update publications.json with manual data."""
    output_file = "../publications.json"

    data = {
        "lastUpdated": datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        "publications": PUBLICATIONS
    }

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"✓ Updated {output_file}")
    print(f"  Timestamp: {data['lastUpdated']}")
    print(f"  Publications: {len(PUBLICATIONS)}")
    print("\nTo deploy: git add publications.json && git commit -m 'Update publications' && git push")

if __name__ == '__main__':
    main()

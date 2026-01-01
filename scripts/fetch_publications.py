#!/usr/bin/env python3
"""
Script to fetch publications from Google Scholar profile and save as JSON.
Uses the scholarly library with error handling and retry logic.
"""

import json
import time
import logging
from pathlib import Path
from typing import List, Dict, Any

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

def install_if_missing():
    """Install required packages if not present."""
    import subprocess
    import sys
    
    packages = ['scholarly']
    for package in packages:
        try:
            __import__(package)
        except ImportError:
            logger.info(f"Installing {package}...")
            subprocess.check_call([sys.executable, '-m', 'pip', 'install', package])

def fetch_publications(scholar_id: str, max_retries: int = 3) -> List[Dict[str, Any]]:
    """
    Fetch publications from Google Scholar profile.

    Args:
        scholar_id: Google Scholar user ID (e.g., 'EKQLSHQAAAAJ')
        max_retries: Number of retry attempts for network errors

    Returns:
        List of publication dictionaries
    """
    try:
        from scholarly import scholarly, ProxyGenerator
    except ImportError:
        logger.error("scholarly package not found. Installing...")
        install_if_missing()
        from scholarly import scholarly, ProxyGenerator

    # Set up proxy to avoid 403 errors
    try:
        pg = ProxyGenerator()
        success = pg.FreeProxies()
        if success:
            scholarly.use_proxy(pg)
            logger.info("Using free proxy to avoid rate limiting")
    except Exception as e:
        logger.warning(f"Could not set up proxy: {e}. Proceeding without proxy...")

    publications = []

    for attempt in range(max_retries):
        try:
            logger.info(f"Fetching publications (attempt {attempt + 1}/{max_retries})...")

            # Fetch author profile
            author = scholarly.search_author_id(scholar_id)
            scholarly.fill(author, sections=['publications', 'basic'])
            
            logger.info(f"Found {len(author['publications'])} publications")
            
            # Process each publication
            for idx, pub_id in enumerate(author['publications'], 1):
                try:
                    # Fetch full publication details
                    pub = scholarly.fill(pub_id)
                    
                    publication = {
                        'number': idx,
                        'title': pub.get('bib', {}).get('title', 'Unknown Title'),
                        'authors': pub.get('bib', {}).get('author', ''),
                        'venue': pub.get('bib', {}).get('venue', ''),
                        'year': str(pub.get('bib', {}).get('year', '')),
                        'citations': pub.get('num_citations', 0),
                        'abstract': pub.get('bib', {}).get('abstract', ''),
                        'scholar_url': pub.get('url_scholarbib', ''),
                        'pub_url': pub.get('pub_url', ''),
                    }
                    publications.append(publication)
                    
                    # Add delay to avoid rate limiting
                    time.sleep(1)
                    
                except Exception as e:
                    logger.warning(f"Error fetching publication {idx}: {str(e)}")
                    continue
            
            if publications:
                logger.info(f"Successfully fetched {len(publications)} publications")
                return publications
                
        except Exception as e:
            logger.warning(f"Attempt {attempt + 1} failed: {str(e)}")
            if attempt < max_retries - 1:
                wait_time = (attempt + 1) * 5
                logger.info(f"Waiting {wait_time} seconds before retry...")
                time.sleep(wait_time)
            continue
    
    logger.error("Failed to fetch publications after all retry attempts")
    return []

def save_publications(publications: List[Dict[str, Any]], output_file: str = 'publications.json'):
    """Save publications to JSON file."""
    try:
        output_path = Path(__file__).parent.parent / output_file
        
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump({
                'lastUpdated': time.strftime('%Y-%m-%d %H:%M:%S'),
                'publications': publications
            }, f, indent=2, ensure_ascii=False)
        
        logger.info(f"Publications saved to {output_path}")
        return True
    except Exception as e:
        logger.error(f"Error saving publications: {str(e)}")
        return False

def main():
    """Main function."""
    scholar_id = 'EKQLSHQAAAAJ'  # Replace with your actual Google Scholar ID
    
    logger.info(f"Starting publication fetch for scholar ID: {scholar_id}")
    
    publications = fetch_publications(scholar_id)
    
    if publications:
        success = save_publications(publications)
        if success:
            logger.info("✓ Update completed successfully")
            return 0
    
    logger.error("✗ Failed to fetch or save publications")
    return 1

if __name__ == '__main__':
    exit(main())

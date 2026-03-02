#!/usr/bin/env python3
import sys

file_path = r"c:\Users\Jankr\november-echoes\src\data\articles.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace smart quotes and dashes
replacements = {
    '\u201c': '"',  # Left double quote
    '\u201d': '"',  # Right double quote
    '\u2018': "'",  # Left single quote
    '\u2019': "'",  # Right single quote
    '\u201e': '"',  # Double low-9 quote
    '\u2013': '-',  # En dash
    '\u2014': '-',  # Em dash
    '\u2026': '...',  # Ellipsis
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("File fixed successfully")

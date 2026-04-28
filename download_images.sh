#!/bin/bash
# Download free swimming-related images from Unsplash

IMAGE_DIR="assets/images/photos"
mkdir -p "$IMAGE_DIR"

# List of image IDs and their descriptions
declare -A images=(
    ["img1"]="photo-1530549387789-4c1017266635"  # Safe swimming
    ["img2"]="photo-1519315901363-5c7c9f8b1e3d"  # Children learning
    ["img3"]="photo-1540206395-68808572332f"     # Water safety
    ["img4"]="photo-1511795409834-69b13a8f1a3f"  # Community impact
    ["img5"]="photo-1556761175-b413da4baf72"     # Partnership
    ["img6"]="photo-1501504905252-473c47e087f8"  # Education materials
    ["img7"]="photo-1551288049-bebda4e38f71"     # Timeline chart
    ["img8"]="photo-1554224154-26032ffc0d7a"     # Budget pie chart
)

# Download each image
for img_id in "${!images[@]}"; do
    unsplash_id="${images[$img_id]}"
    url="https://images.unsplash.com/photo-$unsplash_id?w=800&h=600&fit=crop&auto=format"
    output="$IMAGE_DIR/$img_id.jpg"
    
    echo "Downloading $img_id ($unsplash_id)..."
    curl -s -L "$url" -o "$output"
    
    if [ $? -eq 0 ]; then
        echo "  Saved to $output"
    else
        echo "  Failed to download $img_id"
    fi
done

echo "Done!"
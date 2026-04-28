#!/bin/bash
# Download alternative images from Unsplash

IMAGE_DIR="assets/images/photos"

# Test and download alternative images
echo "Downloading alternative images..."

# img2: Children learning (alternative)
curl -s -L "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&auto=format" -o "$IMAGE_DIR/img2.jpg"
if [ -s "$IMAGE_DIR/img2.jpg" ]; then
    echo "Downloaded img2.jpg (Children learning)"
else
    echo "Failed to download img2.jpg"
fi

# img4: Community impact (alternative) - community gathering
curl -s -L "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop&auto=format" -o "$IMAGE_DIR/img4.jpg"
if [ -s "$IMAGE_DIR/img4.jpg" ]; then
    echo "Downloaded img4.jpg (Community impact)"
else
    echo "Failed to download img4.jpg"
fi

# img8: Budget chart (alternative) - financial chart
curl -s -L "https://images.unsplash.com/photo-1554224155-8aa4b5c3d3f6?w=800&h=600&fit=crop&auto=format" -o "$IMAGE_DIR/img8.jpg"
if [ -s "$IMAGE_DIR/img8.jpg" ]; then
    echo "Downloaded img8.jpg (Budget chart)"
else
    echo "Failed to download img8.jpg"
fi

# Also replace img7 with a better timeline chart if needed
curl -s -L "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format" -o "$IMAGE_DIR/img7.jpg"
if [ -s "$IMAGE_DIR/img7.jpg" ]; then
    echo "Downloaded img7.jpg (Timeline chart)"
else
    echo "Failed to download img7.jpg"
fi

echo "Done!"
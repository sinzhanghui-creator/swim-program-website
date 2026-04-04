#!/bin/bash
# Download free swimming-related images from Unsplash

IMAGE_DIR="assets/images/photos"
mkdir -p "$IMAGE_DIR"

# Download each image
curl -s -L "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=600&fit=crop&auto=format" -o "$IMAGE_DIR/img1.jpg"
echo "Downloaded img1.jpg"

curl -s -L "https://images.unsplash.com/photo-1519315901363-5c7c9f8b1e3d?w=800&h=600&fit=crop&auto=format" -o "$IMAGE_DIR/img2.jpg"
echo "Downloaded img2.jpg"

curl -s -L "https://images.unsplash.com/photo-1540206395-68808572332f?w=800&h=600&fit=crop&auto=format" -o "$IMAGE_DIR/img3.jpg"
echo "Downloaded img3.jpg"

curl -s -L "https://images.unsplash.com/photo-1511795409834-69b13a8f1a3f?w=800&h=600&fit=crop&auto=format" -o "$IMAGE_DIR/img4.jpg"
echo "Downloaded img4.jpg"

curl -s -L "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&auto=format" -o "$IMAGE_DIR/img5.jpg"
echo "Downloaded img5.jpg"

curl -s -L "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop&auto=format" -o "$IMAGE_DIR/img6.jpg"
echo "Downloaded img6.jpg"

curl -s -L "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format" -o "$IMAGE_DIR/img7.jpg"
echo "Downloaded img7.jpg"

curl -s -L "https://images.unsplash.com/photo-1554224154-26032ffc0d7a?w=800&h=600&fit=crop&auto=format" -o "$IMAGE_DIR/img8.jpg"
echo "Downloaded img8.jpg"

echo "All images downloaded to $IMAGE_DIR/"
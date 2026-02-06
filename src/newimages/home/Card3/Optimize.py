from PIL import Image
import os

# Maximum width
MAX_WIDTH = 1920

# Get all files in the current directory
files = os.listdir('.')

for file in files:
    if file.lower().endswith(('.png', '.jpg', '.jpeg')):
        # Open image
        img = Image.open(file)
        
        # Resize if width is greater than MAX_WIDTH
        if img.width > MAX_WIDTH:
            # Calculate new height to maintain aspect ratio
            ratio = MAX_WIDTH / img.width
            new_height = int(img.height * ratio)
            img = img.resize((MAX_WIDTH, new_height), Image.ANTIALIAS)
        
        # Convert to JPEG if not already
        if not file.lower().endswith('.jpg'):
            new_file_name = os.path.splitext(file)[0] + '.jpg'
        else:
            new_file_name = file
        
        # Save image in JPEG format
        rgb_img = img.convert('RGB')  # Ensure it's RGB for JPEG
        rgb_img.save(new_file_name, 'JPEG')

        print(f"Processed: {file} -> {new_file_name}")

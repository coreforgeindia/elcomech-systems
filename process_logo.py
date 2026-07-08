from PIL import Image
import os

def process_image(input_path, output_path, is_favicon=False):
    if not os.path.exists(input_path):
        return
    img = Image.open(input_path).convert("RGBA")
    
    # 1. Crop to bounding box
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    # 2. Change red to blue
    data = img.getdata()
    new_data = []
    for item in data:
        r, g, b, a = item
        # If it's a red-ish pixel (R is dominant)
        if r > 100 and r > g + 40 and r > b + 40:
            # Swap Red and Blue
            new_data.append((b, g, r, a))
        else:
            new_data.append(item)
    img.putdata(new_data)
    
    # 3. Save
    if is_favicon:
        # Resize to square for favicon, add padding if needed
        size = max(img.width, img.height)
        new_img = Image.new("RGBA", (size, size), (255, 255, 255, 0))
        new_img.paste(img, ((size - img.width) // 2, (size - img.height) // 2))
        new_img = new_img.resize((32, 32), Image.Resampling.LANCZOS)
        new_img.save(output_path, format="ICO")
    else:
        img.save(output_path, "PNG")

process_image('assets/logo/Elcomech Systems (1).png', 'public/logo-1.png')
process_image('assets/logo/Elcomech Systems (2).png', 'public/logo-2.png')
process_image('assets/logo/Elcomech Systems (1).png', 'public/favicon.ico', is_favicon=True)

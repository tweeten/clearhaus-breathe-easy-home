from PIL import Image
import math
import sys
import os

def hsl_to_rgb(h, s, l):
    """Convert HSL to RGB values"""
    h = h / 360.0
    s = s / 100.0
    l = l / 100.0
    
    if s == 0:
        r = g = b = l
    else:
        def hue_to_rgb(p, q, t):
            if t < 0:
                t += 1
            if t > 1:
                t -= 1
            if t < 1/6:
                return p + (q - p) * 6 * t
            if t < 1/2:
                return q
            if t < 2/3:
                return p + (q - p) * (2/3 - t) * 6
            return p
        
        if l < 0.5:
            q = l * (1 + s)
        else:
            q = l + s - l * s
        p = 2 * l - q
        
        r = hue_to_rgb(p, q, h + 1/3)
        g = hue_to_rgb(p, q, h)
        b = hue_to_rgb(p, q, h - 1/3)
    
    return (int(r * 255), int(g * 255), int(b * 255))

# Colors for the blue version
# Blue background (similar to footer dark background)
blue_background = (17, 24, 39)  # gray-900 equivalent
# White text
white_text = (255, 255, 255)

print(f"🎨 Blue background color (RGB): {blue_background}")
print(f"🎨 White text color (RGB): {white_text}")

def process_logo_blue(input_path, output_path, scale_factor=2.0):
    """Process the logo: replace white with blue background and black with white text"""
    try:
        # Check if input file exists
        if not os.path.exists(input_path):
            print(f"❌ Input file not found: {input_path}")
            return False
            
        # Load the image
        img = Image.open(input_path).convert('RGB')
        print(f"📏 Original image size: {img.size}")
        
        # Replace colors
        newData = []
        white_pixels_replaced = 0
        black_pixels_replaced = 0
        
        for item in img.getdata():
            # Detect white pixels (background) and replace with blue
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append(blue_background)
                white_pixels_replaced += 1
            # Detect black pixels (text/icon) and replace with white
            elif item[0] < 50 and item[1] < 50 and item[2] < 50:
                newData.append(white_text)
                black_pixels_replaced += 1
            else:
                newData.append(item)
        
        img.putdata(newData)
        print(f"🔄 Replaced {white_pixels_replaced} white pixels with blue background")
        print(f"🔄 Replaced {black_pixels_replaced} black pixels with white text")
        
        # Resize the image
        new_width = int(img.width * scale_factor)
        new_height = int(img.height * scale_factor)
        img_resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        print(f"📏 Resized image size: {img_resized.size}")
        
        # Save the processed image
        img_resized.save(output_path, quality=95)
        print(f"💾 Processed logo saved as: {output_path}")
        
        return True
        
    except Exception as e:
        print(f"❌ Error processing logo: {e}")
        return False

if __name__ == "__main__":
    print("🏠 ClearHaus Logo Processor - Blue Version")
    print("=" * 45)
    
    # Check command line arguments
    if len(sys.argv) > 1:
        input_file = sys.argv[1]
    else:
        input_file = input("📁 Enter the path to your logo file: ").strip()
    
    if len(sys.argv) > 2:
        scale_factor = float(sys.argv[2])
    else:
        scale_input = input("📏 Enter scale factor (default 2.0 for 2x size): ").strip()
        scale_factor = float(scale_input) if scale_input else 2.0
    
    output_file = input_file.rsplit('.', 1)[0] + "_blue." + input_file.rsplit('.', 1)[1]
    
    print(f"📥 Input file: {input_file}")
    print(f"📤 Output file: {output_file}")
    print(f"📏 Scale factor: {scale_factor}x")
    print()
    
    success = process_logo_blue(input_file, output_file, scale_factor)
    
    if success:
        print("\n✅ Logo processing completed successfully!")
        print(f"📁 Your blue logo is ready: {output_file}")
        print("\n💡 Features:")
        print("   - Blue background matching your footer")
        print("   - White text and icon for perfect contrast")
        print("   - Resized for better readability")
        print("   - Perfect for dark backgrounds")
    else:
        print("\n❌ Logo processing failed.")
        print("\n💡 Troubleshooting:")
        print("   - Make sure the logo file exists and is in the correct path")
        print("   - Supported formats: PNG, JPG, JPEG")
        print("   - Try running: python3 process_logo_blue.py 'path/to/your/logo.png' 2.0") 
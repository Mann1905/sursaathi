import os

def print_folder_structure(root_folder, indent=""):
    for root, dirs, files in os.walk(root_folder):
        level = root.replace(root_folder, "").count(os.sep)
        indent = " " * 4 * level
        print(f"{indent}{os.path.basename(root)}/")
        sub_indent = " " * 4 * (level + 1)
        for f in files:
            print(f"{sub_indent}{f}")

# Example usage:
print_folder_structure("build")  # replace "public" with your folder path

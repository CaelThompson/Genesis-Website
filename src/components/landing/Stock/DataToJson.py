
import json

def convert_line_to_json(line):
    # Split the line by tab
    parts = line.split('\t')
    
    # Create a dictionary with the required format
    data_dict = {
        "Date": parts[0],
        "Price": float(parts[1]),
        "High": float(parts[2]),
        "Low": float(parts[3]),
        "Open": float(parts[4]),
        "Volume": int(parts[5])
    }
    
    return data_dict

def convert_file_to_json(file_path, output_file):
    # Read the file content
    with open(file_path, 'r') as file:
        lines = file.readlines()
    
    # Convert each line to JSON format and create a new data_dict for each line
    json_data = []
    for line in lines:
        data_dict = convert_line_to_json(line)
        json_data.append(data_dict)
    
    # Write the JSON data to an output file
    with open(output_file, 'w') as json_file:
        json.dump(json_data, json_file, indent=2)

# Example usage
file_path = r"C:\Users\user\OneDrive - Siemens AG\Documents\DataDocument.txt"  # Replace with your file path  # Replace with your file path
output_file = r"C:\Users\user\OneDrive - Siemens AG\Documents\Output.json"  # Replace with your desired output file name
convert_file_to_json(file_path, output_file)

print(f"JSON data has been written to {output_file}")


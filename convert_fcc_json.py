import os
import json

class Convert_FCC_JSON_to_JS():
    def __init__(self, input_file_dir, output_file_dir):
        self.input_file_dir = input_file_dir
        self.output_file_dir = output_file_dir

    def convert(self):
        for file in os.listdir(self.input_file_dir):
            filename = os.fsdecode(file)
            if filename.endswith(".json"):
                # print(filename)
                # print(file)
                with open(f"{self.input_file_dir}/{filename}") as json_file:
                    data = json.load(json_file)
                string_literal = data["index.js"]
                print(string_literal)
                with open(f"{self.output_file_dir}/{filename.replace('.json','.js')}", "w") as js_file:
                    print(string_literal, file=js_file)

def main():
    converter = Convert_FCC_JSON_to_JS(
        "/Users/andrewrietz/Desktop/freecodecamp_datastructures_algorithms/basic_algorithms/downloaded_solutions_json",
        "/Users/andrewrietz/Desktop/freecodecamp_datastructures_algorithms/basic_algorithms/converted_solutions_js",
        )
    converter.convert()

if __name__ == "__main__":
    main()

import zipfile
import os
 
def unzip(source_file, dest_path):
    with zipfile.ZipFile(source_file, 'r') as zf:
        zf.extractall(path=dest_path)
        zf.close()
 
def zip(src_path, dest_file):
    with zipfile.ZipFile(dest_file, 'w') as zf:
        rootpath = src_path
        for (path, dir, files) in os.walk(src_path):
            for file in files:
                fullpath = os.path.join(path, file)
                relpath = os.path.relpath(fullpath, rootpath);
                zf.write(fullpath, relpath, zipfile.ZIP_DEFLATED)
        zf.close()

bak_path = "/Users/cpark/_backup"

file_to_unzip = bak_path + "/comp_test.zip";
dest_to_unzip = bak_path + "/unziped";
unzip( file_to_unzip, dest_to_unzip )
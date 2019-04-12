import requests

url = "https://www.xiaohongshu.com/goods/58c1f955c9d7590e073b621d";

req = requests.get( url );

html = req.text;

print( html );
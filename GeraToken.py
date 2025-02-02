import requests
from urllib.parse import urlencode

CLIENT_ID = "8a068eccf6c04fd48c02835dd2f00feb"
REDIRECT_URI = "http://localhost:8888/callback"

auth_url = "https://accounts.spotify.com/authorize?" + urlencode({
    "client_id": CLIENT_ID,
    "response_type": "code",
    "redirect_uri": REDIRECT_URI,
    "scope": "user-top-read user-read-recently-played" 
})

print("Acesse este link para autorizar:", auth_url)

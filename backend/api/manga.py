from flask import Blueprint
import json
import unirest

manga_api = Blueprint('manga', __name__)

@manga_api.route('/api/get-manga-list')
def get_manga_list():
	response = response = unirest.get("https://doodle-manga-scraper.p.mashape.com/mangafox.me",
									  headers={
									    "X-Mashape-Key": "<required>",
									    "Accept": "text/plain"
									  }
									)
	return json.dumps(response.body)


@manga_api.route('/api/get-site')
def get_site():
	response = unirest.get("https://doodle-manga-scraper.p.mashape.com/",headers={"X-Mashape-Key": "raFjk0Yuu9mshz6KxNgPAPNXnCvHp1hHzaqjsnCEea7V86YrGh","Accept": "text/plain"})
	return json.dumps(response.body)


@manga_api.route('/api/get-chapter/<manga>/<chapter>')
def get_chapter(manga, chapter):
	response = response = unirest.get("https://doodle-manga-scraper.p.mashape.com/mangafox.me/manga/" + manga + "/"  + chapter,
									  headers={
									    "X-Mashape-Key": "<required>",
									    "Accept": "text/plain"
									  }
									)
	return json.dumps(response.body)


@manga_api.route('/api/get-manga/<manga>')
def get_manga(manga):
	response = response = unirest.get("https://doodle-manga-scraper.p.mashape.com/mangafox.me/manga/" + manga + "/",
									  headers={
									    "X-Mashape-Key": "<required>",
									    "Accept": "text/plain"
									  }
									)
	return json.dumps(response.body)
from flask import Flask
from api import manga_api

app = Flask(__name__)
app.register_blueprint(manga_api)

if __name__ == '__main__':
    app.run()
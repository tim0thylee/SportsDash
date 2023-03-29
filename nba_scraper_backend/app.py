from __future__ import unicode_literals
import json
import requests
from flask_cors import CORS
from flask import Flask, request, Response, render_template, session, redirect, url_for

app = Flask(__name__)
CORS(app)

@app.route('/player_injuries')
def injury_scrape():
    params = {
        'spider_name': 'injury',
        'start_requests': True,
     
    }
    response = requests.get('http://localhost:9080/crawl.json', params)
    data = json.loads(response.text)
    return data

@app.route('/team_assists')
def team_assists_scrape():
    params = {
        'spider_name':'team_assists',
        'start_requests': True,
    }

    response = requests.get('http://localhost:9080/crawl.json', params)
    data = json.loads(response.text)
    return data

@app.route('/team_blocks')
def team_blocks_scrape():
    params = {
        'spider_name':'team_blocks',
        'start_requests': True,
    }

    response = requests.get('http://localhost:9080/crawl.json', params)
    data = json.loads(response.text)
    return data

@app.route('/team_points')
def team_points_scrape():
    params = {
        'spider_name':'team_points',
        'start_requests': True,
    }

    response = requests.get('http://localhost:9080/crawl.json', params)
    data = json.loads(response.text)
    return data

@app.route('/team_rebounds')
def team_rebounds_scrape():
    params = {
        'spider_name':'team_rebounds',
        'start_requests': True,
    }

    response = requests.get('http://localhost:9080/crawl.json', params)
    data = json.loads(response.text)
    return data

@app.route('/team_steals')
def team_steals_scrape():
    params = {
        'spider_name':'team_steals',
        'start_requests': True,
    }

    response = requests.get('http://localhost:9080/crawl.json', params)
    data = json.loads(response.text)
    return data

@app.route('/team_threes')
def team_threes_scrape():
    params = {
        'spider_name':'team_threes',
        'start_requests': True,
    }

    response = requests.get('http://localhost:9080/crawl.json', params)
    data = json.loads(response.text)
    return data

@app.route('/team_turnovers')
def team_turnovers_scrape():
    params = {
        'spider_name':'team_turnovers',
        'start_requests': True,
    }

    response = requests.get('http://localhost:9080/crawl.json', params)
    data = json.loads(response.text)
    return data
       
if __name__ == '__main__':
    app.run(debug=True, port=1234)
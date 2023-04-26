from pathlib import Path

import scrapy


class InjurySpider(scrapy.Spider):
    name = "injury"

    def start_requests(self):
        urls = [
            "https://www.espn.com/nba/injuries"
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        for team in response.xpath("//div[@class='ResponsiveTable Table__league-injuries']"):
            players = []
            for player in team.xpath("./div[@class='flex']/div/div[@class='Table__Scroller']/table/tbody/tr"):
                players.append({
                    'player_name': player.xpath("./td[@class='col-name Table__TD']/a/text()").get(),
                    'player_pos': player.xpath("./td[@class='col-pos Table__TD']/text()").get(),
                    'injury_date': player.xpath("./td[@class='col-date Table__TD']/text()").get(),
                    'injury_status': player.xpath("./td[@class='col-stat Table__TD']/span/text()").get(),
                    'injury_desc': player.xpath("./td[@class='col-desc Table__TD']/text()").get()
                })
                
            yield {
                'team_name': team.xpath("./div[@class='Table__Title']/div/span/text()").get(),
                'players': players
            }
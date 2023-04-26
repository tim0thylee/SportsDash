from pathlib import Path

import scrapy


class InjurySpider(scrapy.Spider):
    name = "opp_turnovers"

    def start_requests(self):
        urls = [
            "https://www.teamrankings.com/nba/stat/opponent-turnovers-per-game"
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        for team in response.xpath("//tbody/tr"):
            yield {
                'stat_type': 'Turnovers',
                'rank': team.xpath("./td/text()")[0].get(),
                'team_name': team.xpath("./td/a/text()").get(),
                'total_avg': team.xpath("./td/text()")[1].get(),
                'last_three_avg': team.xpath("./td/text()")[2].get(),
                'last_game': team.xpath("./td/text()")[3].get(),
                'home_avg': team.xpath("./td/text()")[4].get(),
                'away_avg': team.xpath("./td/text()")[5].get()
            }
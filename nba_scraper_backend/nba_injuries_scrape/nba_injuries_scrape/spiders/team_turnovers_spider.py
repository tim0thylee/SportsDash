from pathlib import Path

import scrapy


class InjurySpider(scrapy.Spider):
    name = "team_turnovers"

    def start_requests(self):
        urls = [
            "https://www.teamrankings.com/nba/stat/turnovers-per-game"
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        for team in response.xpath("//tbody/tr"):
            yield {
                'rank': team.xpath("./td/text()")[0].get(),
                'team_name': team.xpath("./td/a/text()").get(),
                'total_tos': team.xpath("./td/text()")[1].get(),
                'last_three_tos': team.xpath("./td/text()")[2].get(),
                'last_tos': team.xpath("./td/text()")[3].get(),
                'home_tos': team.xpath("./td/text()")[4].get(),
                'away_tos': team.xpath("./td/text()")[5].get()
            }
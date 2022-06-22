
import json

import PIL

from  objects import Context


import tornado.gen
import tornado.web
from helpers import console
from handlers.WebRegister import WebRegister
from helpers.web import requestsManager

@WebRegister(r"/agency/(.*)") # http://4.tcp.eu.ngrok.io:10360/status
class Handler(requestsManager.asyncRequestHandler):
    @tornado.web.asynchronous
    @tornado.gen.engine


    def asyncGet(self, agencyID):
        data = Context.mysql.fetch("SELECT name, type, description, adresse FROM agencies WHERE id = %s", agencyID)
        if data is None: data = {}
        self.set_header("Content-type", "Application/JSON")
        self.write(json.dumps(data, sort_keys=True, indent=4))
        

    def asyncPost(self):
        return self.send_error(405)

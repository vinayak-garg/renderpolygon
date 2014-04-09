import os
import urllib
import hashlib
import jinja2
import webapp2

JINJA_ENVIRONMENT = jinja2.Environment(
    loader = jinja2.FileSystemLoader(os.path.dirname(__file__)+'/templates'),
    extensions = ['jinja2.ext.autoescape'],
    autoescape = True
)

class MainPage(webapp2.RequestHandler):

    def get(self):
        template = JINJA_ENVIRONMENT.get_template('header.html')
        self.response.write(template.render())
        template = JINJA_ENVIRONMENT.get_template('body.html')
        self.response.write(template.render())
        template = JINJA_ENVIRONMENT.get_template('footer.html')
        self.response.write(template.render())

application = webapp2.WSGIApplication([
    ('/', MainPage),
], debug=True)

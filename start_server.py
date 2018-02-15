import os
import server
from config import host, port
from werkzeug.serving import run_simple
import logging

logging.basicConfig(filename='log.txt', level=logging.WARNING)
logging.info("Host: %s"%(host))
logging.info("Port: %s"%(port))
logging.info("Server application: %s"%(server.application))
logging.info("Path info: %s"%(os.path.join(os.path.dirname(__file__), 'public')))
run_simple(host, port, server.application, use_reloader=True, static_files={'/':os.path.join(os.path.dirname(__file__), 'public')})

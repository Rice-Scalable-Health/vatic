signature   = "" # AWS secret access key
accesskey   = "" # AWS access key ID
sandbox     = False # if true, put on workersandbox.mturk.com
host        = "localhost" 
port        = 8080
localhost   = "{0}:{1}".format(host, port) # your local host
database    = "mysql://root:FLASH123@localhost/vatic" # server://user:pass@localhost/dbname
geolocation = "" # api key for ipinfodb.com
maxobjects = 25;

# probably no need to mess below this line

import multiprocessing
processes = multiprocessing.cpu_count()

import os.path
import sys
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

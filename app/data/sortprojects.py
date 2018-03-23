#!/usr/bin/env python
# encoding: utf-8
# Author: Pablo Iranzo Gómez (Pablo.Iranzo@redhat.com)
# Description: Sorts projects.json

import json


# Define function to sort on project name
def getKey(item):
    return item['projectName']


data = json.loads(open('projects.json', 'r').read())
newdata = sorted(data, key=getKey)

# Output filename
filename = 'projects.json'

with open(filename, 'w') as fd:
    json.dump(newdata, fd, indent=4)

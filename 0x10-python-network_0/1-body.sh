#!/bin/bash
# This script takes in a URL, sends a GET request to the URL using curl, and displays the body of the response (if the status code is 200)
curl -s $1 | awk 'BEGIN { RS="\r\n\r\n" } { if (NR == 1) { split($0, status, " "); if (status[2] == 200) { print $0 } } else { print $0 } }'


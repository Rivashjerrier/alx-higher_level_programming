#!/usr/bin/python3
"""Python script that lists the 10 most recent commits
"""
import requests
import sys


if __name__ == '__main__':
    repository_name = sys.argv[1]
    owner_name = sys.argv[2]
    url = f"https://api.github.com/repos/{owner}/{repo}/commits"
    res = requests.get(url)
    commits = res.json()[:10]

    for commit in commits:
        sha = commit['sha']
        author = commit['commit']['author']['name']
        print(f"{sha}: {author}")

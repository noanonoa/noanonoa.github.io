---
layout: page
title: About
---

# About
I taught myself to code through many nights and weekends. The time I spent
learning these new skill sets, I realized that coding was my new found passion.
Being a capable and nimble learner, software engineering quickly became my new
found path. I am currently working at **Ramsey Solutions** based in Nashville,
TN.

## Education
<a href="https://atsqa.org/certified-testers/profile/9e0d69cb0ed149c3a294ef2ffefcc388" target="_blank">ISTQB certified</a>,
<a href="https://drive.google.com/file/d/1NooKbxsow6HY9DZUO2gaa10dbWK8wC33/view" target="_blank">General Assembly</a>

## Passion
Solving, Making, Teaching

## Talent
Instruction, Execution, Persuasion

## Mission
Serve, Assist, Protect

## Languages
- English, Korean, Spanish, Portuguese
- JavaScript, Ruby, Vim

## Projects
{% for project in site.projects %}
<a href="{{ project.url }}">{{ project.title }}</a> {% if project.description %} {{ project.description }} {% endif %}
{% endfor %}

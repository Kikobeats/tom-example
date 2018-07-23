#!/bin/bash


tom --command=notification.email --templateId=welcome --to=leo@hyperping.io --username=Leo
tom --command=notification.email --templateId=reset --to=leo@hyperping.io --username=Leo
tom --command=notification.email --templateId=site_up --to=leo@hyperping.io --username=Leo --domain=api.microlink.io
tom --command=notification.email --templateId=site_down --to=leo@hyperping.io --username=Leo --domain=api.microlink.io
tom --command=notification.email --templateId=summary --to=leo@hyperping.io --username=Leo

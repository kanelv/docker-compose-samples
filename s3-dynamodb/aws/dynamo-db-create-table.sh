#!/usr/bin/env bash
awslocal dynamodb create-table \
   --table-name MusicTable \
    --attribute-definitions \
    	AttributeName=author,AttributeType=S \
    	AttributeName=song,AttributeType=S \
    --key-schema \
    	AttributeName=author,KeyType=HASH \
    	AttributeName=song,KeyType=RANGE \
    --provisioned-throughput \
    	ReadCapacityUnits=5,WriteCapacityUnits=5

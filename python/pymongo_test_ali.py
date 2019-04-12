import pymongo
from pymongo import MongoClient
from bson.objectid import ObjectId

#client = MongoClient( 'mongodb://root:iB0z8OjRbJzbfXPjppUPKD2sJsAoqF@dds-bp150fe79aaec1c41.mongodb.rds.aliyuncs.com:3717/admin?replicaSet=mgset-4349073' )
client = MongoClient( 'mongodb://root:iB0z8OjRbJzbfXPjppUPKD2sJsAoqF@dds-bp150fe79aaec1c41.mongodb.rds.aliyuncs.com:3717,dds-bp150fe79aaec1c42.mongodb.rds.aliyuncs.com:3717/admin?replicaSet=mgset-4349073' )

db = client[ 'test' ]

print( db.collection_names() );

col = db[ 'goods_list' ]

for doc in col.find({ '_id' : ObjectId("597d573ccb85121f8fa2f888") }):
	print( doc )
import pymongo
from pymongo import MongoClient
from bson.objectid import ObjectId

client = MongoClient('mongodb://Ttw:thdtjsdncjswoQWEASDZXC@localhost:55320/')

db = client[ 'db_test' ]

print( db.collection_names() );

col = db[ 'col_test' ]

for doc in col.find({'_id':ObjectId("597d573ccb85121f8fa2f88a")}):
	print( doc )
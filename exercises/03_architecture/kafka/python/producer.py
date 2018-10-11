
from kafka import KafkaProducer
producer = KafkaProducer(bootstrap_servers='localhost:1234')

from kafka.client import KafkaClient
from kafka.producer import SimpleProducer
from time import sleep
from datetime import datetime

kafka = KafkaClient("localhost:9092")

producer = SimpleProducer(kafka)

while 1:
	# "kafkaesque" is the name of our topic
  producer.send_messages("kafkaesque", "Metamorphosis! " + str(datetime.now().time()) )
  sleep(1)
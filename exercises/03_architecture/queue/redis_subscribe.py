import redis
import threading

def callback():
  sub = redis.client.StrictRedis().pubsub()
  sub.suscribe('logs')
  while True:
    for m in sub.listen():
      print(m)

t = threading.Thread(target=callback)
t.setDaemon(True)
t.start()

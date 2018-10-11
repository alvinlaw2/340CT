
import redis

REDIS = redis.Redis()
REDIS.publish('logs', "page request")

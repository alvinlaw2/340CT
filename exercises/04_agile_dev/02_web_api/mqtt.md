
# MQTT

MQTT is a lightweight pub/sub protocol, especially suited for low processor/bandwidth units like sensors and built-in system, but also suited for fast communication within applications. As such it is the perfect solution to handle communication between the wireless sensors and the RESTful API that communicates with the front-end.

you will need to build an MQTT message broker. The wireless sensors can then publish messages to it and the RESTful API can subscribe to it so it receives the data. Take a look at the block diagram below to see how this works.
```
   ┌─────────┐          ┌─────────┐           ┌─────────┐           ┌────────────┐
   │ ESP8266 ├─────────→│  MQTT   ├──────────→│ RESTful │←─────────→│ SMARTPHONE │
   │         │ publish  │ BROKER  │ subscribe │   API   │ req/res   │    APP     │
   └─────────┘          └─────────┘           └─────────┘           └────────────┘
```
It is straightforward to set up a **message broker** using the [Heroku](https://www.heroku.com) cloud platform, a link to detailed instructions being included in the reference section at the end of this document.

## Ports

The following MQTT standard ports should not get blocked by your firewall:

- 1883: This is the default MQTT port. 1883 is defined at IANA as MQTT over TCP. 
- 8883: This is the default MQTT port for MQTT over TLS. It’s registered at IANA for Secure MQTT.

## References

[Setting up CloudMQTT on the Heroku platform](https://devcenter.heroku.com/articles/cloudmqtt)

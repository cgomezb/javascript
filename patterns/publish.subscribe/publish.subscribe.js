const pubsub = {};

(function(myObject) {
  // Storage for topics
  const topics = {};

  // Topic identifier
  let subUid = -1;

  // Publish
  myObject.publish = function(topic, args) {
    if (!topics[topic]) {
      return false;
    }

    let subscribers = topics[topic];
    let len = subscribers ? subscribers.length : 0;

    while (len--) {
      subscribers[len].func(topic, args);
    }

    return this;
  };

  // Subscribe
  myObject.subscriber = function(topic, func) {
    if (!topics[topic]) {
      topics[topic] = [];
    }

    let token = (++subUid).toString();
    topics[topic].push({
      token,
      func
    });
    return token;
  }

  myObject.unsubscribe = function (token) {
    for (let t in topics) {
      if (topics[t]) {
        for (let i = 0; i < topics[m].length; i++) {
          if (topics[m][i].token === token) {
            topics[m].splice(i, 1);
            return token;
          }
        }
      }
    }
    return this;
  }
}(pubsub));
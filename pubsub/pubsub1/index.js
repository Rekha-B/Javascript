import Broker from './Broker.js';
import Publisher  from './Publisher.js';
import Consumer from './Consumer.js';

const broker = new Broker({ retentionSweepMs : 2000})
broker.startRetentionSweep();

console.log("Create topic 'orders' with 10s retention" );
broker.createTopic("orders", {retentionMs: 10000});

const pub1 = new Publisher("pub1", broker);
const pub2 = new Publisher("pub2", broker);


const consumerA = new Consumer(
    'consumer-A',
    broker,
    {
        offset: 0,
        onMessage: (msg, self) => {
            console.log(`[A] got message offset = ${msg.offset} paylod=`, msg.payload);
        },
        onError: (err, msg) => console.warn(`[A] error for message ${msg && msg.offset}:`, err.message),
        autoCommit: true,
    }
)

const consumerB = new Consumer("consumer-B", broker, {
    offset: 0,
    onMessage: (msg) => console.log(`[B] got message offset=${msg.offset} payload=`, msg.payload),
  });

  consumerA.subscribe("orders");
  consumerB.subscribe("orders");

  (async () => {
    const payloads = [
      { orderId: 1, action: "create" },
      { orderId: 2, action: "create" },
      { orderId: 3, action: "explode" }, // will trigger consumer A error
      { orderId: 4, action: "update" },
    ];
    console.log("Publishing in parallel from pub1");
    const offsets = await pub1.publishParallel("orders", payloads);
    console.log("Offsets returned:", offsets);
  })();


  setTimeout(() => {
    console.log("Topic status:", broker.status());
    console.log("Consumer A status:", consumerA.status());
    console.log("Consumer B status:", consumerB.status());

    onsole.log("\nReset consumer B to offset 1 (replay from offset 1)");
    consumerB.resetOffset(1);
  
    // Wait then show lag again
    setTimeout(() => {
      console.log("After reset - Consumer B status:", consumerB.status());
    }, 500);
  },500);


  setTimeout(() => {
    console.log("After retention sweep, topic status:", broker.status());
    broker.stopRetentionSweep();
  }, 15000);
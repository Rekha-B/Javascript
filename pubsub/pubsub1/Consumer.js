class Consumer {
    constructor(id, broker, opts = {}){
        this.id = id;
        this.broker = broker;
        this._topic = null;
        this._running = false;
        this._onMessage = opts.onMessage || (() => {});
        this._onError = opts.onError || ((e) => console.error(e));
        this._offset = Number.isInteger(opts.offset) ? opts.offset : 0; 
        this._autoCommit = opts.autoCommit !== undefined ? opts.autoComit : true;
        this._commitOn = opts.commitOn || (() => true);
    }
         
    subscribe(topicName){
        const topic = this.broker.getTopic(topicName);
        if(!topic) throw new Error(`Topic ${topicName} not found`);
        if(this._topic)this._topic.detachConsumer(this);

        this._topic = topic;
        topic.attachConsumer(this);
        this._running = true;

        const pending = topic.getMessageFrom(this._offset);
        pending.forEach(m => {
            setTimeout(() => {
                    try {
                       this._onMessage(m, this);
                       if(this._autoCommit && this._commitOn(m)) this._offset = m.offset;
                    }
                    catch(err){
                        console.error(`Consumer ${this.id} error during replay`, err);
                        this._onError(err, m);
                    }
            },0);


        })
    }

    unsubscribe(){
        if(!this._topic)return ;
        this._topic.detachConsumer(this);
        this._running = false;
        this._topic = null;
    }

    getOffset() {
        return this._offset;
    }

    _onMessage(msg) {
        if (!this._running) return;
        if (msg.offset < this._offset) return; // already processed
        try {
          this._onMessage(msg, this);
          if (this._autoCommit && this._commitOn(msg)) this._offset = msg.offset + 1;
        } catch (err) {
          console.error(`Consumer ${this.id} encountered error processing message`, err);
          this._onError(err, msg);
        }
      }

      status() {
        return {
          id: this.id,
          topic: this._topic ? this._topic.name : null,
          offset: this._offset,
          running: this._running,
          lag: this.getLag(),
        };
    }

    resetOffset(offset) {
        if (!Number.isInteger(offset) || offset < 0) throw new Error("Invalid offset");
        this._offset = offset;
        if (this._topic) {
          const pending = this._topic.getMessagesFrom(this._offset);
          pending.forEach((m) => {
            setTimeout(() => {
              try {
                this._onMessage(m, this);
                if (this._autoCommit && this._commitOn(m)) this._offset = m.offset + 1;
              } catch (err) {
                console.error(`Consumer ${this.id} error during reset replay`, err);
                this._onError(err, m);
              }
            }, 0);
          });
        }
      }



  getLag() {
    if (!this._topic) return null;
    const last = this._topic.lastOffset;
    if (last < 0) return 0;
    // lag is number of messages not yet consumed (approx): lastOffset - (offset -1)
    return Math.max(0, last - (this._offset - 1));
  }
}

export default Consumer;
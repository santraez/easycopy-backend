import { Schema, model } from 'mongoose';

const itemSchema = Schema ({
  text: {
    type: String,
    required: true
  },
  seed1: {
    type: Array,
    required: true
  },
  seed2: {
    type: Array,
    required: true
  },
  seed3: {
    type: Array,
    required: true
  },
  seedKey: {
    type: String,
    required: true
  },
  expireAt: {
    type: Date,
    default: () => new Date(Date.now() + 10*60*1000)
  }
}, {
  versionKey: false,
});

itemSchema.index({ "expireAt": 1 }, { expireAfterSeconds: 0 });

export default model ('Item', itemSchema, 'items');

module.exports = {
  inputs: {
    criteria: {
      type: 'json',
      custom: (value) => _.isArray(value) || _.isPlainObject(value),
    },
  },

  async fn(inputs) {
    return CardSubscription.find(inputs.criteria).sort('created_at');
  },
};

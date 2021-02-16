module.exports = {
  inputs: {
    criteria: {
      type: 'json',
      custom: (value) => _.isArray(value) || _.isPlainObject(value),
    },
    sort: {
      type: 'json',
      defaultsTo: 'created_at DESC',
    },
    limit: {
      type: 'number',
    },
  },

  async fn(inputs) {
    return Card.find(inputs.criteria).sort(inputs.sort).limit(inputs.limit);
  },
};

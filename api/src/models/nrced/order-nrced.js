'use strict';

module.exports = require('../../utils/model-schema-generator')(
  'OrderNRCED',
  {
    _schemaName: { type: String, default: 'OrderNRCED' },

    read: [{ type: String, trim: true, default: 'sysadmin' }],
    write: [{ type: String, trim: true, default: 'sysadmin' }],

    _master: { type: 'ObjectId', ref: 'Order' },

    summary: { type: String, default: '' },
    // legacyIds: [{ type: String, default: null }], // TODO what is this?

    dateAdded: { type: Date, default: Date.now() },
    dateUpdated: { type: Date, default: Date.now() },

    datePublished: { type: Date, default: Date.now() }
  },
  'nrpti'
);
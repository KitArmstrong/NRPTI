'use strict';

module.exports = require('../../utils/model-schema-generator')(
  'WarningNRCED',
  {
    _schemaName: { type: String, default: 'WarningNRCED' },

    read: [{ type: String, trim: true, default: 'sysadmin' }],
    write: [{ type: String, trim: true, default: 'sysadmin' }],

    _master: { type: 'ObjectId', default: null, ref: 'Warning' },

    summary: { type: String, default: '' },

    dateAdded: { type: Date, default: Date.now() },
    dateUpdated: { type: Date, default: null },
    datePublished: { type: Date, default: null }
  },
  'nrpti'
);
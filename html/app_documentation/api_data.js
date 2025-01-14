define({ "api": [
  {
    "type": "get",
    "url": "api/getaccount",
    "title": "getAccount",
    "version": "1.0.0",
    "name": "getAccount",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/getaccount?api_token=$2y$10$NfqNMruT8Az1ezzVYcW5TeV28p7XvBp0A7BH/GD1mbXKDoS9lCli6&key=$2y$10$rO4mTY12aZPeuV570behsOujwA/kHChV.46RLDBTmox1V3aNekc4O"
      }
    ],
    "success": {
      "fields": {
        "HTTP 200": [
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "HTTP 200",
            "type": "Array",
            "optional": false,
            "field": "account",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"Account data retrieved\",\n  \"account\": {company: 'Company Name',contact: 'Full name', etc }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP 500": [
          {
            "group": "HTTP 500",
            "optional": false,
            "field": "Exception-Response",
            "description": ""
          }
        ],
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Error exception.\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "api/getnotifications",
    "title": "getNotifications",
    "version": "1.0.0",
    "name": "getNotifications",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/getnotifications"
      }
    ],
    "success": {
      "fields": {
        "HTTP 200": [
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"Notifications retrieved\",\n  \"notifications\": [{message: 'Notification message',created_at: '2020-06-01 10:00' }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "NoNotificationsError",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ],
        "HTTP 500": [
          {
            "group": "HTTP 500",
            "optional": false,
            "field": "Exception-Response",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": No new Notifications\"\n}",
          "type": "json"
        },
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Error exception.\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "api/getpartner",
    "title": "getPartner",
    "version": "1.0.0",
    "name": "getPartner",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/getpartner?api_token=$2y$10$NfqNMruT8Az1ezzVYcW5TeV28p7XvBp0A7BH/GD1mbXKDoS9lCli6&key=$2y$10$rO4mTY12aZPeuV570behsOujwA/kHChV.46RLDBTmox1V3aNekc4O"
      }
    ],
    "success": {
      "fields": {
        "HTTP 200": [
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "HTTP 200",
            "type": "Array",
            "optional": false,
            "field": "account",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"Partner data retrieved\",\n  \"account\": {company: 'Company Name',contact: 'Full name', etc }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP 500": [
          {
            "group": "HTTP 500",
            "optional": false,
            "field": "Exception-Response",
            "description": ""
          }
        ],
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Error exception.\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "api/getreviewlink",
    "title": "getReviewLink",
    "version": "1.0.0",
    "name": "getReviewLink",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>[android, ios]</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/getreviewlink"
      }
    ],
    "success": {
      "fields": {
        "HTTP 200": [
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"ReviewLink retrieved\",\n  \"reviewlink\": [{message: 'Notification message',created_at: '2020-06-01 10:00' }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "NoReviewLinkError",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ],
        "HTTP 500": [
          {
            "group": "HTTP 500",
            "optional": false,
            "field": "Exception-Response",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": No new ReviewLink\"\n}",
          "type": "json"
        },
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Error exception.\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "api/getbalance",
    "title": "getBalance",
    "version": "1.0.0",
    "name": "getBalance",
    "group": "Airtime",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/getbalance?api_token=$2y$10$NfqNMruT8Az1ezzVYcW5TeV28p7XvBp0A7BH/GD1mbXKDoS9lCli6&key=$2y$10$rO4mTY12aZPeuV570behsOujwA/kHChV.46RLDBTmox1V3aNekc4O"
      }
    ],
    "success": {
      "fields": {
        "HTTP 200": [
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "HTTP 200",
            "type": "Number",
            "optional": false,
            "field": "prepaid_balance",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"Balances retrieved\",\n  \"prepaid_balance\": 100.00,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP 500": [
          {
            "group": "HTTP 500",
            "optional": false,
            "field": "Exception-Response",
            "description": ""
          }
        ],
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Error exception.\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Airtime"
  },
  {
    "type": "post",
    "url": "api/postreferral",
    "title": "postReferral",
    "version": "1.0.0",
    "name": "postReferral",
    "group": "Airtime",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "referral_1",
            "description": "<p>mobile number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "referral_2",
            "description": "<p>mobile number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "referral_3",
            "description": "<p>mobile number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "referral_4",
            "description": "<p>mobile number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "referral_5",
            "description": "<p>mobile number</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/postreferral"
      }
    ],
    "success": {
      "fields": {
        "HTTP 200": [
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"R10.00 Airtime Applied\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "RequiredError",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "UniqueError",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DuplicateNumbersUsed",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "NumbersUsed",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "InvalidNumbers",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ],
        "HTTP 500": [
          {
            "group": "HTTP 500",
            "optional": false,
            "field": "Exception-Response",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"All referral numbers required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"All referral numbers needs to unique\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Mobile numbers needs to be unique.\"\n  \"numbers\": [\"0821112222\",\"0731112222\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Mobile number has already been sent an invitation.\"\n  \"numbers\": [\"0821112222\",\"0731112222\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Not a mobile number.\"\n  \"numbers\": [\"0123334444\",\"055925554444\"]\n}",
          "type": "json"
        },
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Error exception.\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Airtime"
  },
  {
    "type": "get",
    "url": "api/login",
    "title": "getLogin",
    "version": "1.0.0",
    "name": "getLogin",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>valid za mobile number</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/getlogin?key=$2y10$rO4mTY12aZPeuV570behsOujwA/kHChV.46RLDBTmox1V3aNekc4O&mobile_number=0812223333"
      }
    ],
    "success": {
      "fields": {
        "HTTP 200": [
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response Verification:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"Account Exists. SMS Sent.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "InvalidPhoneNumber",
            "description": "<p>invalid ZA phone number</p>"
          }
        ],
        "HTTP 500": [
          {
            "group": "HTTP 500",
            "optional": false,
            "field": "Exception-Response",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid phone number\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"You can not use a fixed line number\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Phone number not found\"\n}",
          "type": "json"
        },
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Verification SMS could not be sent.\"\n}",
          "type": "json"
        },
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Error exception.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "api/postsmstoken",
    "title": "postSMSToken",
    "version": "1.0.0",
    "name": "postSMSToken",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>valid za mobile number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>valid verification code sent in sms</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/postsmstoken"
      }
    ],
    "success": {
      "fields": {
        "HTTP 200": [
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          },
          {
            "group": "HTTP 200",
            "type": "Array",
            "optional": false,
            "field": "extension",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"SMS Verified.\",\n  \"api_token\": \"2y10$oW.IHaXEm4ooZPr48ISrGeaVQ2jVug7jgy6xgHfE8fpN22TBzDng.\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "InvalidCode",
            "description": ""
          }
        ],
        "HTTP 500": [
          {
            "group": "HTTP 500",
            "optional": false,
            "field": "Exception-Response",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Verification code not found\"\n}",
          "type": "json"
        },
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Error exception.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "api/postsignup",
    "title": "postSignup",
    "version": "1.0.0",
    "name": "postSignup",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>valid za mobile number (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>(optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reseller_code",
            "description": "<p>(optional)</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/postsignup"
      }
    ],
    "success": {
      "fields": {
        "HTTP 200": [
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"Account Created. SMS Sent.\",\n  \"sip\": {username: '101', password: '1234', server: 'pbx.cloudtools.co.za'}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "FieldRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "InvalidPhoneNumber",
            "description": "<p>invalid ZA phone number</p>"
          }
        ],
        "HTTP 500": [
          {
            "group": "HTTP 500",
            "optional": false,
            "field": "Exception-Response",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Name required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Phone required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Email required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid phone number\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Phone number already exists.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"You can not use a fixed line number\"\n}",
          "type": "json"
        },
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account could not be created.\"\n}",
          "type": "json"
        },
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"User could not be created.\"\n}",
          "type": "json"
        },
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"PBX add failed. DNS create failed\"\n}",
          "type": "json"
        },
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Extension could not be created\"\n}",
          "type": "json"
        },
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Error exception.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "api/getcallerids",
    "title": "getCallerIds",
    "version": "1.0.0",
    "name": "getCallerIds",
    "group": "Extension",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/getcallerids?api_token=$2y$10$NfqNMruT8Az1ezzVYcW5TeV28p7XvBp0A7BH/GD1mbXKDoS9lCli6&key=$2y$10$rO4mTY12aZPeuV570behsOujwA/kHChV.46RLDBTmox1V3aNekc4O"
      }
    ],
    "success": {
      "fields": {
        "HTTP 200": [
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "HTTP 200",
            "type": "Array",
            "optional": false,
            "field": "caller_ids",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"Caller IDs retrieved\",\n  \"caller_ids\": ['27111111111','27111111112','27111111113']\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP 500": [
          {
            "group": "HTTP 500",
            "optional": false,
            "field": "Exception-Response",
            "description": ""
          }
        ],
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Error exception\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Extension"
  },
  {
    "type": "get",
    "url": "api/getextension",
    "title": "getExtension",
    "version": "1.0.0",
    "name": "getExtension",
    "group": "Extension",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/getextension?api_token=$2y$10$NfqNMruT8Az1ezzVYcW5TeV28p7XvBp0A7BH/GD1mbXKDoS9lCli6&key=$2y$10$rO4mTY12aZPeuV570behsOujwA/kHChV.46RLDBTmox1V3aNekc4O"
      }
    ],
    "success": {
      "fields": {
        "HTTP 200": [
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "HTTP 200",
            "type": "Array",
            "optional": false,
            "field": "extension",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"Extension retrieved\",\n  \"extension\": {username: '101', password: '1234', server: 'pbx.cloudtools.co.za', caller_id: '2711111111', forward_all_destination: '2711111111', forward_busy_enabled: '1', forward_no_answer_enabled: '1', forward_all_enabled: '0', voicemail_forward: '0'}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "InvalidSip",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ],
        "HTTP 500": [
          {
            "group": "HTTP 500",
            "optional": false,
            "field": "Exception-Response",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Extension not found\"\n}",
          "type": "json"
        },
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Error exception.\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Extension"
  },
  {
    "type": "get",
    "url": "api/getextensionlist",
    "title": "getExtensionList",
    "version": "1.0.0",
    "name": "getExtensionList",
    "group": "Extension",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/getextensionlist?api_token=$2y$10$NfqNMruT8Az1ezzVYcW5TeV28p7XvBp0A7BH/GD1mbXKDoS9lCli6&key=$2y$10$rO4mTY12aZPeuV570behsOujwA/kHChV.46RLDBTmox1V3aNekc4O"
      }
    ],
    "success": {
      "fields": {
        "HTTP 200": [
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "HTTP 200",
            "type": "Array",
            "optional": false,
            "field": "extensions",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"Extension retrieved\",\n  \"extensions\": [{username: '101', name: 'name', server: 'pbx.cloudtools.co.za', caller_id: '2711111111'}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "InvalidSip",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ],
        "HTTP 500": [
          {
            "group": "HTTP 500",
            "optional": false,
            "field": "Exception-Response",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Extension not found\"\n}",
          "type": "json"
        },
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Error exception.\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Extension"
  },
  {
    "type": "get",
    "url": "api/getrouting",
    "title": "getRouting",
    "version": "1.0.0",
    "name": "getRouting",
    "group": "Extension",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/getrouting?api_token=$2y$10$NfqNMruT8Az1ezzVYcW5TeV28p7XvBp0A7BH/GD1mbXKDoS9lCli6&key=$2y$10$rO4mTY12aZPeuV570behsOujwA/kHChV.46RLDBTmox1V3aNekc4O"
      }
    ],
    "success": {
      "fields": {
        "HTTP 200": [
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"Number routing retrieved\",\n  \"routing\": [{number: '27712223333', number_routing: '101'},{number: '27712224444', number_routing: '101'}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "InvalidInboundNumbers",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ],
        "HTTP 500": [
          {
            "group": "HTTP 500",
            "optional": false,
            "field": "Exception-Response",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"No inbound numbers assigned to this account.\"\n}",
          "type": "json"
        },
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Error exception.\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Extension"
  },
  {
    "type": "get",
    "url": "api/getroutingoptions",
    "title": "getRoutingOptions",
    "version": "1.0.0",
    "name": "getRoutingOptions",
    "group": "Extension",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/getroutingoptions?api_token=$2y$10$NfqNMruT8Az1ezzVYcW5TeV28p7XvBp0A7BH/GD1mbXKDoS9lCli6&key=$2y$10$rO4mTY12aZPeuV570behsOujwA/kHChV.46RLDBTmox1V3aNekc4O"
      }
    ],
    "success": {
      "fields": {
        "HTTP 200": [
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"Routing options retrieved\",\n  \"routing_options\": [{id: 0, extensionDetails: {extension: 101, label: 'Extension - 101'}},{id: 1, extensionDetails: {extension: 102, label: 'Extension - 102'}}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP 500": [
          {
            "group": "HTTP 500",
            "optional": false,
            "field": "Exception-Response",
            "description": ""
          }
        ],
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Error exception.\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Extension"
  },
  {
    "type": "post",
    "url": "api/postcallforward",
    "title": "postCallForward",
    "version": "1.0.0",
    "name": "postCallForward",
    "group": "Extension",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "call_forward",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "forward_busy",
            "description": "<p>(1 or 0)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "forward_no_answer",
            "description": "<p>(1 or 0)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "forward_all",
            "description": "<p>(1 or 0)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "voicemail_forward",
            "description": "<p>(1 or 0)</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/postcallforward"
      }
    ],
    "success": {
      "fields": {
        "HTTP 200": [
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"Call Forward updated\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "InvalidCallerId",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "CallForwardFailed",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ],
        "HTTP 500": [
          {
            "group": "HTTP 500",
            "optional": false,
            "field": "Exception-Response",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid Request\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Call Forward update failed\"\n}",
          "type": "json"
        },
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Error exception.\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Extension"
  },
  {
    "type": "post",
    "url": "api/postcallerid",
    "title": "postCallerId",
    "version": "1.0.0",
    "name": "postCallerId",
    "group": "Extension",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "caller_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/postcallerid"
      }
    ],
    "success": {
      "fields": {
        "HTTP 200": [
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"Caller ID updated\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "InvalidCallerId",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "CallerIdUpdateFailed",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ],
        "HTTP 500": [
          {
            "group": "HTTP 500",
            "optional": false,
            "field": "Exception-Response",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid Caller ID\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Caller ID update failed\"\n}",
          "type": "json"
        },
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Error exception.\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Extension"
  },
  {
    "type": "get",
    "url": "api/postextension",
    "title": "postExtension",
    "version": "1.0.0",
    "name": "postExtension",
    "group": "Extension",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": "<p>(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>(required)</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/postextension?mobile_number=0821112233&api_token=$2y$10$NfqNMruT8Az1ezzVYcW5TeV28p7XvBp0A7BH/GD1mbXKDoS9lCli6&key=$2y$10$rO4mTY12aZPeuV570behsOujwA/kHChV.46RLDBTmox1V3aNekc4O"
      }
    ],
    "success": {
      "fields": {
        "HTTP 200": [
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"Extension created\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "InvalidNumber",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ],
        "HTTP 500": [
          {
            "group": "HTTP 500",
            "optional": false,
            "field": "Exception-Response",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Phone number required.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid phone number.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Phone number needs to be unique.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Phone number already exists.\"\n}",
          "type": "json"
        },
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Error exception.\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Extension"
  },
  {
    "type": "post",
    "url": "api/postrouting",
    "title": "postRouting",
    "version": "1.0.0",
    "name": "postRouting",
    "group": "Extension",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number_routing",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/postrouting"
      }
    ],
    "success": {
      "fields": {
        "HTTP 200": [
          {
            "group": "HTTP 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"Number routing updated\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "InvalidNumberRouting",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "NumberRoutingUpdateFailed",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ],
        "HTTP 500": [
          {
            "group": "HTTP 500",
            "optional": false,
            "field": "Exception-Response",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Number routing values are the same, no changes made\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Number routing update failed\"\n}",
          "type": "json"
        },
        {
          "title": "Exception-Response:",
          "content": "HTTP/1.1 500 Internal Error\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Error exception.\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Extension"
  },
  {
    "type": "get",
    "url": "api/getcdr",
    "title": "getCdr",
    "version": "1.0.0",
    "name": "getCdr",
    "group": "Webviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/getcdr?api_token=$2y$10$NfqNMruT8Az1ezzVYcW5TeV28p7XvBp0A7BH/GD1mbXKDoS9lCli6&key=$2y$10$rO4mTY12aZPeuV570behsOujwA/kHChV.46RLDBTmox1V3aNekc4O"
      }
    ],
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Webviews",
    "error": {
      "fields": {
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "api/getcontact",
    "title": "getContact",
    "version": "1.0.0",
    "name": "getContact",
    "group": "Webviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/getcontact?api_token=$2y$10$NfqNMruT8Az1ezzVYcW5TeV28p7XvBp0A7BH/GD1mbXKDoS9lCli6&key=$2y$10$rO4mTY12aZPeuV570behsOujwA/kHChV.46RLDBTmox1V3aNekc4O"
      }
    ],
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Webviews",
    "error": {
      "fields": {
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "api/gethelpdesk",
    "title": "getHelpdesk",
    "version": "1.0.0",
    "name": "getHelpdesk",
    "group": "Webviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/gethelpdesk?api_token=$2y$10$NfqNMruT8Az1ezzVYcW5TeV28p7XvBp0A7BH/GD1mbXKDoS9lCli6&key=$2y$10$rO4mTY12aZPeuV570behsOujwA/kHChV.46RLDBTmox1V3aNekc4O"
      }
    ],
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Webviews",
    "error": {
      "fields": {
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "api/getorder",
    "title": "getOrder",
    "version": "1.0.0",
    "name": "getOrder",
    "group": "Webviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://portal.cloudtelecoms.co.za/api/getorder?api_token=$2y$10$SOskLOcs1hc0ts8/ofTjN.FE.546h2opocBD085Zc0ltjqDrFdlfG&key=$2y$10$rO4mTY12aZPeuV570behsOujwA/kHChV.46RLDBTmox1V3aNekc4O"
      }
    ],
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Webviews",
    "error": {
      "fields": {
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "api/getrates",
    "title": "getRates",
    "version": "1.0.0",
    "name": "getRates",
    "group": "Webviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://portal.cloudtelecoms.co.za/api/getrates?api_token=$2y$10$lqmYL8H3cOz2InHe1ZWDGOpLh7z0aCn.a6vSSqnkTKVZ/tGb0G8q.&key=$2y$10$rO4mTY12aZPeuV570behsOujwA/kHChV.46RLDBTmox1V3aNekc4O"
      }
    ],
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Webviews",
    "error": {
      "fields": {
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "api/postcontactform",
    "title": "postContactForm",
    "version": "1.0.0",
    "name": "postContactForm",
    "group": "Webviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>appkey</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_token",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://portal.cloudtelecoms.co.za/api/postcontactform?api_token=$2y$10$NfqNMruT8Az1ezzVYcW5TeV28p7XvBp0A7BH/GD1mbXKDoS9lCli6&key=$2y$10$rO4mTY12aZPeuV570behsOujwA/kHChV.46RLDBTmox1V3aNekc4O"
      }
    ],
    "filename": "/home/admin/domains/turnkeyerp.io/erp/app/Http/Controllers/ApiController.php",
    "groupTitle": "Webviews",
    "error": {
      "fields": {
        "HTTP 400": [
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenRequired",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "TokenInvalid",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "DomainDNS",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountNotFound",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountType",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "PBXDomain",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDisabled",
            "description": ""
          },
          {
            "group": "HTTP 400",
            "optional": false,
            "field": "AccountStatusDeleted",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token required\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Token invalid\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Domain DNS not propagated\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account does not exists, create a new account\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid account type\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Invalid pbx domain\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Disabled\"\n}",
          "type": "json"
        },
        {
          "title": "Global-Validation-Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"FAILURE\",\n  \"message\": \"Account Deleted\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });

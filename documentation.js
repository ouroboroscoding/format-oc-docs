documentation = {
	"platforms": [
		{"key": "javascript", "title": "JavaScript"},
		{"key": "python", "title": "Python"}
	],
	"menu": [
		{"title": "Getting Started", "items": [
			{"title": "Intro", "key": "intro"},
			{"title": "Downloading", "key": "download"},
			{"title": "Install & Import", "key": "install"}
		]},
		{"title": "The validation format", "items": [
			{"title": "Nodes", "key": "node-json"},
			{"title": "Nodes - Any", "key": "node-json-any"},
			{"title": "Nodes - Base64", "key": "node-json-base64"},
			{"title": "Nodes - Boolean", "key": "node-json-bool"},
			{"title": "Nodes - Date", "key": "node-json-date"},
			{"title": "Nodes - Date/Time", "key": "node-json-datetime"},
			{"title": "Nodes - Decimal", "key": "node-json-decimal"},
			{"title": "Nodes - Float", "key": "node-json-float"},
			{"title": "Nodes - Integer", "key": "node-json-int"},
			{"title": "Nodes - IPv4 Address", "key": "node-json-ip"},
			{"title": "Nodes - JSON", "key": "node-json-json"},
			{"title": "Nodes - MD5", "key": "node-json-md5"},
			{"title": "Nodes - Price", "key": "node-json-price"},
			{"title": "Nodes - String", "key": "node-json-string"},
			{"title": "Nodes - Time", "key": "node-json-time"},
			{"title": "Nodes - Timestamp", "key": "node-json-timestamp"},
			{"title": "Nodes - Unsigned Integer", "key": "node-json-uint"},
			{"title": "Nodes - UUID", "key": "node-json-uuid"},
			{"title": "Arrays", "key": "array-json"},
			{"title": "Hashes", "key": "hash-json"},
			{"title": "Options", "key": "option-json"},
			{"title": "Parents & Trees", "key": "parent-json"}
		]},
		{"title": "Using the code", "items": [

		]}
	],
	"pages": {

		// Getting Started
		"intro": {
			"title": "Introduction",
			"pagination": {
				"next": "download"
			},
			"sections": [
				{"type": "paragraph", "text": "Several years ago I was hired to by a company to re-write their cloud based software from scratch. The product relied heavily on document style data but version 1.0 had absolutely no validation in place so the DB was a mish-mash of different formats that were very hard to make sense of. I absolutely did not want version 2.0 to end up the same way, and I was also toying with the idea of validating data in both the browser as well as the server side using the exact same definition files, so I ended up writing a very simple piece of code in Python 2 / PHP / JavaScript which I called DataPoint. It worked out initially, but as I started to understand the scope of how complex one document could be, arrays, dynamic objects, points that could have two totally different but still valid types of data, the hack job that DataPoint became was so hard to use that it was almost as much trouble as not having validation. So in early 2016 I started spending my nights and weekends rewriting the entire thing as a self-contained pip/npm project that would take into account everything I had learned. FormatOC was born, and yes, we can all agree, I am terrible at naming things."},
				{"type": "paragraph", "text": "The idea behind FormatOC was to be able to define complex sets of data using JSON that could be loaded in any programming language that could be validating in both true data values, as well as strings that come back from browser forms, and then once validated, could be converted to whatever the DB required. This means that if a particular service required an integer or a double, they could receive \"10\" or \"98.6\" and be just as happy as if they got 10 or 98.6."}
			]
		},
		"download": {
			"title": "Downloading",
			"pagination": {
				"prev": "intro",
				"next": "install"
			},
			"sections": [
				{"type": "markdown", "text": {
					"python": "The project can be downloaded or forked from [GitHub](https://github.com/ouroboroscoding/format-oc-python)",
					"javascript": "The project can be downloaded or forked from [GitHub](https://github.com/ouroboroscoding/format-oc-javascript)"
				}},
				{"type": "title", "text": "Git SSH"},
				{"type": "code", "code": "bash", "text": {
					"python": "git clone git@github.com:ouroboroscoding/format-oc-python.git",
					"javascript": "git clone git@github.com:ouroboroscoding/format-oc-javascript.git"
				}},
				{"type": "title", "text": "Git HTTP"},
				{"type": "code", "code": "bash", "text": {
					"python": "git clone https://github.com/ouroboroscoding/format-oc-python.git",
					"javascript": "git clone https://github.com/ouroboroscoding/format-oc-javascript.git"
				}}
			]
		},
		"install": {
			"title": "Installing & Importing",
			"pagination": {
				"prev": "download",
				"next": "node-json"
			},
			"sections": [
				{"type": "title", "text": "Installing"},
				{"type": "paragraph", "text": "FormatOC can be installed using the appropriate package manager for your language."},
				{"type": "paragraph", "text": {
					"python": "For Python, use the pip command",
					"javascript": "For Javascript, use the npm command"
				}},
				{"type": "code", "code": "bash", "text": {
					"python": "pip install format-oc",
					"javascript": "npm install format-oc"
				}},
				{"type": "title", "text": "Importing"},
				{"type": "code", "text": {
					"python": "# All\nimport FormatOC\n\n# Just Tree\nfrom FormatOC import Tree",
					"javascript": "// ES5\nvar FormatOC = require('format-oc');\n\n// ES6\nimport FormatOC from 'format-oc';"
				}}
			]
		},

		// The format
		"node-json": {
			"title": "Node Format",
			"pagination": {
				"prev": "install",
				"next": "node-json-any"
			},
			"sections": [
				{"type": "paragraph", "text": "Nodes represent a single data point, whether it's an integer like 13, a simple string like \"Hello, world!\", or a more complex representation of a value, like this uuid \"52cd4b20-ca32-4433-9516-0c8684ec57c2\"."},
				{"type": "title", "text": "Simple Examples"},
				{"type": "paragraph", "text": "Let's start with a simple example, here is the JSON syntax for creating a simple Node, an integer that can store values between 1 and 10."},
				{"type": "code", "code": "javascript", "text": '{\n    "__type__": "int",\n    "__minimum__": 1,\n    "__maximum__": 10\n}'},
				{"type": "paragraph", "text": "If instead you only want even numbers."},
				{"type": "code", "code": "javascript", "text": '{\n    "__type__": "int",\n    "__options__": [2,4,6,8,10]\n}'},
				{"type": "title", "text": "Valid Types"},
				{"type": "markdown", "text": "The valid types of Node are:\n* any\n* base64\n* bool\n* date\n* datetime\n* decimal\n* float\n* int\n* ip\n* json\n* md5\n* price\n* string\n* time\n* timestamp\n* uint\n* uuid"}
			]
		},
		"node-json-any": {
			"title": "Node Format: any",
			"pagination": {
				"prev": "node-json",
				"next": "node-json-base64"
			},
			"sections": [
				{"type": "paragraph", "text": "This type isn't really recommended for anything except testing/debugging. An intermediate type until you are sure of what you need. Because of this it doesn't allow any options or min/max. Any value passed to it is valid, and if cleaned, it is returned as is."},
				{"type": "code", "code": "javascript", "text": '{\n    "__type__": "any"\n}'}
			]
		},
		"node-json-base64": {
			"title": "Node Format: base64",
			"pagination": {
				"prev": "node-json-any",
				"next": "node-json-bool"
			},
			"sections": [
				{"type": "markdown", "text": "This type is for validating [base64](https://en.wikipedia.org/wiki/Base64) values. Although neither really make a lot of sense, I decided to be lax for base64 and allow both the min/max and options parameters."},
				{"type": "code", "code": "javascript", "text": '// Any base64\n{\n    "__type__": "base64"\n}\n\n// List of allowed base64 values\n{\n    "__type__": "base64",\n    "__options__": ["SGVsbG8sIHRoaXMgaXMgYSB0ZXN0IQ==", "WW8gWW8gWW8=", "RG92ZXRhaWwgaXMgdGhlIHNoaXQu"]\n}'},
			]
		},
		"node-json-bool": {
			"title": "Node Format: bool",
			"pagination": {
				"prev": "node-json-base64",
				"next": "node-json-date"
			},
			"sections": [
				{"type": "markdown", "text": "Boolean types are another that can't have min/max or options due to the fact there is only ever two values for a bool."},
				{"type": "code", "code": "javascript", "text": '{\n    "__type__": "bool"\n}'},
			]
		},
		"node-json-date": {
			"title": "Node Format: date",
			"pagination": {
				"prev": "node-json-bool",
				"next": "node-json-datetime"
			},
			"sections": [
				{"type": "markdown", "text": "Dates are validated in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, i.e. YYYY-MM-DD. This allows dates to easily be checked against others and makes minimum and maximum validation simple. It is the format the majority of structured databases accept. If this format doesn't work for you, consider using the string type with the regex parameter."},
				{"type": "code", "code": "javascript", "text": '// Any date\n{\n    "__type__": "date"\n}\n\n// Dates in 2018\n{\n    "__type__": "date",\n    "__minimum__": "2018-01-01",\n    "__maximum__": "2018-12-31"\n}'},
			]
		},
		"node-json-datetime": {
			"title": "Node Format: datetime",
			"pagination": {
				"prev": "node-json-date",
				"next": "node-json-decimal"
			},
			"sections": [
				{"type": "markdown", "text": "Date times are (mostly) validated in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, i.e. YYYY-MM-DD for date, and hh:mm:ss for time, but I opted to replace the \"t\" that ISO requires between the two with a space. The majority reason for this is because it is the format SQL DBs expect. If there's enough demand I will happily change this or add a second type to follow ISO 8601.  If this format doesn't work for you, consider using the string type with the regex parameter. Again, it would be very strange to use min/max or options on a datetime value, but it is allowed."},
				{"type": "code", "code": "javascript", "text": '// Any datetime\n{\n    "__type__": "datetime"\n}\n\n// Can only select 12:00 to 13:00 on May 2nd, 1981\n{\n    "__type__": "datetime",\n    "__minimum__": "1981-05-02 12:00:00",\n    "__maximum__": "1981-05-02 13:00:00"\n}'},
			]
		},
		"node-json-decimal": {
			"title": "Node Format: decimal",
			"pagination": {
				"prev": "node-json-datetime",
				"next": "node-json-float"
			},
			"sections": [
				{"type": "markdown", "text": "Any programmer who's dealt with floats can tell you they aren't the best for keeping 100% accurate values. Get too many decimal points in your float and you might lose accuracy. Decimals solve this by storing floating point numbers as the individual digits, exponent, and sign parts. Often Decimals are represented as strings in DBs so this is how FormatOC returns them when cleaned."},
				{"type": "code", "code": "javascript", "text": '// Any decimal\n{\n    "__type__": "decimal"\n}\n\n// Decimals between -40.0 and 40.0\n{\n    "__type__": "decimal",\n    "__minimum__": "-40.0",\n    "__maximum__": "40.0"\n}\n\n// Only 13.3, 16.6, and 19.9\n{\n    "__type__": "decimal",\n    "__options__": ["13.3", "16.6", "19.9"]\n}'},
			]
		},
		"node-json-float": {
			"title": "Node Format: float",
			"pagination": {
				"prev": "node-json-decimal",
				"next": "node-json-int"
			},
			"sections": [
				{"type": "markdown", "text": "Floats are the built in types in most languages for dealing with fraction, or non-whole, numbers. As stated in decimals, they can be inaccurate at times, but sometimes they are just what you need."},
				{"type": "code", "code": "javascript", "text": '// Any float\n{\n    "__type__": "float"\n}\n\n// Floats between -40.0 and 40.0\n{\n    "__type__": "float",\n    "__minimum__": -40.0,\n    "__maximum__": 40.0\n}\n\n// Only 13.3, 16.6, and 19.9\n{\n    "__type__": "float",\n    "__options__": [13.3, 16.6, 19.9]\n}'},
			]
		},
		"node-json-int": {
			"title": "Node Format: int",
			"pagination": {
				"prev": "node-json-float",
				"next": "node-json-ip"
			},
			"sections": [
				{"type": "markdown", "text": "Integers are the built in types in most languages for dealing with whole numbers, values with no decimal or fraction. Integers are limited by the allowed memory used to store them, and they can be negative or positive."},
				{"type": "code", "code": "javascript", "text": '// Any int\n{\n    "__type__": "int"\n}\n\n// Ints between -40 and 40\n{\n    "__type__": "int",\n    "__minimum__": -40,\n    "__maximum__": 40\n}\n\n// Only 13, 16, and 19\n{\n    "__type__": "int",\n    "__options__": [13, 16, 19]\n}'},
			]
		},
		"node-json-ip": {
			"title": "Node Format: ip",
			"pagination": {
				"prev": "node-json-int",
				"next": "node-json-json"
			},
			"sections": [
				{"type": "markdown", "text": "IP Addresses, specifically, version 4 addresses, are on their way out, but occasionally still needed."},
				{"type": "code", "code": "javascript", "text": '// Any IP\n{\n    "__type__": "ip"\n}\n\n// IPs in the 192.255.255.255 range\n{\n    "__type__": "ip",\n    "__minimum__": "192.0.0.1",\n    "__maximum__": "192.254.254.254"\n}'},
			]
		},
		"node-json-json": {
			"title": "Node Format: json",
			"pagination": {
				"prev": "node-json-ip",
				"next": "node-json-md5"
			},
			"sections": [
				{"type": "markdown", "text": "JSON is used for dynamic data that still has to be structually valid and not just garbage. It's extremely useful if you require complex, or dymanic, data that needs to be stored in a record based system, like SQL. Because of the complexity of JSON, you can not use min/max or options with it."},
				{"type": "code", "code": "javascript", "text": '{\n    "__type__": "json"\n}'},
			]
		},
		"node-json-md5": {
			"title": "Node Format: md5",
			"pagination": {
				"prev": "node-json-json",
				"next": "node-json-price"
			},
			"sections": [
				{"type": "markdown", "text": "[MD5s](https://en.wikipedia.org/wiki/MD5) are mostly used as checksums against larger sets of data, like git commits. Due to the nature of MD5s, you can not use the min/max with them."},
				{"type": "code", "code": "javascript", "text": '// Any MD5\n{\n    "__type__": "md5"\n}\n\n// A list of valid MD5s\n{\n    "__type__": "md5",\n    "__options__": ["7b967af699a0a18b1f2bdc9704537a3e", "889ffd8cc409445187c4258d138192b6", "49c0d2aef0ab2634b0051544cdbf2415"]\n}'},
			]
		},
		"node-json-price": {
			"title": "Node Format: price",
			"pagination": {
				"prev": "node-json-md5",
				"next": "node-json-string"
			},
			"sections": [
				{"type": "markdown", "text": "Prices are very similar to Decimals, and use the same underlying validation and libraries, but are limited to 2 decimal places and will always return with 2 decimal places if cleaned."},
				{"type": "code", "code": "javascript", "text": '// Any price\n{\n    "__type__": "price"\n}\n\n// Prices from $1.99 to $2.99\n{\n    "__type__": "price",\n    "__minimum__": "1.99",\n    "__maximum__": "2.99"\n}\n\n// $0.95, $0.99, $1.00\n{\n    "__type__": "price",\n    "__options__": ["0.95", "0.99", "1.00"]\n}'},
			]
		},
		"node-json-string": {
			"title": "Node Format: string",
			"pagination": {
				"prev": "node-json-price",
				"next": "node-json-time"
			},
			"sections": [
				{"type": "paragraph", "text": "Strings are a pretty straight forward concept, however they work differently than another Nodes in two ways. The first is that __minimum__ and __maximum__ do not expect other strings, but unsigned integers which represent the minimum and maximum length of characters the Node can contain. The second is they are the only Node type that allows the __regex__ parameter, which allows you to define your own validation for the string."},
				{"type": "code", "code": "javascript", "text": '// Any string\n{\n    "__type__": "string"\n}\n\n// At least 3 characters but no more than 15\n{\n    "__type__": "string",\n    "__minimum__": 3,\n    "__maximum__": 15\n}\n\n// True or False\n{\n    "__type__": "string",\n    "__options__": ["True", "False"]\n}\n\n// Any number, a dash, and 32 hex characters\n{\n    "__type__": "string",\n    "__regex__": "^\\\\d+\\\\-[a-fA-Z0-9]{32}$"\n}'},
			]
		},
		"node-json-time": {
			"title": "Node Format: time",
			"pagination": {
				"prev": "node-json-string",
				"next": "node-json-timestamp"
			},
			"sections": [
				{"type": "markdown", "text": "Times are validated in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, i.e. hh:mm:ss. If this format doesn't work for you, consider using the string type with the regex parameter."},
				{"type": "code", "code": "javascript", "text": '// Any time\n{\n    "__type__": "time"\n}\n\n// Times in 12 noon\n{\n    "__type__": "time",\n    "__minimum__": "12:00:00",\n    "__maximum__": "12:59:59"\n}'},
			]
		},
		"node-json-timestamp": {
			"title": "Node Format: timestamp",
			"pagination": {
				"prev": "node-json-time",
				"next": "node-json-uint"
			},
			"sections": [
				{"type": "markdown", "text": "Timestamps, like uints, are simply unsigned integer values. This type is added simply to help make a definition file more clear and can be interchanged with uint."},
				{"type": "code", "code": "javascript", "text": '// Any timestamp\n{\n    "__type__": "timestamp"\n}\n\n// May 2nd, 1981 at 12:23pm to March 5th, 2019 at 6:29pm\n{\n    "__type__": "timestamp",\n    "__minimum__": 357668580,\n    "__maximum__": 1551828540\n}'},
			]
		},
		"node-json-uint": {
			"title": "Node Format: uint",
			"pagination": {
				"prev": "node-json-timestamp",
				"next": "node-json-uuid"
			},
			"sections": [
				{"type": "markdown", "text": "Unsigned integers are whole numbers that are zero or greater."},
				{"type": "code", "code": "javascript", "text": '// Any uint\n{\n    "__type__": "uint"\n}\n\n// 0 to 37\n{\n    "__type__": "uint",\n    "__maximum__": 37\n}'},
			]
		},
		"node-json-uuid": {
			"title": "Node Format: uuid",
			"pagination": {
				"prev": "node-json-uint",
				"next": "array-json"
			},
			"sections": [
				{"type": "markdown", "text": "[UUIDs](https://en.wikipedia.org/wiki/Universally_unique_identifier) are universally unique IDs. Due to the nature of UUIDs, you can not use min/max with them."},
				{"type": "code", "code": "javascript", "text": '// Any UUID\n{\n    "__type__": "uuid"\n}\n\n// A list of valid UUIDs\n{\n    "__type__": "md5",\n    "__options__": ["52cd4b20-ca32-4433-9516-0c8684ec57c2", "3b44c5ed-0fea-4478-9f1b-939ae6ec0721", "6432b16a-7e27-47cd-8360-82d82ac70078"]\n}'},
			]
		},

		"array-json": {
			"title": "Array Format",
			"pagination": {
				"prev": "node-json",
				"next": "hash-json"
			},
			"sections": [
				{"type": "paragraph", "text": "Arrays are Nodes that can have multiple values, whether unique or not. Arrays extend other Nodes via the special parameter \"__array__\"."},
				{"type": "paragraph", "text": "The value can be set to a string, in which case it should contain the value \"unique\" or \"duplicate\":"},
				{"type": "code", "code": "javascript", "text": '// Array of unique unsigned ints, [1, 3, 5, 7]\n{\n    "__array__": "unique",\n    "__type__": "uint"\n}\n\n// Array of any strings ["hello", "hello", "hello", "world!"]\n{\n    "__array__": "duplicate",\n    "__type__": "string"\n}'},
				{"type": "paragraph", "text": 'The value can also be set to an object with the values "type", "minumum", or "maximum". If type is omitted, "unique" is assumed'},
				{"type": "code", "code": "javascript", "text": '// Array of at least 5 unique floats, [1.1, 3.3, 5.5, 7.7, 9.9]\n{\n    "__array__": {"minimum": 5},\n    "__type__": "float"\n}\n\n// Array of 1 to 3 unique strings ["hello", "world!"]\n{\n    "__array__": {"minimum":1, "maximum": 3},\n    "__type__": "string"\n}\n\n// Array of no more than 5 ints, [-1, 0, 2, 2]\n{\n    "__array__": {"type": "duplicate", "maximum": 5},\n    "__type__": "int"\n}'},
				{"type": "paragraph", "text": 'Arrays are not limited to simple data nodes and can also be Options, Hashes, Parents, and even other Arrays. In the case of Options, and Arrays, the trick is in setting the "__type__" paramter to the underlying Node.'},
				{"type": "code", "code": "javascript", "text": '// An array of Parents\n// [{"width": 1920, "height": 1080},{"width": 1280, "height": 720}]\n{\n    "__array__": "unique",\n    "width": "uint",\n    "height": "uint"\n}\n\n// An array of dynamic strings to integers\n// [{"one": 1, "two": 2, "three": 3},{"une": 1, "deux": 2, "trois": 3}]\n{\n    "__array__": "unique",\n    "__hash__": "string",\n    "__type__": "int"\n}\n\n// An array of duplicate arrays of 3 unique ints\n// [[1,2,3],[1,2,3],[4,5,6]]\n{\n    "__array__": "duplicate",\n    "__type__": {\n        "__array__": {"minimum": 3, "maxium": 3}\n        "__type__": "int"\n    }\n}\n'},
			]
		},

		"hash-json": {
			"title": "Hash Format",
			"pagination": {
				"prev": "array-json",
				"next": "option-json"
			},
			"sections": [
				{"type": "paragraph", "text": "Hashes are key/map stores, the name has stuck with me since Perl and even though I know no one normal calls them that, and I haven't used Perl in 20 years, I can't break the habit. Hashes are useful when you need an object structure but the keys can also be dynamic."},
				{"type": "paragraph", "text": "Hash keys can only be set to single data nodes, nothing complex, but the values can be anything."},
				{"type": "code", "code": "javascript", "text": '// Dynamic list of md5s to dates\n// {\n//  "7b967af699a0a18b1f2bdc9704537a3e": "2018-12-13",\n//  "889ffd8cc409445187c4258d138192b6": "2019-01-04",\n//  "49c0d2aef0ab2634b0051544cdbf2415": "2019-03-01"\n// }\n{\n    "__hash__": "md5",\n    "__type__": "date"\n}'},
				{"type": "paragraph", "text": 'Hash values are not limited to simple data nodes and can also be Arrays, Options, Parents, and even other Hashes. In the case of Arrays, Options, and Hashes, the trick is in setting the "__type__" paramter to the underlying Node.'},
				{"type": "code", "code": "javascript", "text": '// Dynamic list of validated strings to Parents\n// {\n//  "1080p": {"width": 1920, "height": 1080},\n//  "720p": {"width": 1280, "height": 720}\n// }\n\n{\n    "__hash__": {\n        "__type__": "string",\n        "__regex__": "^\\\\d+p$"\n    },\n    "width": "uint",\n    "height": "uint"\n}\n\n// Dynamic list of uuids to unique arrays of unsigned ints below 5\n// {\n//  "6432b16a-7e27-47cd-8360-82d82ac70078": [1, 2, 3],\n//  "3b44c5ed-0fea-4478-9f1b-939ae6ec0721": [2, 3, 4],\n//  "52cd4b20-ca32-4433-9516-0c8684ec57c2": [3, 4, 5]\n// }\n{\n    "__hash__": "uuid",\n    "__type__": {\n        "__array__": "unique",\n        "__type__": "uint",\n        "__maximum__": 5\n    }\n}\n\n// Hash of strings to hashes of strings to array of ints\n// {\n//  "I suck": {\n//    "une": [1, 2, 3],\n//    "deux": [2, 3, 4]\n//  },\n//  "at naming": {\n//    "trois": [3, 4, 5],\n//    "quatre": [4, 5]\n//  },\n//  "things": {\n//    "cinq": [5, 6, 7, 8]\n//  }\n// }\n{\n    "__hash__": "string",\n    "__type__": {\n        "__hash__": "string",\n        "__type__": {\n            "__array__": "unique",\n            "__type__": "uint"\n        }\n    }\n}'}
			]
		},

		"option-json": {
			"title": "Option Format",
			"pagination": {
				"prev": "hash-json",
				"next": "parent-json"
			},
			"sections": [
				{"type": "paragraph", "text": "Options are list of valid types. There are no parameters for Options Nodes, they are defined simple as an array of valid Node types. If any of the data matches any of the elements, the Node is considered valid."},
				{"type": "paragraph", "text": "They are useful when two or more very different types of data are valid, but you don't want to allow just anything. Like if you wanted to allow for both MD5s and UUIDs."},
				{"type": "code", "code": "javascript", "text": '[\n    {"__type__": "md5"},\n    {"__type__": "uuid"}\n]'},
				{"type": "paragraph", "text": "That type of example is straight forward, but unlikely. Options Nodes are much more useful for complex data. For example, what if you wanted to store a series of messages in one document, but the data associated with the message was different based on the type?"},
				{"type": "code", "code": "javascript", "text": '[\n    {\n        "type": {"__type__":"string","__options__":["request"]},\n        "descr": {"__type__":"string","__optional__":true}\n    },{\n        "type": {"__type__":"string","__options__":["response"]},\n        "status": {"__type__":"bool"}\n    },{\n        "type": {"__type__":"string","__options__":["text"]},\n        "body": {"__type__":"string"},\n        "html": {"__type__":"bool"}\n    },{\n        "type": {"__type__":"string","__options__":["file"]},\n        "filename": {"__type__":"string"},\n        "mime": {"__type__":"string"},\n        "size": {"__type__":"uint"},\n        "file": {"__type__":"string"},\n        "resolution": {\n            "__optional__": true,\n            "h": {"__type__":"uint"},\n            "w": {"__type__":"uint"}\n        }\n    }\n]'},
				{"type": "paragraph", "text": "An OptionsNode like the preceeding could be passed any of the following values and be considered valid:"},
				{"type": "code", "code": "javascript", "text": '// A regular message\n{\n    "type": "text",\n    "body": "Hello, <b>world</b>!",\n    "html": true\n}\n\n// A request\n{\n    "type": "request"\n    "descr": "Pleae add me!"\n}\n\n// An attachment\n{\n    "type": "file",\n    "filename": "kitten.jpg",\n    "mime": "image/jpeg",\n    "size": 307965,\n    "file": "[some binary data to large for an example]",\n    "resolution": {\n        "h": 960,\n        "w": 1280\n    }\n}'}
			]
		},

		"parent-json": {
			"title": "Parent & Tree Format",
			"sections": [
				{"type": "paragraph", "text": "Parents are how we bring defined key/value Nodes together. Parents are simply strings, the key, pointing to other nodes."},
				{"type": "code", "code": "javascript", "text": '// Resolution\n{\n    "width": {"__type__": "uint"},\n    "height": {"__type__": "uint"}\n}\n\n// Decimal\n{\n    "digits": {"__array__": "duplicate", "__type__": "uint"},\n    "exponent": {"__type__": "uint"},\n    "sign": {"__type__": "bool"}\n}\n\n// File\n{\n    "filename": {"__type__": "string"},\n    "mime": {"__type__": "string"},\n    "size": {"__type__": "uint"},\n    "resolution": {\n        "__optional__": true,\n        "height": {"__type__": "uint"},\n        "width": {"__type__": "uint"}\n    }\n}'},
				{"type": "paragraph", "text": "Parents allow for just type strings for straight forward types, so the above could all be written as:"},
				{"type": "code", "code": "javascript", "text": '// Resolution\n{\n    "width": "uint",\n    "height": "uint"\n}\n\n// Decimal\n{\n    "digits": {"__array__": "duplicate", "__type__": "uint"},\n    "exponent": "uint",\n    "sign": "bool"\n}\n\n// File\n{\n    "filename": "string",\n    "mime": "string",\n    "size": "uint",\n    "resolution": {\n        "__optional__": true,\n        "height": "uint",\n        "width": "uint"\n    }\n}'},
				{"type": "paragraph", "text": "Parents also allow for adding the __optional__ flag as is seen in the File example. Setting the optional parameter allows for a value to not be set and for the Parent to still be valid without it. For example, the following would still be a valid value even without the resolution key:"},
				{"type": "code", "code": "javascript", "text": '{\n    "filename": "class_notes.doc",\n    "mime": "application/msword",\n    "size": 12456,\n}'}
			]
		},

		// Using the code
		"node": {
			"title": "Node class",
			"sections": [
			{"type": "markdown", "text": {
				"python": "In Python Decimals can be passed using the language's [decimal](https://docs.python.org/2/library/decimal.html) library.",
				"javascript": "In Javascript I opted to use the [decimal.js](https://github.com/MikeMcl/decimal.js/) library (with some extending) which can be accessed via FormatOC._Decimal."
			}}
		]}
	}
};

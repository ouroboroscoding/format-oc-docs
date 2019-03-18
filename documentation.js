documentation = {
	"platforms": [
		{"key": "javascript", "title": "JavaScript"},
		{"key": "php", "title": "PHP"},
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
			{"title": "Loading Definitions", "key": "loading"},
			{"title": "Validating", "key": "valid"},
			{"title": "Cleaning", "key": "clean"},
			{"title": "Special", "key": "special"},
			{"title": "Errors", "key": "errors"}
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
					"php": "The project can be downloaded or forked from [GitHub](https://github.com/ouroboroscoding/format-oc-php)",
					"javascript": "The project can be downloaded or forked from [GitHub](https://github.com/ouroboroscoding/format-oc-javascript)"
				}},
				{"type": "title", "text": "Git SSH"},
				{"type": "code", "code": "bash", "text": {
					"python": "git clone git@github.com:ouroboroscoding/format-oc-python.git",
					"php": "git clone git@github.com:ouroboroscoding/format-oc-php.git",
					"javascript": "git clone git@github.com:ouroboroscoding/format-oc-javascript.git"
				}},
				{"type": "title", "text": "Git HTTP"},
				{"type": "code", "code": "bash", "text": {
					"python": "git clone https://github.com/ouroboroscoding/format-oc-python.git",
					"php": "git clone https://github.com/ouroboroscoding/format-oc-php.git",
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
					"php": "Unfortunately For PHP every attempt I have made to signup for PEAR has failed, so it's best to just download the file from GitHub.",
					"javascript": "For Javascript, use the npm command"
				}},
				{"type": "code", "code": "bash", "text": {
					"python": "pip install format-oc",
					"php": "wget https://raw.githubusercontent.com/ouroboroscoding/format-oc-php/master/FormatOC.php",
					"javascript": "npm install format-oc"
				}},
				{"type": "title", "text": "Importing"},
				{"type": "code", "text": {
					"python": '# All\nimport FormatOC\n\n# Just Tree\nfrom FormatOC import Tree',
					"php": 'require "FormatOC.php"',
					"javascript": '// ES5\nvar FormatOC = require("format-oc");\n\n// ES6\nimport FormatOC from "format-oc";'
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
				{"type": "code", "code": "javascript", "text": '{\n  "__type__": "int",\n  "__minimum__": 1,\n  "__maximum__": 10\n}'},
				{"type": "paragraph", "text": "If instead you only want even numbers."},
				{"type": "code", "code": "javascript", "text": '{\n  "__type__": "int",\n  "__options__": [2,4,6,8,10]\n}'},
				{"type": "title", "text": "Valid Types"},
				{"type": "markdown", "text": "The valid types of Node are:\n* [any](#platform=|PLATFORM|&page=node-json-any)\n* [base64](#platform=|PLATFORM|&page=node-json-base64)\n* [bool](#platform=|PLATFORM|&page=node-json-bool)\n* [date](#platform=|PLATFORM|&page=node-json-date)\n* [datetime](#platform=|PLATFORM|&page=node-json-datetime)\n* [decimal](#platform=|PLATFORM|&page=node-json-decimal)\n* [float](#platform=|PLATFORM|&page=node-json-float)\n* [int](#platform=|PLATFORM|&page=node-json-int)\n* [ip](#platform=|PLATFORM|&page=node-json-ip)\n* [json](#platform=|PLATFORM|&page=node-json-json)\n* [md5](#platform=|PLATFORM|&page=node-json-md5)\n* [price](#platform=|PLATFORM|&page=node-json-price)\n* [string](#platform=|PLATFORM|&page=node-json-string)\n* [time](#platform=|PLATFORM|&page=node-json-time)\n* [timestamp](#platform=|PLATFORM|&page=node-json-timestamp)\n* [uint](#platform=|PLATFORM|&page=node-json-uint)\n* [uuid](#platform=|PLATFORM|&page=node-json-uuid)"}
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
				{"type": "code", "code": "javascript", "text": '{\n  "__type__": "any"\n}'}
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
				{"type": "code", "code": "javascript", "text": '// Any base64\n{\n  "__type__": "base64"\n}\n\n// List of allowed base64 values\n{\n  "__type__": "base64",\n  "__options__": ["SGVsbG8sIHRoaXMgaXMgYSB0ZXN0IQ==", "WW8gWW8gWW8=", "RG92ZXRhaWwgaXMgdGhlIHNoaXQu"]\n}'},
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
				{"type": "code", "code": "javascript", "text": '{\n  "__type__": "bool"\n}'},
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
				{"type": "code", "code": "javascript", "text": '// Any date\n{\n  "__type__": "date"\n}\n\n// Dates in 2018\n{\n  "__type__": "date",\n  "__minimum__": "2018-01-01",\n  "__maximum__": "2018-12-31"\n}'},
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
				{"type": "code", "code": "javascript", "text": '// Any datetime\n{\n  "__type__": "datetime"\n}\n\n// Can only select 12:00 to 13:00 on May 2nd, 1981\n{\n  "__type__": "datetime",\n  "__minimum__": "1981-05-02 12:00:00",\n  "__maximum__": "1981-05-02 13:00:00"\n}'},
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
				{"type": "code", "code": "javascript", "text": '// Any decimal\n{\n  "__type__": "decimal"\n}\n\n// Decimals between -40.0 and 40.0\n{\n  "__type__": "decimal",\n  "__minimum__": "-40.0",\n  "__maximum__": "40.0"\n}\n\n// Only 13.3, 16.6, and 19.9\n{\n  "__type__": "decimal",\n  "__options__": ["13.3", "16.6", "19.9"]\n}'},
				{"type": "markdown", "text": {
					"python": "In Python Decimals can be passed using the language's [decimal](https://docs.python.org/2/library/decimal.html) library.",
					"javascript": "In Javascript I opted to use the [decimal.js](https://github.com/MikeMcl/decimal.js/) library (with some extending) which can be accessed via FormatOC._Decimal."
				}}
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
				{"type": "code", "code": "javascript", "text": '// Any float\n{\n  "__type__": "float"\n}\n\n// Floats between -40.0 and 40.0\n{\n  "__type__": "float",\n  "__minimum__": -40.0,\n  "__maximum__": 40.0\n}\n\n// Only 13.3, 16.6, and 19.9\n{\n  "__type__": "float",\n  "__options__": [13.3, 16.6, 19.9]\n}'},
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
				{"type": "code", "code": "javascript", "text": '// Any int\n{\n  "__type__": "int"\n}\n\n// Ints between -40 and 40\n{\n  "__type__": "int",\n  "__minimum__": -40,\n  "__maximum__": 40\n}\n\n// Only 13, 16, and 19\n{\n  "__type__": "int",\n  "__options__": [13, 16, 19]\n}'},
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
				{"type": "code", "code": "javascript", "text": '// Any IP\n{\n  "__type__": "ip"\n}\n\n// IPs in the 192.255.255.255 range\n{\n  "__type__": "ip",\n  "__minimum__": "192.0.0.1",\n  "__maximum__": "192.254.254.254"\n}'},
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
				{"type": "code", "code": "javascript", "text": '{\n  "__type__": "json"\n}'},
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
				{"type": "code", "code": "javascript", "text": '// Any MD5\n{\n  "__type__": "md5"\n}\n\n// A list of valid MD5s\n{\n  "__type__": "md5",\n  "__options__": [\n    "7b967af699a0a18b1f2bdc9704537a3e",\n    "889ffd8cc409445187c4258d138192b6",\n    "49c0d2aef0ab2634b0051544cdbf2415"\n  ]\n}'},
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
				{"type": "code", "code": "javascript", "text": '// Any price\n{\n  "__type__": "price"\n}\n\n// Prices from $1.99 to $2.99\n{\n  "__type__": "price",\n  "__minimum__": "1.99",\n  "__maximum__": "2.99"\n}\n\n// $0.95, $0.99, $1.00\n{\n  "__type__": "price",\n  "__options__": ["0.95", "0.99", "1.00"]\n}'},
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
				{"type": "code", "code": "javascript", "text": '// Any string\n{\n  "__type__": "string"\n}\n\n// At least 3 characters but no more than 15\n{\n  "__type__": "string",\n  "__minimum__": 3,\n  "__maximum__": 15\n}\n\n// True or False\n{\n  "__type__": "string",\n  "__options__": ["True", "False"]\n}\n\n// Any number, a dash, and 32 hex characters\n{\n  "__type__": "string",\n  "__regex__": "^\\\\d+\\\\-[a-fA-Z0-9]{32}$"\n}'},
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
				{"type": "code", "code": "javascript", "text": '// Any time\n{\n  "__type__": "time"\n}\n\n// Times in 12 noon\n{\n  "__type__": "time",\n  "__minimum__": "12:00:00",\n  "__maximum__": "12:59:59"\n}'},
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
				{"type": "code", "code": "javascript", "text": '// Any timestamp\n{\n  "__type__": "timestamp"\n}\n\n// May 2nd, 1981 at 12:23pm to March 5th, 2019 at 6:29pm\n{\n  "__type__": "timestamp",\n  "__minimum__": 357668580,\n  "__maximum__": 1551828540\n}'},
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
				{"type": "code", "code": "javascript", "text": '// Any uint\n{\n  "__type__": "uint"\n}\n\n// 0 to 37\n{\n  "__type__": "uint",\n  "__maximum__": 37\n}'},
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
				{"type": "code", "code": "javascript", "text": '// Any UUID\n{\n  "__type__": "uuid"\n}\n\n// A list of valid UUIDs\n{\n  "__type__": "md5",\n  "__options__": [\n    "52cd4b20-ca32-4433-9516-0c8684ec57c2",\n    "3b44c5ed-0fea-4478-9f1b-939ae6ec0721",\n    "6432b16a-7e27-47cd-8360-82d82ac70078"\n  ]\n}'},
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
				{"type": "paragraph", "text": "The value can be set to a string, in which case it should contain the value \"unique\" or \"duplicates\":"},
				{"type": "code", "code": "javascript", "text": '// Array of unique unsigned ints, [1, 3, 5, 7]\n{\n  "__array__": "unique",\n  "__type__": "uint"\n}\n\n// Array of any strings ["hello", "hello", "hello", "world!"]\n{\n  "__array__": "duplicates",\n  "__type__": "string"\n}'},
				{"type": "paragraph", "text": 'The value can also be set to an object with the values "type", "minumum", or "maximum". If type is omitted, "unique" is assumed'},
				{"type": "code", "code": "javascript", "text": '// Array of at least 5 unique floats, [1.1, 3.3, 5.5, 7.7, 9.9]\n{\n  "__array__": {"minimum": 5},\n  "__type__": "float"\n}\n\n// Array of 1 to 3 unique strings ["hello", "world!"]\n{\n  "__array__": {"minimum":1, "maximum": 3},\n  "__type__": "string"\n}\n\n// Array of no more than 5 ints, [-1, 0, 2, 2]\n{\n  "__array__": {"type": "duplicates", "maximum": 5},\n  "__type__": "int"\n}'},
				{"type": "paragraph", "text": 'Arrays are not limited to simple data nodes and can also be Options, Hashes, Parents, and even other Arrays. In the case of Options, and Arrays, the trick is in setting the "__type__" paramter to the underlying Node.'},
				{"type": "code", "code": "javascript", "text": '// An array of Parents\n// [{"width": 1920, "height": 1080},{"width": 1280, "height": 720}]\n{\n  "__array__": "unique",\n  "width": "uint",\n  "height": "uint"\n}\n\n// An array of dynamic strings to integers\n// [{"one": 1, "two": 2, "three": 3},{"une": 1, "deux": 2, "trois": 3}]\n{\n  "__array__": "unique",\n  "__hash__": "string",\n  "__type__": "int"\n}\n\n// An array of duplicate arrays of 3 unique ints\n// [[1,2,3],[1,2,3],[4,5,6]]\n{\n  "__array__": "duplicates",\n  "__type__": {\n    "__array__": {"minimum": 3, "maxium": 3}\n    "__type__": "int"\n  }\n}\n'},
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
				{"type": "code", "code": "javascript", "text": '// Dynamic list of md5s to dates\n// {\n//  "7b967af699a0a18b1f2bdc9704537a3e": "2018-12-13",\n//  "889ffd8cc409445187c4258d138192b6": "2019-01-04",\n//  "49c0d2aef0ab2634b0051544cdbf2415": "2019-03-01"\n// }\n{\n  "__hash__": "md5",\n  "__type__": "date"\n}'},
				{"type": "paragraph", "text": 'Hash values are not limited to simple data nodes and can also be Arrays, Options, Parents, and even other Hashes. In the case of Arrays, Options, and Hashes, the trick is in setting the "__type__" paramter to the underlying Node.'},
				{"type": "code", "code": "javascript", "text": '// Dynamic list of validated strings to Parents\n// {\n//  "1080p": {"width": 1920, "height": 1080},\n//  "720p": {"width": 1280, "height": 720}\n// }\n\n{\n  "__hash__": {\n    "__type__": "string",\n    "__regex__": "^\\\\d+p$"\n  },\n  "width": "uint",\n  "height": "uint"\n}\n\n// Dynamic list of uuids to unique arrays of unsigned ints below 5\n// {\n//  "6432b16a-7e27-47cd-8360-82d82ac70078": [1, 2, 3],\n//  "3b44c5ed-0fea-4478-9f1b-939ae6ec0721": [2, 3, 4],\n//  "52cd4b20-ca32-4433-9516-0c8684ec57c2": [3, 4, 5]\n// }\n{\n  "__hash__": "uuid",\n  "__type__": {\n    "__array__": "unique",\n    "__type__": "uint",\n    "__maximum__": 5\n  }\n}\n\n// Hash of strings to hashes of strings to array of ints\n// {\n//  "I suck": {\n//    "une": [1, 2, 3],\n//    "deux": [2, 3, 4]\n//  },\n//  "at naming": {\n//    "trois": [3, 4, 5],\n//    "quatre": [4, 5]\n//  },\n//  "things": {\n//    "cinq": [5, 6, 7, 8]\n//  }\n// }\n{\n  "__hash__": "string",\n  "__type__": {\n    "__hash__": "string",\n    "__type__": {\n      "__array__": "unique",\n      "__type__": "uint"\n    }\n  }\n}'}
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
				{"type": "code", "code": "javascript", "text": '[\n  {"__type__": "md5"},\n  {"__type__": "uuid"}\n]'},
				{"type": "paragraph", "text": "That type of example is straight forward, but unlikely. Options Nodes are much more useful for complex data. For example, what if you wanted to store a series of messages in one document, but the data associated with the message was different based on the type?"},
				{"type": "code", "code": "javascript", "text": '[\n  {\n    "type": {"__type__":"string","__options__":["request"]},\n    "descr": {"__type__":"string","__optional__":true}\n  },{\n    "type": {"__type__":"string","__options__":["response"]},\n    "status": {"__type__":"bool"}\n  },{\n    "type": {"__type__":"string","__options__":["text"]},\n    "body": {"__type__":"string"},\n    "html": {"__type__":"bool"}\n  },{\n    "type": {"__type__":"string","__options__":["file"]},\n    "filename": {"__type__":"string"},\n    "mime": {"__type__":"string"},\n    "size": {"__type__":"uint"},\n    "file": {"__type__":"string"},\n    "resolution": {\n      "__optional__": true,\n      "h": {"__type__":"uint"},\n      "w": {"__type__":"uint"}\n    }\n  }\n]'},
				{"type": "paragraph", "text": "An OptionsNode like the preceeding could be passed any of the following values and be considered valid:"},
				{"type": "code", "code": "javascript", "text": '// A regular message\n{\n  "type": "text",\n  "body": "Hello, <b>world</b>!",\n  "html": true\n}\n\n// A request\n{\n  "type": "request"\n  "descr": "Pleae add me!"\n}\n\n// An attachment\n{\n  "type": "file",\n  "filename": "kitten.jpg",\n  "mime": "image/jpeg",\n  "size": 307965,\n  "file": "[some binary data to large for an example]",\n  "resolution": {\n    "h": 960,\n    "w": 1280\n  }\n}'}
			]
		},
		"parent-json": {
			"title": "Parent & Tree Format",
			"pagination": {
				"prev": "option-json",
				"next": "loading"
			},
			"sections": [
				{"type": "title", "text": "Parents"},
				{"type": "paragraph", "text": "Parents are how we bring defined key/value Nodes together. Parents are simply strings, the key, pointing to other nodes."},
				{"type": "code", "code": "javascript", "text": '// Resolution\n{\n  "width": {"__type__": "uint"},\n  "height": {"__type__": "uint"}\n}\n\n// Decimal\n{\n  "digits": {"__array__": "duplicates", "__type__": "uint"},\n  "exponent": {"__type__": "uint"},\n  "sign": {"__type__": "bool"}\n}\n\n// File\n{\n  "filename": {"__type__": "string"},\n  "mime": {"__type__": "string"},\n  "size": {"__type__": "uint"},\n  "resolution": {\n    "__optional__": true,\n    "height": {"__type__": "uint"},\n    "width": {"__type__": "uint"}\n  }\n}'},
				{"type": "paragraph", "text": "Parents allow for just type strings for straight forward types, so the above could all be written as:"},
				{"type": "code", "code": "javascript", "text": '// Resolution\n{\n  "width": "uint",\n  "height": "uint"\n}\n\n// Decimal\n{\n  "digits": {"__array__": "duplicates", "__type__": "uint"},\n  "exponent": "uint",\n  "sign": "bool"\n}\n\n// File\n{\n  "filename": "string",\n  "mime": "string",\n  "size": "uint",\n  "resolution": {\n    "__optional__": true,\n    "height": "uint",\n    "width": "uint"\n  }\n}'},
				{"type": "paragraph", "text": "Parents also allow for adding the __optional__ flag as is seen in the File example. Setting the optional parameter allows for a value to not be set and for the Parent to still be valid without it. For example, the following would still be a valid value even without the resolution key:"},
				{"type": "code", "code": "javascript", "text": '{\n  "filename": "class_notes.doc",\n  "mime": "application/msword",\n  "size": 12456,\n}'},
				{"type": "paragraph", "text": "The optional flag can be added to any value that is a child of a parent."},
				{"type": "code", "code": "javascript", "text": '// Optional Array of ints\n{\n  "__array__": "duplicates",\n  "__optional__": true,\n  "__type__": "int"\n}\n\n// Optional Hash of strings to MD5s\n{\n  "__hash__": "string",\n  "__optional__": true,\n  "__type__", "md5"\n}'},
				{"type": "paragraph", "text": "If a value is optional it can be ommitted entirely, or it can be sent a NULL value, either will validate as correct"},

				{"type": "title", "text": "Trees"},
				{"type": "paragraph", "text": 'Trees are top level Parents. There are only two differences between a Tree and a Parent. One is that while a Parent and Tree can contain Parents, a Parent can not contain a Tree. Two is that a Tree requires the special paramter "__name__".'},
				{"type": "paragraph", "text": 'The name parameter is useful for error messaging so that in the case of two definitions like the following, you will know "message.size" comes from the first, and not the second. Without a name the error will simply contain "size" and it might be hard to associate the error message with the correct field in the correct structure.'},
				{"type": "code", "code": "javascript", "text": '// Message structure\n{\n  "__name__": "message",\n  "size": "uint"\n}\n\n// File structure\n{\n  "__name__": "file",\n  "size": "uint"\n}'}
			]
		},

		// Using the code
		"loading": {
			"title": "Loading / Initialising Definitions",
			"pagination": {
				"prev": "parent-json",
				"next": "valid"
			},
			"sections": [
				{"type": "markdown", "text": "Although any Node type can be created directly in code, in general you're going to want to make an instance of a [Tree](#platform=|PLATFORM|&page=parent-json) as you can validate or clean your entire structure with one call."},
				{"type": "paragraph", "text": 'For this example and all further pages in the "Using the code" section we will be working with a semi-complex tree for storing patient information in a practice/clinic. It does not contain every single type, and it lacks an example of the OptionsNode, but it should be sufficient to explain the basic uses of the library.'},
				{"type": "code", "text": {
					"javascript": 'var FormatOC = require("format-oc");\n\nvar patientTree = new FormatOC.Tree({\n  "__rethinkdb__": {\n    "db": "emr",\n    "changes": ["creator"],\n    "table": "patient"\n  },\n  "__name__":"Patient",\n  "_id": {"__type__": "uuid", "__optional__": true},\n  "_created": {"__type__": "timestamp"},\n  "profile_id": {"__type__": "uuid", "__optional__": true},\n  "name": {"__type__": "string", "__optional__": true},\n  "name_first": {"__type__": "string"},\n  "name_last": {"__type__": "string"},\n  "name_middle": {"__type__": "string", "__optional__": true},\n  "email": {"__type__": "string", "__optional__": true},\n  "gender": {"__type__": "string", "__options__": ["female", "male", "other"]},\n  "dob": {"__type__": "date"},\n  "locale":{"__type__": "string", "__regex__":"^[a-z]{2}-[A-Z]{2}$"},\n  "comm": {"__type__": "string", "__options__": ["phone", "sms", "email"]},\n  "phone_numbers": {\n    "__optional__": true,\n    "__array__": "unique",\n    "type": {"__type__": "string", "__options__": ["cell","home","work","fax"]},\n    "number": {"__type__": "string", "__regex__": "^\\+1\\d{10}$"},\n    "primary": {"__type__": "bool"}\n  },\n  "address": {\n    "__optional__": true,\n    "line1": {"__type__": "string"},\n    "line2": {"__type__": "string", "__optional__": true},\n    "city": {"__type__": "string"},\n    "division": {"__type__": "string", "__optional__": true},\n    "country": {"__type__": "string"},\n    "code": {"__type__": "string"}\n  },\n  "practices": {\n    "__hash__": "uuid",\n    "__type__": "uuid"\n  },\n  "gaurantors": {\n    "__optional__": true,\n    "__array__": "unique",\n    "__type__": "uuid"\n  }\n});',
					"php": 'require "FormatOC.php"\n\n$patientTree = new FormatOC\\Tree(array(\n  "__rethinkdb__" => array(\n    "db" => "emr",\n    "changes" => array("creator"),\n    "table" => "patient"\n  ),\n  "__name__":"Patient",\n  "_id" => array("__type__" => "uuid", "__optional__" => true),\n  "_created" => array("__type__" => "timestamp"),\n  "profile_id" => array("__type__" => "uuid", "__optional__" => true),\n  "name" => array("__type__" => "string", "__optional__" => true),\n  "name_first" => array("__type__" => "string"),\n  "name_last" => array("__type__" => "string"),\n  "name_middle" => array("__type__" => "string", "__optional__" => true),\n  "email" => array("__type__" => "string", "__optional__" => true),\n  "gender" => array("__type__" => "string", "__options__" => array("female", "male", "other")),\n  "dob" => array("__type__" => "date"),\n  "locale" => array("__type__" => "string", "__regex__":"^[a-z]{2}-[A-Z]{2}$"),\n  "comm" => array("__type__" => "string", "__options__" => array("phone", "sms", "email")),\n  "phone_numbers" => array(\n    "__optional__" => true,\n    "__array__" => "unique",\n    "type" => array("__type__" => "string", "__options__" => array("cell","home","work","fax")),\n    "number" => array("__type__" => "string", "__regex__" => "^\\+1\\d{10}$"),\n    "primary" => array("__type__" => "bool")\n  ),\n  "address" => array(\n    "__optional__" => true,\n    "line1" => array("__type__" => "string"),\n    "line2" => array("__type__" => "string", "__optional__" => true),\n    "city" => array("__type__" => "string"),\n    "division" => array("__type__" => "string", "__optional__" => true),\n    "country" => array("__type__" => "string"),\n    "code" => array("__type__" => "string")\n  ),\n  "practices" => array(\n    "__hash__" => "uuid",\n    "__type__" => "uuid"\n  ),\n  "gaurantors" => array(\n    "__optional__" => true,\n    "__array__" => "unique",\n    "__type__" => "uuid"\n  )\n));',
					"python": 'from FormatOC import Tree\n\npatientTree = Tree({\n  "__rethinkdb__": {\n    "db": "emr",\n    "changes": ["creator"],\n    "table": "patient"\n  },\n  "__name__":"Patient",\n  "_id": {"__type__": "uuid", "__optional__": True},\n  "_created": {"__type__": "timestamp"},\n  "profile_id": {"__type__": "uuid", "__optional__": True},\n  "name": {"__type__": "string", "__optional__": True},\n  "name_first": {"__type__": "string"},\n  "name_last": {"__type__": "string"},\n  "name_middle": {"__type__": "string", "__optional__": True},\n  "email": {"__type__": "string", "__optional__": True},\n  "gender": {"__type__": "string", "__options__": ["female", "male", "other"]},\n  "dob": {"__type__": "date"},\n  "locale":{"__type__": "string", "__regex__":"^[a-z]{2}-[A-Z]{2}$"},\n  "comm": {"__type__": "string", "__options__": ["phone", "sms", "email"]},\n  "phone_numbers": {\n    "__optional__": True,\n    "__array__": "unique",\n    "type": {"__type__": "string", "__options__": ["cell","home","work","fax"]},\n    "number": {"__type__": "string", "__regex__": "^\\+1\\d{10}$"},\n    "primary": {"__type__": "bool"}\n  },\n  "address": {\n    "__optional__": True,\n    "line1": {"__type__": "string"},\n    "line2": {"__type__": "string", "__optional__": True},\n    "city": {"__type__": "string"},\n    "division": {"__type__": "string", "__optional__": True},\n    "country": {"__type__": "string"},\n    "code": {"__type__": "string"}\n  },\n  "practices": {\n    "__hash__": "uuid",\n    "__type__": "uuid"\n  },\n  "gaurantors": {\n    "__optional__": True,\n    "__array__": "unique",\n    "__type__": "uuid"\n  }\n})'
				}},
				{"type": "paragraph", "text": 'Although it is trivial to create Node instances directly using the data appropriate for your programming language, the idea of FormatOC being written in several languages is the ability to share definition files across different platforms/languages in order to be able to verify validation at whatever stage in the process. After all, why wait until your Python microservice gets the data to validate it, when your in-browser Javascript code can validate it before any request is made to the backend. So instead of loading the data directly, consider storing your definitions as JSON files which can be changed in one place and loaded from several different applications.'},
				{"type": "paragraph", "text": {
					"javascript": "As the Javascript version of this library is primarily intended for use in-browser, I did not supply any file loading function. However this is trivial if you are using Node.js as you can see from the example below.",
					"php": "In PHP you can accomplish this by using the fromFile method which every Node type (Node, ArrayNode, ParentNode, etc) provides. This method will load a file, parse the JSON into valid PHP data, and return a new instance for you.",
					"python": "In Python you can accomplish this by using the fromFile method which every Node type (Node, ArrayNode, Parent, etc) provides. This method will load a file, parse the JSON into valid Python data, and return a new instance for you."
				}},
				{"type": "code", "text": {
					"javascript": 'var fs = require("fs");\nvar FormatOC = require("format-oc");\n\nvar patientTree = FormatOC.Tree(\n  JSON.parse(\n    fs.readFileSync("definitions/patient.json", "utf8")\n  )\n);',
					"php": 'require "FormatOC.php";\n\n$patientTree = FormatOC\\Tree::fromFile("definitions/patient.json");',
					"python": 'from FormatOC import Tree\n\npatientTree = Tree.fromFile("definitions/patient.json")'
				}}
			]
		},

		"valid": {
			"title": "Validating",
			"pagination": {
				"prev": "loading",
				"next": "clean"
			},
			"sections": [
				{"type": "markdown", "text": "Validating data with FormatOC is as simple as passing your data to the valid method of any Node instance. Valid will return a bool based on the data received, true for a valid data structure, false for an invalid one. Given the example from the previous page [Loading / Initialising Definitions](#platform=|PLATFORM|&page=loading) here are some examples of using valid and what it will return."},
				{"type": "code", "text": {
					"javascript": '// True\npatientTree.valid({\n  "_id": "52cd4b20-ca32-4433-9516-0c8684ec57c2",\n  "_created": 1552152504,\n  "profile_id": "3b44c5ed-0fea-4478-9f1b-939ae6ec0721",\n  "name_first": "Robert",\n  "name_last": "Paulson",\n  "name_middle": "",\n  "email": "rpaulson@stuff.com",\n  "gender": "male",\n  "dob": "1956-03-11",\n  "locale": "en-US",\n  "comm": "email",\n  "phone_numbers": [\n    {"type": "cell", "number": "15145550123", "primary": true},\n    {"type": "work", "number": "14505553210", "primary": false}\n  ],\n  "address": {\n    "line1": "123 Elm Street",\n    "city": "Montreal",\n    "division": "Quebec",\n    "country": "Canada",\n    "code": "H3K 1T1"\n  },\n  "practices": {\n    "6432b16a-7e27-47cd-8360-82d82ac70078": "be89d217-1b92-4a50-94c5-132a805dd49e",\n    "f6dae2c8-4653-4746-b9b0-6b14a8e7f7e9": "b827517a-629d-4646-bb29-6c59d733170b"\n  },\n  "gaurontors": ["82d6b3c1-c7b8-4605-a5ef-30bed424ac70"]\n});\n\n// True, only optional fields missing\npatientTree.valid({\n  "_created": 1552152504,\n  "name_first": "Robert",\n  "name_last": "Paulson",\n  "gender": "male",\n  "dob": "1956-03-11",\n  "locale": "en-US",\n  "comm": "email",\n  "practices": {\n    "6432b16a-7e27-47cd-8360-82d82ac70078": "be89d217-1b92-4a50-94c5-132a805dd49e",\n    "f6dae2c8-4653-4746-b9b0-6b14a8e7f7e9": "b827517a-629d-4646-bb29-6c59d733170b",\n    "f10c29ec-f41f-400b-8fc6-e4013bdf28f2": "e1043911-776e-4bb5-815a-d97f489d297b"\n  }\n});\n\n// False, practices missing\npatientTree.valid({\n  "_created": 1552152504,\n  "name_first": "Robert",\n  "name_last": "Paulson",\n  "gender": "male",\n  "dob": "1956-03-11",\n  "locale": "en-US",\n  "comm": "email"\n});\n\n// False, gender must be lowercase, dob missing\npatientTree.valid({\n  "_created": 1552152504,\n  "name_first": "Robert",\n  "name_last": "Paulson",\n  "gender": "MALE",\n  "locale": "en-US",\n  "comm": "email",\n  "practices": {\n    "6432b16a-7e27-47cd-8360-82d82ac70078": "be89d217-1b92-4a50-94c5-132a805dd49e",\n    "f6dae2c8-4653-4746-b9b0-6b14a8e7f7e9": "b827517a-629d-4646-bb29-6c59d733170b",\n    "f10c29ec-f41f-400b-8fc6-e4013bdf28f2": "e1043911-776e-4bb5-815a-d97f489d297b"\n  }\n});\n\n// False, date invalid (no 13th month)\npatientTree.valid({\n  "_created": 1552152504,\n  "name_first": "Robert",\n  "name_last": "Paulson",\n  "gender": "male",\n  "dob": "1956-13-03",\n  "locale": "en-US",\n  "comm": "email",\n  "practices": {\n    "6432b16a-7e27-47cd-8360-82d82ac70078": "be89d217-1b92-4a50-94c5-132a805dd49e",\n    "f6dae2c8-4653-4746-b9b0-6b14a8e7f7e9": "b827517a-629d-4646-bb29-6c59d733170b",\n    "f10c29ec-f41f-400b-8fc6-e4013bdf28f2": "e1043911-776e-4bb5-815a-d97f489d297b"\n  }\n});',
					"php": '// True\n$patientTree->valid(array(\n  "_id" => "52cd4b20-ca32-4433-9516-0c8684ec57c2",\n  "_created" => 1552152504,\n  "profile_id" => "3b44c5ed-0fea-4478-9f1b-939ae6ec0721",\n  "name_first" => "Robert",\n  "name_last" => "Paulson",\n  "name_middle" => "",\n  "email" => "rpaulson@stuff.com",\n  "gender" => "male",\n  "dob" => "1956-03-11",\n  "locale" => "en-US",\n  "comm" => "email",\n  "phone_numbers" => array(\n    array("type" => "cell", "number" => "15145550123", "primary" => true)\n    array("type" => "work", "number" => "14505553210", "primary" => false)\n  ),\n  "address" => array(\n    "line1" => "123 Elm Street",\n    "city" => "Montreal",\n    "division" => "Quebec",\n    "country" => "Canada",\n    "code" => "H3K 1T1"\n  ),\n  "practices" => array(\n    "6432b16a-7e27-47cd-8360-82d82ac70078" => "be89d217-1b92-4a50-94c5-132a805dd49e",\n    "f6dae2c8-4653-4746-b9b0-6b14a8e7f7e9" => "b827517a-629d-4646-bb29-6c59d733170b"\n  ),\n  "gaurontors" => array("82d6b3c1-c7b8-4605-a5ef-30bed424ac70")\n));\n\n// True, only optional fields missing\n$patientTree->valid({\n  "_created" => 1552152504,\n  "name_first" => "Robert",\n  "name_last" => "Paulson",\n  "gender" => "male",\n  "dob" => "1956-03-11",\n  "locale" => "en-US",\n  "comm" => "email",\n  "practices" => array(\n    "6432b16a-7e27-47cd-8360-82d82ac70078" => "be89d217-1b92-4a50-94c5-132a805dd49e",\n    "f6dae2c8-4653-4746-b9b0-6b14a8e7f7e9" => "b827517a-629d-4646-bb29-6c59d733170b",\n    "f10c29ec-f41f-400b-8fc6-e4013bdf28f2" => "e1043911-776e-4bb5-815a-d97f489d297b"\n  )\n));\n\n// False, practices missing\n$patientTree->valid(array(\n  "_created" => 1552152504,\n  "name_first" => "Robert",\n  "name_last" => "Paulson",\n  "gender" => "male",\n  "dob" => "1956-03-11",\n  "locale" => "en-US",\n  "comm" => "email"\n));\n\n// False, gender must be lowercase, dob missing\n$patientTree->valid(array(\n  "_created" => 1552152504,\n  "name_first" => "Robert",\n  "name_last" => "Paulson",\n  "gender" => "MALE",\n  "locale" => "en-US",\n  "comm" => "email",\n  "practices" => array(\n    "6432b16a-7e27-47cd-8360-82d82ac70078" => "be89d217-1b92-4a50-94c5-132a805dd49e",\n    "f6dae2c8-4653-4746-b9b0-6b14a8e7f7e9" => "b827517a-629d-4646-bb29-6c59d733170b",\n    "f10c29ec-f41f-400b-8fc6-e4013bdf28f2" => "e1043911-776e-4bb5-815a-d97f489d297b"\n  )\n));\n\n// False, date invalid (no 13th month)\n$patientTree->valid(array(\n  "_created" => 1552152504,\n  "name_first" => "Robert",\n  "name_last" => "Paulson",\n  "gender" => "male",\n  "dob" => "1956-13-03",\n  "locale" => "en-US",\n  "comm" => "email",\n  "practices" => array(\n    "6432b16a-7e27-47cd-8360-82d82ac70078" => "be89d217-1b92-4a50-94c5-132a805dd49e",\n    "f6dae2c8-4653-4746-b9b0-6b14a8e7f7e9" => "b827517a-629d-4646-bb29-6c59d733170b",\n    "f10c29ec-f41f-400b-8fc6-e4013bdf28f2" => "e1043911-776e-4bb5-815a-d97f489d297b"\n  )\n));',
					"python": '# True\npatientTree.valid({\n  "_id": "52cd4b20-ca32-4433-9516-0c8684ec57c2",\n  "_created": 1552152504,\n  "profile_id": "3b44c5ed-0fea-4478-9f1b-939ae6ec0721",\n  "name_first": "Robert",\n  "name_last": "Paulson",\n  "name_middle": "",\n  "email": "rpaulson@stuff.com",\n  "gender": "male",\n  "dob": "1956-03-11",\n  "locale": "en-US",\n  "comm": "email",\n  "phone_numbers": [\n    {"type": "cell", "number": "15145550123", "primary": True},\n    {"type": "work", "number": "14505553210", "primary": False}\n  ],\n  "address": {\n    "line1": "123 Elm Street",\n    "city": "Montreal",\n    "division": "Quebec",\n    "country": "Canada",\n    "code": "H3K 1T1"\n  },\n  "practices": {\n    "6432b16a-7e27-47cd-8360-82d82ac70078": "be89d217-1b92-4a50-94c5-132a805dd49e",\n    "f6dae2c8-4653-4746-b9b0-6b14a8e7f7e9": "b827517a-629d-4646-bb29-6c59d733170b"\n  },\n  "gaurontors": ["82d6b3c1-c7b8-4605-a5ef-30bed424ac70"]\n})\n\n# True, only optional fields missing\npatientTree.valid({\n  "_created": 1552152504,\n  "name_first": "Robert",\n  "name_last": "Paulson",\n  "gender": "male",\n  "dob": "1956-03-11",\n  "locale": "en-US",\n  "comm": "email",\n  "practices": {\n    "6432b16a-7e27-47cd-8360-82d82ac70078": "be89d217-1b92-4a50-94c5-132a805dd49e",\n    "f6dae2c8-4653-4746-b9b0-6b14a8e7f7e9": "b827517a-629d-4646-bb29-6c59d733170b",\n    "f10c29ec-f41f-400b-8fc6-e4013bdf28f2": "e1043911-776e-4bb5-815a-d97f489d297b"\n  }\n})\n\n# False, practices missing\npatientTree.valid({\n  "_created": 1552152504,\n  "name_first": "Robert",\n  "name_last": "Paulson",\n  "gender": "male",\n  "dob": "1956-03-11",\n  "locale": "en-US",\n  "comm": "email"\n})\n\n# False, gender must be lowercase, dob missing\npatientTree.valid({\n  "_created": 1552152504,\n  "name_first": "Robert",\n  "name_last": "Paulson",\n  "gender": "MALE",\n  "locale": "en-US",\n  "comm": "email",\n  "practices": {\n    "6432b16a-7e27-47cd-8360-82d82ac70078": "be89d217-1b92-4a50-94c5-132a805dd49e",\n    "f6dae2c8-4653-4746-b9b0-6b14a8e7f7e9": "b827517a-629d-4646-bb29-6c59d733170b",\n    "f10c29ec-f41f-400b-8fc6-e4013bdf28f2": "e1043911-776e-4bb5-815a-d97f489d297b"\n  }\n})\n\n# False, dob invalid (no 13th month)\npatientTree.valid({\n  "_created": 1552152504,\n  "name_first": "Robert",\n  "name_last": "Paulson",\n  "gender": "male",\n  "dob": "1956-13-03",\n  "locale": "en-US",\n  "comm": "email",\n  "practices": {\n    "6432b16a-7e27-47cd-8360-82d82ac70078": "be89d217-1b92-4a50-94c5-132a805dd49e",\n    "f6dae2c8-4653-4746-b9b0-6b14a8e7f7e9": "b827517a-629d-4646-bb29-6c59d733170b",\n    "f10c29ec-f41f-400b-8fc6-e4013bdf28f2": "e1043911-776e-4bb5-815a-d97f489d297b"\n  }\n})'
				}},
				{"type": "markdown", "text": 'Keep in mind the valid method is very lax about what is and isn\'t valid. It is meant as a first step towards making sure user input is entered correctly, but it does this knowing that most client data is provided in the form of strings, regardless of the data type. Where this is particularly useful is in dealing with numbers, whether whole or fractional. Take the following definition for example.'},
				{"type": "code", "code": "javascript", "text": '// Decimal structure\n{\n  "digits": {"__array__": "duplicates", "__type__": "uint"}\n  "exponent": "uint"\n  "positive": "bool"\n}'},
				{"type": "code", "text": {
					"javascript": 'var fs = require("fs");\nvar FormatOC = require("format-oc");\n\nvar decimalStruct = FormatOC.Parent(\n  JSON.parse(\n    fs.readFileSync("definitions/decimal.json)"\n  )\n);',
					"php": 'require "FormatOC.php";\n\n$decimalStruct = ParentNode.fromFile("definitions/decimal.json");',
					"python": 'from FormatOC import Parent\n\nvar decimalStruct = Parent.fromFile("definitions/decimal.json")'
				}},
				{"type": "paragraph", "text": "All of the following would be considered valid."},
				{"type": "code", "text": {
					"javascript": 'decimalStruct.valid({\n  "digits": [1],\n  "exponent": "5",\n  "positive": true\n});\n\ndecimalStruct.valid({\n  "digits": ["1"],\n  "exponent": 5,\n  "positive": false\n});\n\ndecimalStruct.valid({\n  "digits": ["1"],\n  "exponent": "5",\n  "positive": "true"\n});',
					"php": '$decimalStruct->valid(array(\n  "digits" => array(1)\n  "exponent" => "5",\n  "positive" => true\n));\n\n$decimalStruct->valid(array(\n  "digits" => array("1"),\n  "exponent" => 5,\n  "positive" => false\n);\n\n$decimalStruct->valid(array(\n  "digits" => array("1"),\n  "exponent" => "5",\n  "positive" => "true"\n));',
					"python": 'decimalStruct.valid({\n  "digits": [1],\n  "exponent": "5",\n  "positive": True\n})\n\ndecimalStruct.valid({\n  "digits": ["1"],\n  "exponent": 5,\n  "positive": False\n})\n\ndecimalStruct.valid({\n  "digits": ["1"],\n  "exponent": "5",\n  "positive": "True"\n})'
				}},
				{"type": "paragraph", "text": 'FormatOC considers any string that corresponds to a valid number or boolean to still be valid. In the case of bools, it considers any of the following to be a positive value: "true", "True", "TRUE", "t", "T", "yes", "Yes", "YES", "y", "Y", "x", "1". Any other string is consider negative, or false.'},
				{"type": "markdown", "text": "Because of this it is vitally important that after validation, but before storing any data, you [clean](#platform=|PLATFORM|&page=clean) the data."}
			]
		},

		"clean": {
			"title": "Cleaning",
			"pagination": {
				"prev": "valid",
				"next": "special"
			},
			"sections": [
				{"type": "markdown", "text": 'While [valid](#platform=|PLATFORM|&page=valid) is useful for making sure client data is returned in a valid format even if numbers are stings, it doesn\'t make sure data is good enough to store in a database, or to do arithmetic on. This is where the second step, cleaning, comes into play.'},
				{"type": "paragraph", "text": 'Every node provides a clean method that takes the data recieved and makes sure it exactly matches the definition type. In most cases, Array, Hash, Options, and Parent, clean simply passes off to the child type of Nodes the cleaning, and they are returned in the proper structure, be it array or object. For Node\'s clean will look at the type, and for any numeric or boolean, make sure the value is not just a representation, but a valid value for the type.'},
				{"type": "markdown", "text": 'Take the decimal definition from the previous page, [valid](#platform=|PLATFORM|&page=valid). We saw that any string passed to an integer or boolean field is still considered valid if it represents the value it\'s supposed to hold. But call clean on the examples:'},
				{"type": "code", "text": {
					"javascript": '// Returns: {\n//   "digits": [1],\n//   "exponent": 5,\n//   "positive": true\n// }\ndecimalStruct.clean({\n  "digits": [1],\n  "exponent": "5",\n  "positive": true\n});\n\n// Returns: {\n//   "digits": [1],\n//   "exponent": 5,\n//   "positive": false\n// }\ndecimalStruct.clean({\n  "digits": ["1"],\n  "exponent": 5,\n  "positive": false\n});\n\n// Returns: {\n//   "digits": [1],\n//   "exponent": 5,\n//   "positive": true\n// }\ndecimalStruct.clean({\n  "digits": ["1"],\n  "exponent": "5",\n  "positive": "True"\n});',
					"php": '// Returns: array(\n//   "digits" => array(1),\n//   "exponent" => 5,\n//   "positive" => true\n// )\n$decimalStruct->clean(array(\n  "digits" => array(1),\n  "exponent" => "5",\n  "positive" => true\n));\n\n// Returns: array(\n//   "digits": array(1),\n//   "exponent": 5,\n//   "positive": false\n// )\n$decimalStruct->clean(array(\n  "digits" => array("1"),\n  "exponent" => 5,\n  "positive" => false\n));\n\n// Returns: array(\n//   "digits" => array(1),\n//   "exponent" => 5,\n//   "positive" => true\n// )\n$decimalStruct->clean(array(\n  "digits" => array("1"),\n  "exponent" => "5",\n  "positive" => "True"\n));',
					"python": '# Returns: {\n#   "digits": [1],\n#   "exponent": 5,\n#   "positive": True\n# }\ndecimalStruct.clean({\n  "digits": [1],\n  "exponent": "5",\n  "positive": True\n})\n\n# Returns: {\n#   "digits": [1],\n#   "exponent": 5,\n#   "positive": False\n# }\ndecimalStruct.clean({\n  "digits": ["1"],\n  "exponent": 5,\n  "positive": False\n})\n\n# Returns: {\n#   "digits": [1],\n#   "exponent": 5,\n#   "positive": True\n# }\ndecimalStruct.clean({\n  "digits": ["1"],\n  "exponent": "5",\n  "positive": "True"\n})'
				}}
			]
		},

		"special": {
			"title": "Special Fields",
			"pagination": {
				"prev": "clean",
				"next": "errors"
			},
			"sections": [
				{"type": "markdown", "text": 'Special fields are useful for integrating or extending FormatOC into other libraries. You might have noticed in the Patient example on the [Loading Definitions](#platform=|PLATFORM|&page=loading) that there\'s a "\\_\\_rethinkdb\\_\\_" field in the definition that\'s not used or validated against. The reason for this is that any field that starts and ends with a double underscore, not just \\_\\_array\\_\\_, \\_\\_type\\_\\_, etc, is considered special.'},
				{"type": "markdown", "text": 'In that particular case I have a personal library that abstracts some of the functionality of [RethinkDB](https://rethinkdb.com/), a great JSON document based database. By adding the special \\_\\_rethinkdb\\_\\_ field I can have my library load the FormatOC definition file and not only know exactly what fields are allowed in my document, in which table, but have the ability to clean those fields before storing them.'},
				{"type": "paragraph", "text": 'You can access the special fields using the special method which all Nodes except OptionsNode have.'},
				{"type": "code", "text": {
					"javascript": 'var rethinkData = patientTree.special("rethinkdb");',
					"php": '$rethinkData = $patientTree->special("rethinkdb");',
					"python": 'rethinkData = patientTree.special("rethinkdb")'
				}}
			]
		},

		"errors": {
			"title": "Errors",
			"pagination": {
				"prev": "clean"
			},
			"sections": [
				{"type": "markdown", "text": 'Errors in FormatOC are not returned directly. Instead, every node has a public member variable called "validation_failures" which is populated when the valid method returns false. This variable is always a list, as every error within a valid call is returned, not just the first one found. The individual items of each list are lists themselves, in which the first element, 0, is the name of the field which failed to valid, and the second element, 1, is the reason for the failure.'},
				{"type": "paragraph", "text": 'The error name is different based on the level at which valid was called. Take a look at the following simplified definition.'},
				{"type": "code", "text": {
					"javascript": 'var FormatOC = require("format-oc");\n\nvar o = new FormatOC.Tree({\n  "__name__": "Person",\n  "phone_numbers": {\n    "__array__": "unique",\n    "type": {"__type__": "string", "__options__": ["cell","home","work","fax"]},\n    "number": {"__type__": "string", "__regex__": "^\+1\d{10}$"},\n    "primary": {"__type__": "bool"}\n  }\n});',
					"php": 'require "FormatOC.php";\n\n$o = new FormatOC\\Tree(array(\n  "__name__" => "Person",\n  "phone_numbers" => array(\n    "__array__" => "unique",\n    "type" => array("__type__" => "string", "__options__" => array("cell","home","work","fax")),\n    "number" => array("__type__" => "string", "__regex__" => "^\+1\d{10}$"),\n    "primary" => array("__type__" => "bool")\n  )\n));',
					"python": 'from FormatOC import Tree\n\no = Tree({\n  "__name__": "Person",\n  "phone_numbers": {\n    "__array__": "unique",\n    "type": {"__type__": "string", "__options__": ["cell","home","work","fax"]},\n    "number": {"__type__": "string", "__regex__": "^\+1\d{10}$"},\n    "primary": {"__type__": "bool"}\n  }\n})'
				}},
				{"type": "paragraph", "text": 'If we were to call valid directly on the "phone_numbers" field with an error in one of the types: '},
				{"type": "code", "text": {
					"javascript": 'o.get("phone_numbers").valid([\n  {"type": "cell", "number": "15145550123", "primary": true},\n  {"type": "worl", "number": "14505553210", "primary": false}\n]);\n\no.get("phone_numbers").validation_failures;',
					"php": '$o["phone_numbers"]->valid(array(\n  array("type" => "cell", "number" => "15145550123", "primary" => true),\n  array("type" => "worl", "number" => "14505553210", "primary" => false)\n));\n\n$o["phone_numbers"]->validation_failures;',
					"python": 'o["phone_numbers"].valid([\n  {"type": "cell", "number": "15145550123", "primary": True},\n  {"type": "worl", "number": "14505553210", "primary": False}\n])\n\no["phone_numbers"].validation_failures'
				}},
				{"type": "paragraph", "text": "The resulting value would be: "},
				{"type": "code", "text": {
					"javascript": '[\n  ["[1].type", "not in options"]\n];',
					"php": 'array(\n  array("[1].type", "not in options")\n);',
					"python": '[\n  ("[1].type", "not in options")\n]'
				}},
				{"type": "paragraph", "text": 'If we were again to call valid directly on the "phone_numbers" field with an error in one of the types and an error in the other number: '},
				{"type": "code", "text": {
					"javascript": 'o.get("phone_numbers").valid([\n  {"type": "cell", "number": "1514555012", "primary": true},\n  {"type": "worl", "number": "14505553210", "primary": false}\n]);\n\no.get("phone_numbers").validation_failures;',
					"php": '$o["phone_numbers"]->valid(array(\n  array("type" => "cell", "number" => "1514555012", "primary" => True),\n  array("type" => "worl", "number" => "14505553210", "primary" => False)\n));\n\n$o["phone_numbers"]->validation_failures;',
					"python": 'o["phone_numbers"].valid([\n  {"type": "cell", "number": "1514555012", "primary": True},\n  {"type": "worl", "number": "14505553210", "primary": False}\n])\n\no["phone_numbers"].validation_failures'
				}},
				{"type": "paragraph", "text": "The resulting value would be: "},
				{"type": "code", "text": {
					"javascript": '[\n  ["[0].number", "failed regex (custom)"],\n  ["[1].type", "not in options"]\n];',
					"php": 'array(\n  array("[0].number", "failed regex (custom)"),\n  array("[1].type", "not in options")\n);',
					"python": '[\n  ("[0].number", "failed regex (custom)"),\n  ("[1].type", "not in options")\n]'
				}},
				{"type": "paragraph", "text": 'However, if we were to call valid at the Tree level: '},
				{"type": "code", "text": {
					"javascript": 'o.valid({\n  "phone_numbers": [\n    {"type": "cell", "number": "1514555012", "primary": true},\n    {"type": "worl", "number": "14505553210", "primary": false}\n  ]\n});\n\no.validation_failures;',
					"php": '$o->valid(array(\n  "phone_numbers" => array(\n    array("type" => "cell", "number" => "1514555012", "primary" => true),\n    array("type" => "worl", "number" => "14505553210", "primary" => false)\n  )\n))\n\n$o->validation_failures;',
					"python": 'o.valid({\n  "phone_numbers": [\n    {"type": "cell", "number": "1514555012", "primary": True},\n    {"type": "worl", "number": "14505553210", "primary": False}\n  ]\n})\n\no.validation_failures'
				}},
				{"type": "paragraph", "text": "The resulting value would be: "},
				{"type": "code", "text": {
					"javascript": '[\n  ["Person.phone_numbers[0].number", "failed regex (custom)"],\n  ["Person.phone_numbers[1].type", "not in options"]\n];',
					"php": 'array(\n  array("Person.phone_numbers[0].number", "failed regex (custom)"),\n  array("Person.phone_numbers[1].type", "not in options")\n);',
					"python": '[\n  ("Person.phone_numbers[0].number", "failed regex (custom)"),\n  ("Person.phone_numbers[1].type", "not in options")\n]'
				}},
				{"type": "paragraph", "text": "And if the definition was created as a Parent, rather than a Tree, the resulting value would be: "},
				{"type": "code", "text": {
					"javascript": '[\n  ["phone_numbers[0].number", "failed regex (custom)"],\n  ["phone_numbers[1].type", "not in options"]\n];',
					"php": 'array(\n  array("phone_numbers[0].number", "failed regex (custom)"),\n  array("phone_numbers[1].type", "not in options")\n);',
					"python": '[\n  ("phone_numbers[0].number", "failed regex (custom)"),\n  ("phone_numbers[1].type", "not in options")\n]'
				}}
			]
		}
	}
};

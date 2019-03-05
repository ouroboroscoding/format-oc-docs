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
		"install": {"title": "Installing & Importing", "sections": [
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
		]},

		// The format
		"node-json": {"title": "Node Format", "sections": [
			{"type": "paragraph", "text": "Nodes represent a single data point, whether it's an integer like 13, a simple string like \"Hello, world!\", or a more complex representation of a value, like this uuid \"52cd4b20-ca32-4433-9516-0c8684ec57c2\"."},
			{"type": "title", "text": "Simple Examples"},
			{"type": "paragraph", "text": "Let's start with a simple example, here is the JSON syntax for creating a simple Node, an integer that can store values between 1 and 10."},
			{"type": "code", "code": "javascript", "text": '{\n    "__type__": "int",\n    "__minimum__": 1,\n    "__maximum__": 10\n}'},
			{"type": "paragraph", "text": "If instead you only want even numbers."},
			{"type": "code", "code": "javascript", "text": '{\n    "__type__": "int",\n    "__options__": [2,4,6,8,10]\n}'},
			{"type": "title", "text": "Valid Types"},
			{"type": "paragraph", "text": "The valid types of Node are: any, base64, bool, date, datetime, decimal, float, int, ip, json, md5, price, string, time, timestamp, uint, uuid"},
			{"type": "paragraph", "text": "Not every Node has the same parameters, see below for specifics for how to make each"},
			{"type": "title", "text": "any"},
			{"type": "paragraph", "text": "This type isn't really recommended for anything except testing/debugging. An intermediate type until you are sure of what you need. Because of this it doesn't allow any options or min/max. Any value passed to it is valid, and if cleaned, it is returned as is."},
			{"type": "code", "code": "javascript", "text": '{\n    "__type__": "any"\n}'},
			{"type": "title", "text": "base64"},
			{"type": "markdown", "text": "This type is for validating [base64](https://en.wikipedia.org/wiki/Base64) values. Although neither really make a lot of sense, I decided to be lax for base64 and allow both the min/max and options parameters."},
			{"type": "code", "code": "javascript", "text": '// Any base64\n{\n    "__type__": "base64"\n}\n\n// List of allowed base64 values\n{\n    "__type__": "base64",\n    "__options__": ["SGVsbG8sIHRoaXMgaXMgYSB0ZXN0IQ==", "WW8gWW8gWW8=", "RG92ZXRhaWwgaXMgdGhlIHNoaXQu"]\n}'},
			{"type": "title", "text": "bool"},
			{"type": "markdown", "text": "Boolean types are another that can't have min/max or options due to the fact there is only ever two values for a bool."},
			{"type": "code", "code": "javascript", "text": '{\n    "__type__": "bool"\n}'},
			{"type": "title", "text": "date"},
			{"type": "markdown", "text": "Dates are validated in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, i.e. YYYY-MM-DD. This allows dates to easily be checked against others and makes minimum and maximum validation simple. It is the format the majority of structured databases accept. If this format doesn't work for you, consider using the string type with the regex parameter."},
			{"type": "code", "code": "javascript", "text": '// Any date\n{\n    "__type__": "date"\n}\n\n// Dates in 2018\n{\n    "__type__": "date",\n    "__minimum__": "2018-01-01",\n    "__maximum__": "2018-12-31"\n}'},
			{"type": "title", "text": "datetime"},
			{"type": "markdown", "text": "Date times are (mostly) validated in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, i.e. YYYY-MM-DD for date, and hh:mm:ss for time, but I opted to replace the \"t\" that ISO requires between the two with a space. The majority reason for this is because it is the format SQL DBs expect. If there's enough demand I will happily change this or add a second type to follow ISO 8601.  If this format doesn't work for you, consider using the string type with the regex parameter. Again, it would be very strange to use min/max or options on a datetime value, but it is allowed."},
			{"type": "code", "code": "javascript", "text": '// Any datetime\n{\n    "__type__": "datetime"\n}\n\n// Can only select 12:00 to 13:00 on May 2nd, 1981\n{\n    "__type__": "datetime",\n    "__minimum__": "1981-05-02 12:00:00",\n    "__maximum__": "1981-05-02 13:00:00"\n}'},
			{"type": "title", "text": "decimal"},
			{"type": "markdown", "text": "Any programmer who's dealt with floats can tell you they aren't the best for keeping 100% accurate values. Get too many decimal points in your float and you might lose accuracy. Decimals solve this by storing floating point numbers as the individual digits, exponent, and sign parts. Often Decimals are represented as strings in DBs so this is how FormatOC returns them when cleaned."},
			{"type": "code", "code": "javascript", "text": '// Any decimal\n{\n    "__type__": "decimal"\n}\n\n// Decimals between -40.0 and 40.0\n{\n    "__type__": "decimal",\n    "__minimum__": "-40.0",\n    "__maximum__": "40.0"\n}\n\n// Only 13.3, 16.6, and 19.9\n{\n    "__type__": "decimal",\n    "__options__": ["13.3", "16.6", "19.9"]\n}'},
			{"type": "title", "text": "float"},
			{"type": "markdown", "text": "Floats are the built in types in most languages for dealing with fraction, or non-whole, numbers. As stated in decimals, they can be inaccurate at times, but sometimes they are just what you need."},
			{"type": "code", "code": "javascript", "text": '// Any float\n{\n    "__type__": "float"\n}\n\n// Floats between -40.0 and 40.0\n{\n    "__type__": "float",\n    "__minimum__": -40.0,\n    "__maximum__": 40.0\n}\n\n// Only 13.3, 16.6, and 19.9\n{\n    "__type__": "float",\n    "__options__": [13.3, 16.6, 19.9]\n}'},
			{"type": "title", "text": "int"},
			{"type": "markdown", "text": "Integers are the built in types in most languages for dealing with whole numbers, values with no decimal or fraction. Integers are limited by the allowed memory used to store them, and they can be negative or positive."},
			{"type": "code", "code": "javascript", "text": '// Any int\n{\n    "__type__": "int"\n}\n\n// Ints between -40 and 40\n{\n    "__type__": "int",\n    "__minimum__": -40,\n    "__maximum__": 40\n}\n\n// Only 13, 16, and 19\n{\n    "__type__": "int",\n    "__options__": [13, 16, 19]\n}'},
			{"type": "title", "text": "ip"},
			{"type": "markdown", "text": "IP Addresses, specifically, version 4 addresses, are on their way out, but occasionally still needed."},
			{"type": "code", "code": "javascript", "text": '// Any IP\n{\n    "__type__": "ip"\n}\n\n// IPs in the 192.255.255.255 range\n{\n    "__type__": "ip",\n    "__minimum__": "192.0.0.1",\n    "__maximum__": "192.254.254.254"\n}'},
			{"type": "title", "text": "json"},
			{"type": "markdown", "text": "JSON is used for dynamic data that still has to be structually valid and not just garbage. It's extremely useful if you require complex, or dymanic, data that needs to be stored in a record based system, like SQL. Because of the complexity of JSON, you can not use min/max or options with it."},
			{"type": "code", "code": "javascript", "text": '{\n    "__type__": "json"\n}'},
			{"type": "title", "text": "md5"},
			{"type": "markdown", "text": "[MD5s](https://en.wikipedia.org/wiki/MD5) are mostly used as checksums against larger sets of data, like git commits. Due to the nature of MD5s, you can not use the min/max with them."},
			{"type": "code", "code": "javascript", "text": '// Any MD5\n{\n    "__type__": "md5"\n}\n\n// A list of valid MD5s\n{\n    "__type__": "md5",\n    "__options__": ["7b967af699a0a18b1f2bdc9704537a3e", "889ffd8cc409445187c4258d138192b6", "49c0d2aef0ab2634b0051544cdbf2415"]\n}'},
			{"type": "title", "text": "price"},
			{"type": "markdown", "text": "Prices are very similar to Decimals, and use the same underlying validation and libraries, but are limited to 2 decimal places and will always return with 2 decimal places if cleaned."},
			{"type": "code", "code": "javascript", "text": '// Any price\n{\n    "__type__": "price"\n}\n\n// Prices from $1.99 to $2.99\n{\n    "__type__": "price",\n    "__minimum__": "1.99",\n    "__maximum__": "2.99"\n}\n\n// $0.95, $0.99, $1.00\n{\n    "__type__": "price",\n    "__options__": ["0.95", "0.99", "1.00"]\n}'},
			{"type": "title", "text": "string"},
			{"type": "paragraph", "text": "Strings are a pretty straight forward concept, however they work differently than another Nodes in two ways. The first is that __minimum__ and __maximum__ do not expect other strings, but unsigned integers which represent the minimum and maximum length of characters the Node can contain. The second is they are the only Node type that allows the __regex__ parameter, which allows you to define your own validation for the string."},
			{"type": "code", "code": "javascript", "text": '// Any string\n{\n    "__type__": "string"\n}\n\n// At least 3 characters but no more than 15\n{\n    "__type__": "string",\n    "__minimum__": 3,\n    "__maximum__": 15\n}\n\n// True or False\n{\n    "__type__": "string",\n    "__options__": ["True", "False"]\n}\n\n// Any number, a dash, and 32 hex characters\n{\n    "__type__": "string",\n    "__regex__": "^\\\\d+\\\\-[a-fA-Z0-9]{32}$"\n}'},
			{"type": "title", "text": "time"},
			{"type": "markdown", "text": "Times are validated in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, i.e. hh:mm:ss. If this format doesn't work for you, consider using the string type with the regex parameter."},
			{"type": "code", "code": "javascript", "text": '// Any time\n{\n    "__type__": "time"\n}\n\n// Times in 12 noon\n{\n    "__type__": "time",\n    "__minimum__": "12:00:00",\n    "__maximum__": "12:59:59"\n}'},
			{"type": "title", "text": "timestamp"},
			{"type": "markdown", "text": "Timestamps, like uints, are simply unsigned integer values. This type is added simply to help make a definition file more clear and can be interchanged with uint."},
			{"type": "code", "code": "javascript", "text": '// Any timestamp\n{\n    "__type__": "timestamp"\n}\n\n// May 2nd, 1981 at 12:23pm to March 5th, 2019 at 6:29pm\n{\n    "__type__": "timestamp",\n    "__minimum__": 357668580,\n    "__maximum__": 1551828540\n}'},
			{"type": "title", "text": "uint"},
			{"type": "markdown", "text": "Unsigned integers are whole numbers that are zero or greater."},
			{"type": "code", "code": "javascript", "text": '// Any uint\n{\n    "__type__": "uint"\n}\n\n// 0 to 37\n{\n    "__type__": "uint",\n    "__maximum__": 37\n}'},
			{"type": "title", "text": "uuid"},
			{"type": "markdown", "text": "[UUIDs](https://en.wikipedia.org/wiki/Universally_unique_identifier) are universally unique IDs. Due to the nature of UUIDs, you can not use min/max with them."},
			{"type": "code", "code": "javascript", "text": '// Any UUID\n{\n    "__type__": "uuid"\n}\n\n// A list of valid UUIDs\n{\n    "__type__": "md5",\n    "__options__": ["52cd4b20-ca32-4433-9516-0c8684ec57c2", "3b44c5ed-0fea-4478-9f1b-939ae6ec0721", "6432b16a-7e27-47cd-8360-82d82ac70078"]\n}'},
		]},
		"array-json": {"title": "Array Format", "sections": [
			{"type": "paragraph", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{"type": "paragraph", "text": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}
		]},
		"hash-json": {"title": "Hash Format", "sections": [
			{"type": "paragraph", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{"type": "paragraph", "text": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}
		]},
		"option-json": {"title": "Option Format", "sections": [
			{"type": "paragraph", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{"type": "paragraph", "text": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}
		]},
		"parent-json": {"title": "Parent & Tree Format", "sections": [
			{"type": "paragraph", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
			{"type": "paragraph", "text": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}
		]},


		// Using the code
		"node": {"title": "Node class", "sections": [
			{"type": "markdown", "text": {
				"python": "In Python Decimals can be passed using the language's [decimal](https://docs.python.org/2/library/decimal.html) library.",
				"javascript": "In Javascript I opted to use the [decimal.js](https://github.com/MikeMcl/decimal.js/) library (with some extending) which can be accessed via FormatOC._Decimal."
			}}
		]}
	}
};

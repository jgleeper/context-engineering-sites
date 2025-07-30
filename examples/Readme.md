{
  "code_structure_patterns": {
    "module_organization": {
      "agents": ["agent.py", "tools.py", "prompts.py"],
      "web": ["/components", "/sections", "/app", "/utils", "/styles"]
    },
    "import_conventions": "Relative imports within packages; top-down ordering: standard lib, third-party, local.",
    "class_function_patterns": {
      "type_hints": true,
      "docstrings": "Google-style with Args and Returns",
      "inline_reason_comments": true,
      "max_file_length": 500,
      "splitting": "Modular helpers as needed"
    }
  },
  "testing_patterns": {
    "file_structure": "/tests mirrors main app structure",
    "mocking": "unittest.mock or dependency injection; external calls are mocked",
    "assertion_style": "Pytest assertions",
    "test_coverage": ["1 expected case", "1 edge case", "1 failure case"]
  },
  "integration_patterns": {
    "api_clients": "Encapsulated in tools.py or api.py with retries and headers",
    "database": {
      "library": "SQLAlchemy or SQLModel",
      "env": "Loaded via load_env() or .env.local",
      "structure": "Models and session separated"
    },
    "authentication": {
      "method": ["JWT", "API Keys"],
      "location": ".env only",
      "front_end_handling": "Tokens via middleware/session"
    }
  },
  "cli_patterns": {
    "argument_parsing": "argparse or click",
    "output_formatting": "rich, tabulate, or formatted print",
    "error_handling": "try/except with specific exceptions and user-friendly messages"
  }
}

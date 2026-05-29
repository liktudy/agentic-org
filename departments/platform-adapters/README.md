# Platform Adapters Department

The Platform Adapters Department keeps runtime-specific configuration separate from the organization source of truth.

Rules:

- Organization source of truth lives in `departments/` and `companies/`.
- Platform files are adapters only.
- Adapters must be generated or synchronized from organization definitions when possible.
- Runtime-specific files must not redefine authority, company structure, or role boundaries.

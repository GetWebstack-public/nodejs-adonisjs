# nodejs-adonisjs

A minimal [AdonisJS v6](https://adonisjs.com/) application running on Node.js.

## Requirements

### APP_KEY Secret

AdonisJS requires an `APP_KEY` to encrypt cookies, sessions, and other signed data. Before deploying this application you must create this secret in the GetWebstack app.

**Steps:**

1. Generate a secure key by running the following command inside the project directory:

   ```bash
   node ace generate:key
   ```

   This outputs a random base64-encoded string, for example:

   ```
   oJ3hLAHJPGsTbsGpN1Q3YKpF5s3rLG0o
   ```

2. In the **GetWebstack app**, navigate to the `nodejs-adonisjs` project and open the **Secrets** section.

3. Create a new secret with the following settings:

   | Field | Value |
   |-------|-------|
   | **Type** | `environment variable` |
   | **Name** | `APP_KEY` |
   | **Value** | *(the key generated in step 1)* |

The secret will be injected into the container at runtime via the Kubernetes secret `nodejs-adonisjs-env` and made available as the `APP_KEY` environment variable, as defined in the deployment manifest.

> **Note:** Secret values are securely stored in GetWebstack and injected at runtime — never commit them to source control.

## Running Locally

```bash
gws init
gws up
```

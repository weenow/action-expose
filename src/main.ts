import * as core from '@actions/core'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  const excludeList = ['github_token']

  try {
    const json_secrets: string = core.getInput('json_secrets', {
      required: true
    })
    const prefix: string = core.getInput('prefix')

    let secrets: Record<string, string>

    try {
      secrets = JSON.parse(json_secrets)
    } catch (error) {
      throw new Error(`Cannot parse JSON secrets.
      Make sure you add the following to this action:
      with: secrets: \${{ toJSON(secrets) }}`)
    }

    const secretsToFormat: string[] = []

    for (const [key, value] of Object.entries(secrets)) {
      if (excludeList.includes(key)) {
        continue
      }

      if (prefix) {
        secretsToFormat.push(`${prefix}_${key}=${value}`)
      }
    }

    const raw_secrets = secretsToFormat.join(' ')

    core.exportVariable('raw_secrets', raw_secrets)
    core.info('Secrets formatted and exported successfully')
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}

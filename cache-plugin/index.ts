import { execFile } from 'child_process';

import { promisify } from 'util';

const execFileAsync = promisify(execFile)

export async function onSuccess() {
  console.log('Creating cache files...')
  await execFileAsync('./snooty-parser/snooty/snooty', ['create-cache', '.'])
  console.log('Cache files created')
}
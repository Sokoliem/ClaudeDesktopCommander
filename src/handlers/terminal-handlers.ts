import { 
    executeCommand, 
    readOutput, 
    forceTerminate, 
    listSessions 
} from '../tools/execute.js';

import { 
    ExecuteCommandArgsSchema,
    ReadOutputArgsSchema,
    ForceTerminateArgsSchema,
    ListSessionsArgsSchema
} from '../tools/schemas.js';

/**
 * Handle execute_command command
 */
export async function handleExecuteCommand(args: unknown) {
    const parsed = ExecuteCommandArgsSchema.parse(args);
    return executeCommand(parsed);
}

/**
 * Handle read_output command
 */
export async function handleReadOutput(args: unknown) {
    const parsed = ReadOutputArgsSchema.parse(args);
    return readOutput(parsed);
}

/**
 * Handle force_terminate command
 */
export async function handleForceTerminate(args: unknown) {
    const parsed = ForceTerminateArgsSchema.parse(args);
    return forceTerminate(parsed);
}

/**
 * Handle list_sessions command
 */
export async function handleListSessions() {
    return listSessions();
}
